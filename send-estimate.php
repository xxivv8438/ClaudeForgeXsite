<?php
// ── Configuration ────────────────────────────────────────────────
$to         = 'info@forgexgc.com';
$from_name  = 'ForgeX GC Website';
$from_email = 'noreply@forgexgc.com';
$subject    = 'New Estimate Request – ForgeX GC';
$redirect_success = 'thank-you.html';   // change to your thank-you page
$redirect_error   = 'contact.html';     // change to your form page

// ── Security ─────────────────────────────────────────────────────
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Method not allowed.');
}

// Basic honeypot spam check (add a hidden field named "website" to your form)
if (!empty($_POST['website'])) {
    http_response_code(400);
    exit('Bad request.');
}

// ── Sanitize & collect all submitted fields ───────────────────────
function clean($value) {
    return htmlspecialchars(strip_tags(trim($value)), ENT_QUOTES, 'UTF-8');
}

$fields = [];
$skip   = ['website']; // honeypot fields to ignore

foreach ($_POST as $key => $value) {
    if (in_array($key, $skip)) continue;
    $label = ucwords(str_replace(['_', '-'], ' ', $key));
    $val   = is_array($value) ? implode(', ', array_map('clean', $value)) : clean($value);
    if ($val !== '') {
        $fields[$label] = $val;
    }
}

if (empty($fields)) {
    header("Location: $redirect_error?status=empty");
    exit;
}

// ── Build HTML email ──────────────────────────────────────────────
$date    = date('F j, Y \a\t g:i A');
$ip      = clean($_SERVER['REMOTE_ADDR'] ?? 'Unknown');
$rows    = '';

foreach ($fields as $label => $value) {
    $rows .= "
        <tr>
            <td style='padding:10px 16px;background:#f5f5f5;font-size:13px;
                       color:#555;font-weight:600;width:34%;
                       border-bottom:1px solid #e0e0e0;vertical-align:top;'>
                " . htmlspecialchars($label) . "
            </td>
            <td style='padding:10px 16px;font-size:13px;color:#111;
                       border-bottom:1px solid #e0e0e0;vertical-align:top;'>
                " . nl2br($value) . "
            </td>
        </tr>";
}

$html = "
<!DOCTYPE html>
<html lang='en'>
<head><meta charset='UTF-8'><title>New Estimate Request</title></head>
<body style='margin:0;padding:0;background:#f0f0f0;font-family:Arial,sans-serif;'>
  <table width='100%' cellpadding='0' cellspacing='0'
         style='background:#f0f0f0;padding:32px 16px;'>
    <tr><td align='center'>
      <table width='600' cellpadding='0' cellspacing='0'
             style='background:#ffffff;border-radius:6px;overflow:hidden;
                    border:1px solid #ddd;max-width:600px;width:100%;'>

        <!-- Header -->
        <tr>
          <td style='background:#0a0a0a;padding:28px 32px;'>
            <p style='margin:0;font-size:22px;font-weight:700;color:#fff;
                      letter-spacing:-0.5px;'>ForgeX<span style='color:#444'>GC</span></p>
            <p style='margin:6px 0 0;font-size:12px;color:#666;
                      letter-spacing:0.1em;text-transform:uppercase;'>
              New Estimate Request
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style='padding:28px 32px 8px;'>
            <p style='margin:0 0 4px;font-size:13px;color:#888;'>Received</p>
            <p style='margin:0 0 20px;font-size:14px;color:#111;font-weight:600;'>
              $date
            </p>
            <p style='margin:0;font-size:13px;color:#555;line-height:1.6;'>
              A customer has submitted an estimate request through your website.
              Their details are listed below.
            </p>
          </td>
        </tr>

        <!-- Fields table -->
        <tr>
          <td style='padding:16px 32px 28px;'>
            <table width='100%' cellpadding='0' cellspacing='0'
                   style='border:1px solid #e0e0e0;border-radius:4px;
                           overflow:hidden;border-collapse:collapse;'>
              $rows
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style='background:#f9f9f9;padding:16px 32px;
                     border-top:1px solid #eee;'>
            <p style='margin:0;font-size:11px;color:#aaa;'>
              Sent from forgexgc.com &nbsp;·&nbsp; IP: $ip
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>";

// ── Plain-text fallback ───────────────────────────────────────────
$plain  = "NEW ESTIMATE REQUEST – ForgeX GC\n";
$plain .= "Received: $date\n";
$plain .= str_repeat('-', 40) . "\n";
foreach ($fields as $label => $value) {
    $plain .= "$label: $value\n";
}
$plain .= str_repeat('-', 40) . "\n";
$plain .= "Sent from forgexgc.com | IP: $ip\n";

// ── Send email ────────────────────────────────────────────────────
$boundary = md5(uniqid(rand(), true));

$headers  = "From: $from_name <$from_email>\r\n";
$headers .= "Reply-To: " . ($fields['Email'] ?? $fields['E Mail'] ?? $from_email) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/alternative; boundary=\"$boundary\"\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

$body  = "--$boundary\r\n";
$body .= "Content-Type: text/plain; charset=UTF-8\r\n\r\n";
$body .= $plain . "\r\n";
$body .= "--$boundary\r\n";
$body .= "Content-Type: text/html; charset=UTF-8\r\n\r\n";
$body .= $html . "\r\n";
$body .= "--$boundary--";

$sent = mail($to, $subject, $body, $headers);

// ── Redirect ──────────────────────────────────────────────────────
if ($sent) {
    header("Location: $redirect_success");
} else {
    header("Location: $redirect_error?status=error");
}
exit;
?>

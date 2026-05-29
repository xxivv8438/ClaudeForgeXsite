import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LiveChat from '@/components/chat/LiveChat'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <LiveChat />
    </>
  )
}

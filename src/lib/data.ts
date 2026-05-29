import type { Service, PortfolioProject, BlogPost } from '@/types'

// ── Services ──────────────────────────────────────────────────────────────────

export const SERVICES: Service[] = [
  {
    id: 'svc-001',
    name: 'Kitchen Remodeling',
    slug: 'kitchen-remodeling',
    description:
      'Transform your kitchen into the culinary and social heart of your home. From custom cabinetry to professional-grade appliances, our artisans craft kitchens that balance beauty with function. Every detail — countertop seam, cabinet joint, and tile layout — is executed with meticulous precision.',
    shortDesc: 'Custom cabinetry, premium countertops, and chef-grade layouts.',
    icon: 'ChefHat',
    timeline: '6–12 weeks',
    priceRange: '$45,000 – $200,000+',
    features: [
      'Full space planning and 3D design rendering',
      'Custom cabinetry by certified craftsmen',
      'Waterfall-edge quartz and marble countertops',
      'Professional-grade appliance integration',
      'Under-cabinet and accent lighting design',
      'Tile backsplash artistry',
      'Plumbing and electrical coordination',
      'Pantry and storage optimization',
    ],
    faqs: [
      {
        q: 'How long does a full kitchen remodel take?',
        a: 'Most full-scope kitchen renovations with Forge X take 6 to 12 weeks, depending on the complexity of the design, lead times on custom cabinetry, and material sourcing. We provide a firm project schedule before any work begins.',
      },
      {
        q: 'Do you handle permits and inspections?',
        a: 'Yes. Forge X manages all necessary permits, inspections, and municipality coordination from start to finish. You never need to navigate the permit process yourself.',
      },
      {
        q: 'Can I stay in my home during the renovation?',
        a: 'For most kitchen renovations, yes. We establish clear work zones and maintain thorough daily cleanup. For very large projects, we will discuss logistics upfront so there are no surprises.',
      },
    ],
  },
  {
    id: 'svc-002',
    name: 'Bathroom Remodeling',
    slug: 'bathroom-remodeling',
    description:
      'Elevate your daily rituals with a bathroom that speaks to luxury and serenity. Forge X creates spa-caliber retreats featuring custom tilework, steam showers, freestanding soaking tubs, and bespoke vanities built to order. We transform ordinary bathrooms into extraordinary experiences.',
    shortDesc: 'Spa-level finishes, custom tilework, and bespoke vanity design.',
    icon: 'Bath',
    timeline: '3–8 weeks',
    priceRange: '$18,000 – $120,000+',
    features: [
      'Freestanding soaking tub installation',
      'Frameless glass steam shower enclosures',
      'Custom stone and porcelain tilework',
      'Heated radiant floor systems',
      'Bespoke vanity and mirror design',
      'Niche and built-in storage solutions',
      'Rainfall and body-spray shower systems',
      'Dual-sink configurations for master suites',
    ],
    faqs: [
      {
        q: 'What tile options do you work with?',
        a: 'We work with the full spectrum — from Calacatta marble slabs and handcrafted zellige to large-format porcelain and cement encaustic tiles. We source from premium domestic and European suppliers and can help you select the perfect material for your vision and budget.',
      },
      {
        q: 'Can you match existing tile that is no longer manufactured?',
        a: 'We work with specialty tile sources and experienced craftsmen who can often achieve a seamless match or design a complementary transition that looks intentional rather than mismatched.',
      },
    ],
  },
  {
    id: 'svc-003',
    name: 'Basement Finishing',
    slug: 'basement-finishing',
    description:
      'Your basement is untapped square footage waiting to become something exceptional. Whether a home theater, wine cellar, full guest suite, or entertainment lounge, Forge X transforms raw below-grade space into fully finished, climate-controlled living areas indistinguishable from the floors above.',
    shortDesc: 'Transform raw below-grade space into luxurious living areas.',
    icon: 'Layers',
    timeline: '8–16 weeks',
    priceRange: '$55,000 – $250,000+',
    features: [
      'Waterproofing and moisture management',
      'Egress window installation',
      'Home theater design and acoustic treatment',
      'Wine cellar with climate-control systems',
      'Full bath and wet bar rough-in and finish',
      'Custom built-in shelving and entertainment centers',
      'LVP and engineered hardwood flooring',
      'Full electrical, lighting, and HVAC integration',
    ],
    faqs: [
      {
        q: 'Do you handle moisture issues before finishing?',
        a: 'Absolutely. Forge X always addresses the envelope before any finish work begins. We assess the existing waterproofing, drainage, and humidity levels and implement corrective measures as needed. Skipping this step causes expensive failures — we never take shortcuts.',
      },
      {
        q: 'Will the finished basement feel like the rest of the house?',
        a: 'Yes. We integrate the same level of millwork, lighting, flooring, and finishes found throughout your home. A Forge X finished basement is never an afterthought — it is a seamless extension of your living space.',
      },
    ],
  },
  {
    id: 'svc-004',
    name: 'Roofing',
    slug: 'roofing',
    description:
      'Your roof is the first line of defense for your home and a major aesthetic statement. Forge X installs and restores roofing systems using premium materials — from architectural shingles and standing-seam metal to natural slate and copper accents — with a level of craftsmanship that stands for decades.',
    shortDesc: 'Premium roofing systems installed with uncompromising precision.',
    icon: 'Home',
    timeline: '1–3 weeks',
    priceRange: '$12,000 – $85,000+',
    features: [
      'Architectural asphalt shingle installation',
      'Standing-seam and corrugated metal roofing',
      'Natural slate and clay tile restoration',
      'Copper flashing and gutter systems',
      'Ice and water shield application',
      'Ventilation and ridge vent systems',
      'Chimney flashing and repointing',
      'Skylight installation and sealing',
    ],
    faqs: [
      {
        q: 'How do I know if I need a full replacement vs. repairs?',
        a: 'Forge X performs a thorough roof assessment before making any recommendations. We provide honest guidance — we only recommend full replacement when it is genuinely necessary and cost-effective compared to ongoing repairs.',
      },
    ],
  },
  {
    id: 'svc-005',
    name: 'Flooring',
    slug: 'flooring',
    description:
      'Flooring sets the tone for every room in your home. Forge X installs and restores a wide range of premium flooring — wide-plank hardwood, honed natural stone, large-format porcelain, and custom-pattern parquet — using proper subfloor preparation and techniques that ensure lasting beauty.',
    shortDesc: 'Wide-plank hardwood, stone, and custom parquet installations.',
    icon: 'LayoutGrid',
    timeline: '1–4 weeks',
    priceRange: '$8,000 – $60,000+',
    features: [
      'Wide-plank engineered and solid hardwood',
      'Hand-scraped and wire-brushed wood finishes',
      'Herringbone and chevron parquet patterns',
      'Honed and polished stone tile',
      'Large-format rectified porcelain',
      'Heated floor system integration',
      'Subfloor leveling and moisture barrier installation',
      'Custom inlay and medallion work',
    ],
    faqs: [
      {
        q: 'Can you match existing hardwood flooring in an older home?',
        a: 'Yes. We work with specialty mills that can produce custom species, widths, and grades to match legacy flooring. We also employ expert finishers who can blend stain colors seamlessly across new and existing sections.',
      },
    ],
  },
  {
    id: 'svc-006',
    name: 'Painting',
    slug: 'painting',
    description:
      'Color is the most immediate transformation a space can undergo. Forge X painting teams deliver flawless interior and exterior finishes — from meticulous surface preparation and precise trim work to color consultation and faux finish artistry. We use premium paints applied with museum-grade attention to detail.',
    shortDesc: 'Flawless interior and exterior finishes with expert color curation.',
    icon: 'Paintbrush',
    timeline: '1–2 weeks',
    priceRange: '$4,500 – $40,000+',
    features: [
      'Full interior painting and repainting',
      'Exterior painting with weather-grade coatings',
      'Cabinet painting and refinishing',
      'Accent wall and feature finish design',
      'Color consultation with leading designers',
      'Venetian plaster and limewash application',
      'Millwork, door, and trim painting',
      'Garage floor epoxy coating',
    ],
    faqs: [
      {
        q: 'Do you offer color consultation?',
        a: 'Yes. Every painting project includes a color consultation session with one of our experienced design coordinators. We provide physical samples in your space under different lighting conditions to ensure the final color is exactly right.',
      },
    ],
  },
  {
    id: 'svc-007',
    name: 'Plumbing',
    slug: 'plumbing',
    description:
      'Behind every luxury renovation is an invisible infrastructure that must perform flawlessly. Forge X coordinates all plumbing scopes — from supply and drain rough-in for new additions to fixture upgrades, tankless water heater installations, and whole-home water filtration systems.',
    shortDesc: 'Full plumbing services from rough-in to premium fixture installation.',
    icon: 'Wrench',
    timeline: '1–6 weeks',
    priceRange: '$3,500 – $45,000+',
    features: [
      'Supply and drain rough-in for remodels',
      'Fixture selection and installation',
      'Tankless and hybrid water heater installation',
      'Whole-home water filtration systems',
      'Leak detection and pipe replacement',
      'Hydronic radiant heat system installation',
      'Outdoor kitchen and pool plumbing',
      'Gas line work for appliances and fireplaces',
    ],
    faqs: [
      {
        q: 'Are your plumbers licensed?',
        a: 'Yes. All plumbing work performed by Forge X is carried out by or under the direct supervision of licensed master plumbers. Permits are pulled for every applicable scope of work.',
      },
    ],
  },
  {
    id: 'svc-008',
    name: 'Electrical',
    slug: 'electrical',
    description:
      'From panel upgrades and circuit additions to architectural lighting design and whole-home generator installation, Forge X handles all electrical work in-house with licensed electricians. We design lighting plans that enhance every space and install systems built for safety and longevity.',
    shortDesc: 'Panel upgrades, lighting design, and smart electrical systems.',
    icon: 'Zap',
    timeline: '1–4 weeks',
    priceRange: '$4,000 – $60,000+',
    features: [
      'Electrical panel upgrades and sub-panel installation',
      'Architectural lighting design and installation',
      'Recessed, cove, and accent lighting systems',
      'Whole-home generator and transfer switch installation',
      'EV charging station installation',
      'Outdoor landscape lighting',
      'Ceiling fan and fixture installation',
      'Smoke and CO detector systems',
    ],
    faqs: [
      {
        q: 'Can you design a custom lighting plan for my renovation?',
        a: 'Absolutely. Our in-house lighting designer works with your interior designer or our design team to create a layered lighting plan — ambient, task, and accent — that enhances every room in the home.',
      },
    ],
  },
  {
    id: 'svc-009',
    name: 'Interior Design',
    slug: 'interior-design',
    description:
      'Great renovation outcomes begin with great design. Forge X offers full-service interior design that integrates seamlessly with our construction capabilities — ensuring what is designed can actually be built, on time and on budget. Our designers bring spaces to life with materials, furnishings, and art curation that reflect your lifestyle.',
    shortDesc: 'Full-service interior design integrated with our build capability.',
    icon: 'Sparkles',
    timeline: '4–16 weeks (design phase)',
    priceRange: 'From $8,500 design fee',
    features: [
      'Full space planning and 3D visualization',
      'Material, finish, and fixture selection',
      'Furniture selection and procurement',
      'Art, accessories, and styling curation',
      'Lighting and window treatment design',
      'Custom millwork and built-in design',
      'Project management throughout construction',
      'Final styling and installation coordination',
    ],
    faqs: [
      {
        q: 'Do I need to hire an interior designer separately?',
        a: 'Not with Forge X. Our integrated design-build model means our designers and builders work as one team. This eliminates costly miscommunications between a separate design firm and contractor, and results in better outcomes at a lower total cost.',
      },
    ],
  },
  {
    id: 'svc-010',
    name: 'Smart Home Upgrades',
    slug: 'smart-home-upgrades',
    description:
      'Integrate intelligent technology seamlessly into your home without sacrificing aesthetic. Forge X designs and installs Lutron lighting control, Savant and Control4 home automation, whole-home audio, motorized shading, and advanced security systems — all managed from a single intuitive interface.',
    shortDesc: 'Seamless home automation, lighting control, and AV integration.',
    icon: 'Cpu',
    timeline: '2–6 weeks',
    priceRange: '$15,000 – $200,000+',
    features: [
      'Lutron Caseta and RadioRA lighting control',
      'Savant and Control4 home automation systems',
      'Whole-home distributed audio (Sonos, Crestron)',
      'Motorized window shades and drapes',
      'Home theater design and calibration',
      'Network and structured wiring infrastructure',
      'Security cameras, access control, and alarm integration',
      'Voice and app-based system control',
    ],
    faqs: [
      {
        q: 'Can smart home technology be added to an existing home without full renovation?',
        a: 'Yes, in many cases. Our technology team assesses your existing infrastructure and designs a system that works within your current wiring constraints. Wireless-first systems like Lutron and Sonos can be added with minimal invasiveness.',
      },
      {
        q: 'Do you provide ongoing support after installation?',
        a: 'Yes. Forge X offers annual maintenance plans that include system updates, troubleshooting, and on-site support. Your smart home investment is protected long after the final walkthrough.',
      },
    ],
  },
]

// ── Portfolio Projects ─────────────────────────────────────────────────────────

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-001',
    title: 'Rosedale Estate Kitchen & Great Room',
    slug: 'rosedale-estate-kitchen',
    category: 'Kitchen Remodeling',
    location: 'Rosedale, MD',
    budget: 285000,
    duration: '14 weeks',
    images: [
      '/images/portfolio/greenwich-kitchen-1.jpg',
      '/images/portfolio/greenwich-kitchen-2.jpg',
      '/images/portfolio/greenwich-kitchen-3.jpg',
    ],
    beforeAfter: [
      {
        before: '/images/portfolio/greenwich-kitchen-before.jpg',
        after: '/images/portfolio/greenwich-kitchen-after.jpg',
      },
    ],
    description:
      'A complete reimagination of a 1,400 sq ft kitchen and great room in a Rosedale colonial. The design centered on a 16-foot Calacatta Oro marble island, custom inset cabinetry in a hand-mixed sage green, and a fully integrated Sub-Zero and Wolf appliance suite. Brass hardware, unlacquered, was specified throughout to develop a natural patina over time.',
    materialsUsed: [
      'Calacatta Oro marble (Italy)',
      'Custom inset cabinetry (Kennebec Company)',
      'Unlacquered brass hardware',
      'Sub-Zero 48" refrigeration',
      'Wolf 48" dual-fuel range',
      'Waterworks unlacquered brass fixtures',
      'Walker Zanger ceramic backsplash tile',
      'White oak wide-plank flooring, wire-brushed',
    ],
    challenge:
      'The existing structural configuration had a load-bearing wall running directly through the proposed open-plan layout. Forge X engineered a flush steel beam solution that allowed the wall to be removed while maintaining the original ceiling height, creating the seamless great room the clients envisioned.',
    testimonial: {
      author: 'Margaret & Charles D., Rosedale, MD',
      text: 'We have been through renovations before and always came away exhausted and disappointed by something. Forge X was different from the first conversation. They anticipated every problem before it became one. The kitchen is beyond what we imagined — our friends and family cannot believe it is the same house.',
    },
  },
  {
    id: 'proj-002',
    title: 'White Marsh Primary Suite Retreat',
    slug: 'white-marsh-primary-suite',
    category: 'Bathroom Remodeling',
    location: 'White Marsh, MD',
    budget: 148000,
    duration: '9 weeks',
    images: [
      '/images/portfolio/westchester-bath-1.jpg',
      '/images/portfolio/westchester-bath-2.jpg',
    ],
    beforeAfter: [
      {
        before: '/images/portfolio/westchester-bath-before.jpg',
        after: '/images/portfolio/westchester-bath-after.jpg',
      },
    ],
    description:
      'A 900 sq ft primary suite bathroom designed as a private spa. The centerpiece is a freestanding Waterworks Amiata soaking tub positioned beneath a custom arched window. A 12-foot double shower features bookmatched Arabescato Corchia marble, a bench in honed Absolute Black granite, and eight body sprays alongside a Hansgrohe Raindance ceiling head.',
    materialsUsed: [
      'Arabescato Corchia marble slabs (bookmatched)',
      'Honed Absolute Black granite',
      'Waterworks Amiata soaking tub',
      'Hansgrohe Raindance shower system',
      'Kohler Veil wall-hung toilets',
      'Custom walnut vanity with integrated lighting',
      'Heated Daltile porcelain floor tile',
      'Custom arched mirror, bronze finish',
    ],
    challenge:
      'The existing plumbing stack location was incompatible with the desired tub placement. Our plumbing team rerouted supply and drain lines through a soffit designed to appear as an architectural tray element, turning a constraint into a design feature.',
    testimonial: {
      author: 'Jennifer W., White Marsh, MD',
      text: 'I wanted a bathroom that felt like a luxury hotel but was uniquely mine. Forge X understood that instinctively. Every material selection, every proportion — it all works together. I genuinely look forward to mornings now.',
    },
  },
  {
    id: 'proj-003',
    title: 'Federal Hill Full-Floor Renovation',
    slug: 'federal-hill-full-floor-renovation',
    category: 'Interior Design',
    location: 'Baltimore, MD',
    budget: 620000,
    duration: '22 weeks',
    images: [
      '/images/portfolio/riverside-1.jpg',
      '/images/portfolio/riverside-2.jpg',
      '/images/portfolio/riverside-3.jpg',
    ],
    beforeAfter: [
      {
        before: '/images/portfolio/riverside-before.jpg',
        after: '/images/portfolio/riverside-after.jpg',
      },
    ],
    description:
      'A comprehensive renovation of a 3,200 sq ft full-floor rowhome in Federal Hill. All seven rooms were reimagined with new millwork, lighting, flooring, and finishes while preserving and restoring the building\'s original brick and architectural details. The project included a complete kitchen and two bathroom renovations, a custom library wall, and full smart-home integration.',
    materialsUsed: [
      'Restored original white oak floors, hand-scraped finish',
      'Custom plaster crown and ceiling medallion restoration',
      'Polished Carrara marble kitchen countertops',
      'Custom lacquered cabinetry, Benjamin Moore Chantilly Lace',
      'Ann Sacks handmade tile',
      'Lutron RadioRA3 full-home lighting control',
      'Custom steel and glass library shelving',
      'Farrow & Ball paints throughout',
    ],
    challenge:
      'Working within a co-op building meant strict rules governing work hours, elevator use, material staging, and disposal. Forge X assigned a dedicated logistics coordinator who managed the building\'s requirements throughout, maintaining a perfect relationship with building management and neighbors.',
    testimonial: {
      author: 'Thomas & Elena R., Baltimore, MD',
      text: 'The pre-war character of our apartment was the thing we most feared losing. Forge X not only preserved it — they amplified it. The restoration of the original plaster details alone was worth the entire project. Remarkable craftsmanship.',
    },
  },
  {
    id: 'proj-004',
    title: 'Joppatowne Entertainment Basement',
    slug: 'joppatowne-entertainment-basement',
    category: 'Basement Finishing',
    location: 'Joppatowne, MD',
    budget: 195000,
    duration: '16 weeks',
    images: [
      '/images/portfolio/darien-basement-1.jpg',
      '/images/portfolio/darien-basement-2.jpg',
    ],
    beforeAfter: [
      {
        before: '/images/portfolio/darien-basement-before.jpg',
        after: '/images/portfolio/darien-basement-after.jpg',
      },
    ],
    description:
      'A 2,100 sq ft unfinished basement transformed into an entertainment destination featuring a 12-seat home theater with acoustic treatment, a full bar and kitchen with quartzite waterfall island, a 500-bottle climate-controlled wine cellar with mahogany and iron display racks, and a game room with direct access to the outdoor patio.',
    materialsUsed: [
      'Acoustically treated wall panels (Acoustics First)',
      'Stewart Filmscreen 170" projection screen',
      'Quartzite bar countertop with waterfall edge',
      'Custom mahogany wine rack joinery',
      'WhisperKool wine cellar cooling unit',
      'LVP flooring (Shaw Floorte Pro)',
      'Coffered ceiling with integrated lighting tray',
      'Restoration Hardware bar stools and seating',
    ],
    challenge:
      'The basement had documented moisture intrusion on two walls. Before any finish work began, Forge X installed a perimeter drainage system, sump pump with battery backup, and interior waterproofing membrane — backed by a transferable 25-year warranty. The basement has remained bone dry through two significant storm events since completion.',
    testimonial: {
      author: 'David & Sarah K., Joppatowne, MD',
      text: 'Our kids said they never want to leave the house again — I am not sure if that is a compliment to Forge X or a concern. The theater and wine cellar are extraordinary. Every guest we have hosted down there cannot believe it was once just concrete and pipes.',
    },
  },
  {
    id: 'proj-005',
    title: 'Middle River Modern Exterior & Roofing',
    slug: 'middle-river-modern-exterior',
    category: 'Roofing',
    location: 'Middle River, MD',
    budget: 88000,
    duration: '4 weeks',
    images: [
      '/images/portfolio/new-canaan-roof-1.jpg',
      '/images/portfolio/new-canaan-roof-2.jpg',
    ],
    beforeAfter: [
      {
        before: '/images/portfolio/new-canaan-roof-before.jpg',
        after: '/images/portfolio/new-canaan-roof-after.jpg',
      },
    ],
    description:
      'A complete roofing system replacement on a 1960s mid-century modern home. The existing degraded asphalt roof was replaced with a standing-seam Corten steel system that complements the home\'s architectural language. Copper gutters and downspouts, new Velux skylights, and a complete chimney restoration completed the scope.',
    materialsUsed: [
      'Weathering steel (Corten) standing-seam panels',
      'Copper gutter and downspout system',
      'Velux VS skylights (3 units)',
      'Grace Ice & Water Shield underlayment',
      'Custom copper chimney cap and flashing',
      'Ridge and soffit ventilation system',
    ],
    challenge:
      'The low-slope sections of the mid-century roof required a different system than the primary steep-slope areas. Forge X installed a TPO membrane system on all low-slope areas, creating a seamless transition that is both watertight and invisible from grade.',
    testimonial: {
      author: 'Paul M., Middle River, MD',
      text: 'Finding a contractor who understood mid-century architecture enough to make appropriate material decisions was harder than I expected. Forge X got it immediately. The Corten steel is perfect — it will only get better with time.',
    },
  },
  {
    id: 'proj-006',
    title: 'Essex Smart Home Integration',
    slug: 'essex-smart-home',
    category: 'Smart Home Upgrades',
    location: 'Essex, MD',
    budget: 165000,
    duration: '7 weeks',
    images: [
      '/images/portfolio/harrison-smart-1.jpg',
      '/images/portfolio/harrison-smart-2.jpg',
    ],
    beforeAfter: [
      {
        before: '/images/portfolio/harrison-smart-before.jpg',
        after: '/images/portfolio/harrison-smart-after.jpg',
      },
    ],
    description:
      'A whole-home technology integration for a newly purchased 6,400 sq ft colonial. The project encompassed Lutron Homeworks QSX full-home lighting control with 68 keypads, a Savant home automation system, 22-zone Sonos audio, motorized Lutron Palladiom shades throughout, a 16-camera security system, and a dedicated home theater room build-out.',
    materialsUsed: [
      'Lutron Homeworks QSX lighting control',
      'Savant Pro home automation platform',
      'Sonos Era and Amp whole-home audio',
      'Lutron Palladiom motorized shades',
      'Sony VPL-XW7000ES 4K laser projector',
      'Stewart Filmscreen 140" screen',
      'Snap One Control4 security integration',
      'Cat6A and fiber structured wiring throughout',
    ],
    challenge:
      'The home was already fully finished with no plans for walls to be opened. Forge X\'s technology team designed an entirely wireless and low-impact installation strategy that required opening only four strategic access points, all restored to perfect condition upon completion.',
    testimonial: {
      author: 'Michael & Lisa T., Essex, MD',
      text: 'We were nervous about a technology project of this scale disrupting our finished home. Forge X was surgical. Their team was meticulous and professional. The system they built has changed how we live in this house — effortlessly.',
    },
  },
]

// ── Blog Posts ────────────────────────────────────────────────────────────────

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-001',
    title: 'The Case for Investing in Your Kitchen: ROI, Lifestyle, and Legacy Value',
    slug: 'kitchen-investment-roi-lifestyle-legacy',
    category: 'Investment Insights',
    excerpt:
      'A thoughtfully renovated kitchen consistently returns 60–80% of its cost at resale — but the daily quality-of-life return is immeasurable. Here is how to approach a kitchen project that delivers on both dimensions.',
    content:
      'Kitchen renovations occupy a unique place in the world of home improvement. They are simultaneously the highest-cost and highest-return projects a homeowner can undertake...',
    author: 'Forge X Editorial',
    date: '2025-04-15',
    image: '/images/blog/kitchen-roi.jpg',
    readTime: 7,
  },
  {
    id: 'blog-002',
    title: 'Unlacquered Brass: Why the Most Demanding Finish is Having Its Moment',
    slug: 'unlacquered-brass-design-trend',
    category: 'Design Trends',
    excerpt:
      'Unlacquered brass requires patience and intention — it is a living finish that develops character over time. For homeowners willing to commit, it offers something no other metal can: authenticity that deepens with age.',
    content:
      'Walk through any significant interior design publication today and you will encounter unlacquered brass in some form. On faucets, cabinet hardware, light fixtures...',
    author: 'Camille Fontaine, Design Director',
    date: '2025-03-28',
    image: '/images/blog/unlacquered-brass.jpg',
    readTime: 5,
  },
  {
    id: 'blog-003',
    title: 'What to Expect During a Full Home Renovation: A Week-by-Week Reality Guide',
    slug: 'what-to-expect-full-home-renovation',
    category: 'Renovation Guide',
    excerpt:
      'Most renovation stress comes from misaligned expectations, not actual problems. This honest, week-by-week guide walks you through what a well-managed large-scale renovation actually looks and feels like.',
    content:
      'The most common feedback we receive from clients after completing a major renovation is: "I wish someone had told me what to expect." This guide is that conversation...',
    author: 'James Rafferty, Project Director',
    date: '2025-03-10',
    image: '/images/blog/renovation-guide.jpg',
    readTime: 9,
  },
  {
    id: 'blog-004',
    title: 'Marble vs. Quartz in 2025: A Definitive Material Selection Guide',
    slug: 'marble-vs-quartz-2025-guide',
    category: 'Materials',
    excerpt:
      'The marble versus quartz debate has never been more nuanced. New engineered stone surfaces have closed the aesthetic gap significantly — but marble still offers something no manufactured product can replicate.',
    content:
      'Few material decisions generate more anxiety among homeowners than the choice between natural marble and engineered quartz for kitchen and bathroom surfaces...',
    author: 'Forge X Editorial',
    date: '2025-02-20',
    image: '/images/blog/marble-vs-quartz.jpg',
    readTime: 6,
  },
  {
    id: 'blog-005',
    title: 'Smart Home Technology in Historic Homes: How to Integrate Without Compromise',
    slug: 'smart-home-historic-homes',
    category: 'Technology',
    excerpt:
      'Pre-war and historic homes present unique challenges for technology integration. The good news: modern wireless systems make it possible to add intelligence to any home without touching a single piece of original millwork.',
    content:
      'The homeowners who most resist smart home technology are often those living in the most beautiful homes — pre-war cooperatives, Federal Colonials, and Craftsman bungalows...',
    author: 'Forge X Technology Division',
    date: '2025-02-04',
    image: '/images/blog/smart-historic-home.jpg',
    readTime: 8,
  },
  {
    id: 'blog-006',
    title: 'The Art of the Bathroom Material Palette: Layering Stone, Tile, and Metal',
    slug: 'bathroom-material-palette-guide',
    category: 'Design Trends',
    excerpt:
      'The most enduring bathrooms are built on a disciplined material palette — typically two stones, one tile accent, and one metal finish. Here is how to compose a palette that coheres beautifully and ages gracefully.',
    content:
      'A bathroom renovation is an exercise in material restraint. The spaces that feel the most luxurious are rarely the ones with the most materials — they are the ones where every selected material earns its place...',
    author: 'Camille Fontaine, Design Director',
    date: '2025-01-18',
    image: '/images/blog/bathroom-palette.jpg',
    readTime: 6,
  },
]

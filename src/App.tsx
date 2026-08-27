import { AnchorHTMLAttributes, useEffect, useRef, useState } from 'react'

const contactHref = '/contact'
const Link = ({ to, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }) => <a href={to} {...props} />
const NavLink = ({ to, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }) => (
  <a href={to} className={window.location.pathname.toLowerCase() === to.toLowerCase() ? 'active' : undefined} {...props} />
)

function ScrollToTop() {
  useEffect(() => {
    if (window.location.hash) document.querySelector(window.location.hash)?.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [])
  return null
}

// fades sections in as they enter the viewport
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); io.disconnect() }
    }, { threshold: 0.14 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return { ref, className: `reveal${visible ? ' is-visible' : ''}` }
}

type IconName =
  | 'arrow' | 'quote' | 'advisory' | 'planning' | 'growth' | 'coins' | 'home' | 'education' | 'building'
  | 'shield' | 'health' | 'star' | 'motor' | 'property' | 'clock' | 'target' | 'waves' | 'plane'
  | 'mail' | 'phone' | 'pin'

function Icon({ name, className }: { name: IconName; className?: string }) {
  const common = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, className }
  switch (name) {
    case 'arrow': return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
    case 'quote': return <svg viewBox="0 0 24 24" className={className}><path fill="currentColor" d="M7.5 8c-2.2 0-4 1.8-4 4.2V17h4.6v-4.8H6.4c0-1.3 1-2.4 2.3-2.4V8zm9 0c-2.2 0-4 1.8-4 4.2V17h4.6v-4.8h-1.7c0-1.3 1-2.4 2.3-2.4V8z" /></svg>
    case 'advisory': return <svg {...common}><path d="M4 13a8 8 0 0 1 16 0" /><rect x="3" y="13" width="4.2" height="6" rx="1.4" /><rect x="16.8" y="13" width="4.2" height="6" rx="1.4" /></svg>
    case 'planning': return <svg {...common}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="2.6" /><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3" /></svg>
    case 'growth': return <svg {...common}><path d="M4 20V13M10.5 20V7M17 20v-9" /><path d="M4 12l6.5-5L17 9l4-4" /></svg>
    case 'coins': return <svg {...common}><ellipse cx="12" cy="7" rx="7" ry="3" /><path d="M5 7v10c0 1.7 3.1 3 7 3s7-1.3 7-3V7" /><path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" /></svg>
    case 'home': return <svg {...common}><path d="M4 11.5 12 4l8 7.5" /><path d="M6 10v9.5h12V10" /></svg>
    case 'education': return <svg {...common}><path d="M12 4 2.5 9l9.5 4.6L21.5 9 12 4Z" /><path d="M6.5 11.3V16c0 1.4 2.6 2.8 5.5 2.8s5.5-1.4 5.5-2.8v-4.7" /></svg>
    case 'building': return <svg {...common}><rect x="4" y="9.5" width="6.5" height="10.5" /><rect x="13.5" y="4" width="6.5" height="16" /></svg>
    case 'shield': return <svg {...common}><path d="M12 3 5.5 5.8V11c0 4.4 2.8 7.6 6.5 9 3.7-1.4 6.5-4.6 6.5-9V5.8L12 3Z" /><path d="M9 12l2 2 4-4.2" /></svg>
    case 'health': return <svg {...common}><circle cx="12" cy="12" r="8.5" /><path d="M12 8v8M8 12h8" /></svg>
    case 'star': return <svg {...common}><path d="M12 3.5l2.4 5.1 5.6.6-4.2 3.8 1.2 5.5L12 15.7l-5 2.8 1.2-5.5-4.2-3.8 5.6-.6L12 3.5Z" /></svg>
    case 'motor': return <svg {...common}><path d="M4 16v-3.3L6 8.3h12l2 4.4V16" /><path d="M4 16h16" /><circle cx="7.5" cy="16.6" r="1.5" /><circle cx="16.5" cy="16.6" r="1.5" /></svg>
    case 'property': return <svg {...common}><path d="M3 11 12 4l9 7" /><rect x="6" y="11" width="12" height="8.5" /><rect x="10.2" y="14" width="3.6" height="5.5" /></svg>
    case 'clock': return <svg {...common}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.3v5l3.6 2" /></svg>
    case 'target': return <svg {...common}><circle cx="12" cy="12" r="8.5" /><path d="M8.2 15.8l7.2-7.2M9.2 8h6.6v6.6" /></svg>
    case 'waves': return <svg {...common}><path d="M2.5 17.5c1.9 1.5 3.9 1.5 5.8 0s3.9-1.5 5.8 0 3.9 1.5 5.8 0" /><path d="M6 14.5l1-6h10l1 6" /></svg>
    case 'plane': return <svg {...common}><path d="M2.2 13.2 20.5 6l-6.9 18.3-.1.1-2.9-8-8-2.2Z" transform="translate(0 -3)" /></svg>
    case 'mail': return <svg {...common}><rect x="3.2" y="5.5" width="17.6" height="13" rx="2" /><path d="M4 7l8 6 8-6" /></svg>
    case 'phone': return <svg {...common}><path d="M6 3.5h3l1.4 4-2 1.6a11.5 11.5 0 0 0 5.5 5.5l1.6-2 4 1.4v3a1.6 1.6 0 0 1-1.7 1.6C10.5 18.6 5.4 13.5 4.4 6.7A1.6 1.6 0 0 1 6 3.5Z" /></svg>
    case 'pin': return <svg {...common}><path d="M12 21s6.5-6.1 6.5-11.2A6.5 6.5 0 0 0 5.5 9.8C5.5 14.9 12 21 12 21Z" /><circle cx="12" cy="9.6" r="2.3" /></svg>
  }
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const close = () => setOpen(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={scrolled ? 'site-header scrolled' : 'site-header'}>
      <div className="nav-shell">
        <Link to="/" onClick={close} className="wordmark" aria-label="Padhye Synergetic Company home">
          <img className="brand-logo" src="/assets/padhye-synergetic.png" alt="Padhye Synergetic Company" />
        </Link>
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          <NavLink to="/" onClick={close}>Home</NavLink>
          <NavLink to="/products" onClick={close}>Products</NavLink>
          <Link to="/#about" onClick={close}>About</Link>
          <NavLink to="/contact" onClick={close}>Contact Us</NavLink>
        </nav>
        <div className="nav-actions">
          <Link to={contactHref} className="btn btn-primary btn-sm">Get Started</Link>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <p className="footer-name">Padhye Synergetic Company</p>
          <p>Independent, client-first financial planning and advisory — building wealth, protecting futures.</p>
        </div>
        <div className="footer-col">
          <p className="footer-heading">Explore</p>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/#about">About</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="footer-col">
          <p className="footer-heading">Reach Us</p>
          <a href="mailto:padhyesynergetic.co@gmail.com">padhyesynergetic.co@gmail.com</a>
          <a href="tel:+919665055909">+91-9665055909</a>
          <span>Pune, Maharashtra</span>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>© 2026 Padhye Synergetic Company. All rights reserved. AMFI Registered Mutual Fund Distributor.</p>
        <p>Mutual Fund investments are subject to market risks, read all scheme related documents carefully.</p>
      </div>
    </footer>
  )
}

function ChatBubble() {
  return <button className="chat-bubble" aria-label="Open PSC Assistant"><Icon name="arrow" /></button>
}

const stats = [
  ['7,000+', 'Happy Clients'],
  ['15+', 'Years of Practice'],
  ['₹50Cr+', 'Assets Advised'],
  ['360°', 'Financial Services'],
]

const pillars = [
  {
    num: '01',
    title: 'What We Do',
    lines: [
      'Financial Planning', 'Mutual Funds', 'Alternative Investment Funds (AIF)', 'Portfolio Management Services (PMS)',
      'Structured Products', 'Fixed Deposits & Bonds', 'Life, Health, Motor & General Insurance', 'Home, Business & Personal Loans', 'Real Estate Advisory',
    ],
  },
  {
    num: '02',
    title: 'Our Vision',
    text: 'To empower every individual and business with the knowledge and financial solutions needed to achieve long-term prosperity and financial independence.',
  },
  {
    num: '03',
    title: 'Our Mission',
    text: 'To deliver transparent, personalized, and innovative financial solutions while maintaining the highest standards of integrity, professionalism, and client satisfaction.',
    text2: 'Building Wealth. Protecting Futures. Creating Financial Confidence.',
  },
]

function Home() {
  const aboutReveal = useReveal<HTMLDivElement>()
  const founderReveal = useReveal<HTMLDivElement>()
  const quoteReveal = useReveal<HTMLDivElement>()
  return (
    <main>
      <section className="hero">
        <div className="wrap hero-split">
          <div className="hero-copy">
            <div className="badge"><i /> AMFI Registered Mutual Fund Distributor</div>
            <h1 className="headline">Financial clarity, <em>built around you.</em></h1>
            <p className="lede">Independent advisory for individuals, families and businesses who want their money working with intention — not guesswork.</p>
            <div className="actions">
              <Link className="btn btn-primary" to={contactHref}>Start a conversation<Icon name="arrow" /></Link>
              <a className="btn btn-ghost" href="#about">Learn more</a>
            </div>
          </div>
          <aside className="stat-panel" aria-label="Firm highlights">
            {stats.map(([num, label], i) => (
              <div className="stat-row" key={label}>
                <span className="stat-index">{String(i + 1).padStart(2, '0')}</span>
                <div><strong className="stat-num">{num}</strong><span className="stat-label">{label}</span></div>
              </div>
            ))}
          </aside>
        </div>
      </section>
      <section id="about" className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Padhye Synergetic Company</span>
            <h2 className="section-title">A firm built on trust, not transactions</h2>
          </div>
          <div className="lead-column">
            <p><strong>Padhye Synergetic Company (PSC)</strong> is an independent financial services firm committed to helping individuals, families, and businesses build, protect, and grow their wealth through informed financial decisions.</p>
            <p>With a client-first approach, we provide comprehensive financial solutions tailored to every stage of life — spanning investments, insurance, loans, and wealth management, so every recommendation aligns with your goals and risk profile.</p>
            <p>Financial planning is more than choosing the right product — it's about creating long-term value, security, and peace of mind, built on ethical practice and transparency.</p>
          </div>
          <div className="index-grid" ref={aboutReveal.ref}>
            {pillars.map((p, i) => (
              <article className={`index-card ${aboutReveal.className}`} style={{ transitionDelay: `${i * 90}ms` }} key={p.num}>
                <span className="index-num">{p.num}</span>
                <h3>{p.title}</h3>
                {p.lines && <ul className="index-list">{p.lines.map(l => <li key={l}>{l}</li>)}</ul>}
                {p.text && <p>{p.text}</p>}
                {p.text2 && <p className="index-tagline">{p.text2}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section founder-split wrap" ref={founderReveal.ref}>
        <div className={`founder-media ${founderReveal.className}`}>
          <img src="/assets/madhav-padhye.jpeg" alt="Mr. Madhav Padhye" />
        </div>
        <div className={`founder-copy ${founderReveal.className}`}>
          <span className="eyebrow">Founder</span>
          <h2 className="section-title left">Mr. Madhav Padhye</h2>
          <p className="role-tag">Founder, Padhye Synergetic Company</p>
          <p>Mr. Madhav Padhye is the guiding force behind Padhye Synergetic Company. With decades of financial knowledge and practical market experience, he specialises in investments, insurance planning, structured products, bonds, and long-term wealth strategies.</p>
          <p>His leadership is rooted in honesty, transparency, and delivering well-researched, personalised financial solutions.</p>
        </div>
      </section>
      <section className="quiet-band">
        <div className="wrap narrow">
          <Icon name="quote" className="band-quote" />
          <h2>Inspiration — Mr. Madhusudhan Nawathe</h2>
          <p>Although not a board member, Mr. Nawathe is a source of guidance and inspiration for the team. His value-driven outlook, discipline, and experience shape our approach to honesty, client service, and long-term trust.</p>
        </div>
      </section>
      <section className="section wrap">
        <div className="section-head">
          <span className="eyebrow">What Clients Say</span>
          <h2 className="section-title">Trusted by thousands of investors</h2>
        </div>
        <div className="quote-grid" ref={quoteReveal.ref}>
          <blockquote className={`quote-card ${quoteReveal.className}`}>
            <Icon name="quote" className="quote-mark" />
            <p>I have known Madhav for over a decade and have relied on his expertise for multiple home loan processes across different banks. His deep knowledge and clear guidance made the entire experience smooth and stress-free.</p>
            <cite>Siddharth Ghosh</cite>
          </blockquote>
          <blockquote className={`quote-card ${quoteReveal.className}`} style={{ transitionDelay: '110ms' }}>
            <Icon name="quote" className="quote-mark" />
            <p>Their prompt responses, deep expertise, and consistent commitment to delivering the best possible guidance truly set them apart. Their approach to wealth creation is built on trust, strong ethical values, and absolute transparency.</p>
            <cite>Dr. Binay Kumar</cite>
          </blockquote>
        </div>
      </section>
      <ContactPanel compact />
    </main>
  )
}

const products = [
  { icon: 'advisory' as const, title: 'Expert Advisory', text: 'Get personalized guidance from certified financial planners. From tax planning to retirement strategies, we cover it all.', action: 'Book Consultation' },
  { icon: 'planning' as const, title: 'Financial Planning', text: 'Build your wealth, secure your future. Your goals deserve a strategy, not just a spreadsheet — our planning aligns capital with ambition.', action: 'View Options' },
  { icon: 'growth' as const, title: 'Mutual Funds', text: 'Invest in India\'s growth story, one SIP at a time. Start with as little as ₹500 a month and harness the power of compounding.', action: 'View Options' },
  { icon: 'coins' as const, title: 'Fixed Deposits & Bonds', text: 'Secure your capital with predictable, fixed returns. Choose from a curated selection of FDs and highly-rated corporate bonds.', action: 'View Options' },
]

const insurance: [IconName, string, string][] = [
  ['shield', 'Life Insurance', "Secure your family's financial future in your absence."],
  ['health', 'Health Insurance', 'Cover medical expenses and stay prepared for emergencies.'],
  ['star', 'Child Savings Plans', "Invest for your child's education and future milestones."],
  ['motor', 'Motor Insurance', 'Protect your vehicle against damage and third-party liability.'],
  ['property', 'Property Insurance', 'Safeguard your home and its contents from unforeseen events.'],
  ['clock', 'Term Plans', 'High coverage at affordable premiums for a specific period.'],
  ['target', 'Guaranteed Return Plans', 'Enjoy fixed returns on your investment, regardless of market conditions.'],
  ['waves', 'Marine Insurance', 'Cover for loss or damage of ships, cargo, terminals, and transport.'],
  ['plane', 'Travel Insurance', 'Secure your trips against medical emergencies and lost baggage.'],
]

function Products() {
  const productsReveal = useReveal<HTMLDivElement>()
  const loansReveal = useReveal<HTMLDivElement>()
  const timelineReveal = useReveal<HTMLOListElement>()
  const calcReveal = useReveal<HTMLDivElement>()
  const protectReveal = useReveal<HTMLDivElement>()
  return (
    <main className="products-page">
      <section className="page-heading">
        <div className="wrap">
          <span className="eyebrow">Products & Services</span>
          <h1>Comprehensive financial solutions</h1>
          <p>Explore diverse investment options and utilize our free tools to plan your future.</p>
        </div>
      </section>
      <section className="section wrap">
        <div className="section-head">
          <h2 className="section-title left">Explore our investment products</h2>
        </div>
        <div className="card-grid" ref={productsReveal.ref}>
          {products.map((p, i) => (
            <article className={`offer-card ${productsReveal.className}`} style={{ transitionDelay: `${i * 80}ms` }} key={p.title}>
              <div className="icon-tile"><Icon name={p.icon} /></div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <Link to={contactHref} className="btn btn-primary btn-block">{p.action}</Link>
            </article>
          ))}
        </div>
      </section>
      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title left">Flexible loan solutions</h2>
            <p className="section-lead left">Finance your next big step with a solution tailored to you.</p>
          </div>
          <div className="card-grid three" ref={loansReveal.ref}>
            <article className={`offer-card compact ${loansReveal.className}`}><div className="icon-tile"><Icon name="home" /></div><h3>Home Loan</h3><p>Finance your dream home with attractive interest rates.</p></article>
            <article className={`offer-card compact ${loansReveal.className}`} style={{ transitionDelay: '80ms' }}><div className="icon-tile"><Icon name="education" /></div><h3>Education Loan</h3><p>Invest in your future with tailored student loans.</p></article>
            <article className={`offer-card compact ${loansReveal.className}`} style={{ transitionDelay: '160ms' }}><div className="icon-tile"><Icon name="building" /></div><h3>LAP Loan</h3><p>Unlock the value of your property with a Loan Against Property.</p></article>
          </div>
          <div className="center"><Link className="btn btn-primary" to={contactHref}>Apply for a loan today</Link></div>
        </div>
      </section>
      <section className="section wrap">
        <div className="section-head">
          <h2 className="section-title left">Our process</h2>
          <p className="section-lead left">A clear and collaborative journey towards your financial goals.</p>
        </div>
        <ol className="timeline" ref={timelineReveal.ref}>
          {['Personalized Attention', 'Technical Assessment', 'Analysis & Planning', 'Goal Setting', 'Pathway Creation', 'Implementation & Guidance'].map((x, i) => (
            <li className={timelineReveal.className} style={{ transitionDelay: `${i * 70}ms` }} key={x}><span>{String(i + 1).padStart(2, '0')}</span><p>{x}</p></li>
          ))}
        </ol>
      </section>
      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title left">Financial planning calculators</h2>
            <p className="section-lead left">Quickly assess your investment and loan scenarios.</p>
          </div>
          <div className="chip-grid" ref={calcReveal.ref}>
            {['SIP', 'Lumpsum', 'STP', 'SWP', 'Retirement', 'Delay Planning', 'Life Insurance', 'EMI', 'Tax', 'Vacation Planning'].map((x, i) => <div className={`chip ${calcReveal.className}`} style={{ transitionDelay: `${i * 40}ms` }} key={x}>{x} Calculator</div>)}
          </div>
        </div>
      </section>
      <section className="section wrap">
        <div className="section-head">
          <h2 className="section-title left">Comprehensive insurance plans</h2>
          <p className="section-lead left">Protect yourself and your loved ones from life's uncertainties.</p>
        </div>
        <div className="protect-grid" ref={protectReveal.ref}>
          {insurance.map(([icon, title, text], i) => (
            <article className={`protect-card ${protectReveal.className}`} style={{ transitionDelay: `${(i % 3) * 80}ms` }} key={title}>
              <div className="icon-tile sm"><Icon name={icon} /></div>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
        <div className="center"><Link className="btn btn-primary" to={contactHref}>Get an insurance quote</Link></div>
        <p className="disclaimer">Product information and calculations are for illustrative purposes only.</p>
      </section>
    </main>
  )
}

function ContactPanel({ compact = false }: { compact?: boolean }) {
  const reveal = useReveal<HTMLDivElement>()
  return (
    <section className={compact ? 'section contact-panel compact' : 'section contact-panel'}>
      <div className={`wrap contact-layout ${reveal.className}`} ref={reveal.ref}>

        <form className="contact-form-card" action="https://formspree.io/f/xqpkzlgz" method="POST">
          <input type="hidden" name="_next" value="//" />
          <span className="eyebrow">Get in Touch</span>
          <h2 className="section-title left">Let's start a conversation</h2>
          <div className="field-row">
            <label>First Name<input type="text" name="first_name" required /></label>
            <label>Last Name<input type="text" name="last_name" required /></label>
          </div>
          <label>Email Address<input type="email" name="email" required /></label>
          <label>Phone Number<input type="tel" name="phone" /></label>
          <label>Your Message<textarea rows={5} name="message" required /></label>
          <button className="btn btn-primary btn-block" type="submit">Send Message<Icon name="arrow" /></button>
        </form>
        
        <div className="contact-info-card">
          <p>Have questions about our products or want to start your investment journey? Our dedicated advisory team is here to help you achieve financial clarity.</p>
          <div className="contact-details">
            <a href="mailto:padhyesynergetic.co@gmail.com"><span className="icon-tile sm"><Icon name="mail" /></span><div><small>Email Us</small>padhyesynergetic.co@gmail.com</div></a>
            <a href="tel:+919665055909"><span className="icon-tile sm"><Icon name="phone" /></span><div><small>Call Us</small>+91-9665055909</div></a>
            <div><span className="icon-tile sm"><Icon name="pin" /></span><div><small>Visit Us</small>Pune, Maharashtra</div></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return <main><section className="page-heading"><div className="wrap"><span className="eyebrow">Contact</span><h1>We'd love to hear from you</h1></div></section><ContactPanel /></main>
}

export default function App() {
  const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/'
  const page = path === '/products' ? <Products /> : path === '/contact' ? <Contact /> : <Home />
  return (
    <>
      <ScrollToTop />
      <Header />
      {page}
      <Footer />
      {/* <ChatBubble /> */}
    </>
  )
}

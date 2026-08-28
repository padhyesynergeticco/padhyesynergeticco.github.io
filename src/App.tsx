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
          <NavLink to="/calculators" onClick={close}>Calculators</NavLink>
          <NavLink to="/testimonials" onClick={close}>Testimonials</NavLink>
          <NavLink to="/about" onClick={close}>About</NavLink>
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
          <Link to="/calculators">Calculators</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/about">About</Link>
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
        <p>Designed & Developed by <a href="https://finetune-solutions.com/" target="_blank" rel="noopener noreferrer">FineTune Solutions</a></p>
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

// Financial goals data
const financialGoals = [
  { icon: 'clock' as const, title: 'Retirement Planning', desc: 'Build a corpus for a comfortable, worry-free retirement', link: '/calculators' },
  { icon: 'star' as const, title: "Child's Education", desc: "Secure your child's future education expenses", link: '/calculators' },
  { icon: 'home' as const, title: 'Buy a Home', desc: 'Plan your down payment and home loan strategy', link: '/calculators' },
  { icon: 'shield' as const, title: 'Family Protection', desc: 'Ensure financial security for your loved ones', link: '/products' },
  { icon: 'target' as const, title: 'Wealth Creation', desc: 'Grow your money systematically over time', link: '/calculators' },
  { icon: 'waves' as const, title: 'Emergency Fund', desc: 'Build a safety net for unexpected expenses', link: '/calculators' },
]

const whyChooseUs = [
  { num: '01', title: 'Personalized Advice', desc: 'Every recommendation is tailored to your unique financial situation, goals, and risk appetite.' },
  { num: '02', title: 'Transparent Approach', desc: 'No hidden fees, no conflicts of interest. We earn your trust through complete transparency.' },
  { num: '03', title: 'Comprehensive Solutions', desc: 'From mutual funds to insurance to loans — all your financial needs under one roof.' },
  { num: '04', title: '15+ Years Experience', desc: 'Proven track record of helping 7,000+ clients achieve their financial goals.' },
]

const howWeWork = [
  { step: '01', title: 'Understand Your Goals', desc: 'We listen to your aspirations, timeline, and risk tolerance' },
  { step: '02', title: 'Create Your Plan', desc: 'A customized strategy aligned with your financial objectives' },
  { step: '03', title: 'Execute Together', desc: 'We help you implement with the right products and timing' },
  { step: '04', title: 'Review & Optimize', desc: 'Regular check-ins to keep your portfolio on track' },
]

function Home() {
  const goalsReveal = useReveal<HTMLDivElement>()
  const servicesReveal = useReveal<HTMLDivElement>()
  const whyReveal = useReveal<HTMLDivElement>()
  const processReveal = useReveal<HTMLOListElement>()
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

      {/* Goals Section */}
      <section className="section wrap" id="goals">
        <div className="section-head">
          <span className="eyebrow">Your Goals, Our Priority</span>
          <h2 className="section-title">Plan for what matters most</h2>
          <p className="section-subtitle">Every financial journey starts with a goal. Tell us yours, and we'll help you get there.</p>
        </div>
        <div className="goals-grid" ref={goalsReveal.ref}>
          {financialGoals.map((goal, i) => (
            <Link to={goal.link} className={`goal-card ${goalsReveal.className}`} style={{ transitionDelay: `${(i % 3) * 80}ms` }} key={goal.title}>
              <div className="goal-icon"><Icon name={goal.icon} /></div>
              <h3>{goal.title}</h3>
              <p>{goal.desc}</p>
              <span className="goal-arrow"><Icon name="arrow" /></span>
            </Link>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="section wrap services-overview" id="about">
        <div className="section-head">
          <span className="eyebrow">What We Offer</span>
          <h2 className="section-title">Comprehensive financial solutions</h2>
        </div>
        <div className="services-split" ref={servicesReveal.ref}>
          <div className={`services-list ${servicesReveal.className}`}>
            <div className="service-category">
              <h3><Icon name="growth" /> Investments</h3>
              <ul>
                <li>Mutual Funds & SIPs</li>
                <li>Portfolio Management (PMS)</li>
                <li>Alternative Investment Funds (AIF)</li>
                <li>Fixed Deposits & Bonds</li>
                <li>Structured Products</li>
              </ul>
            </div>
            <div className="service-category">
              <h3><Icon name="shield" /> Insurance</h3>
              <ul>
                <li>Life & Term Insurance</li>
                <li>Health Insurance</li>
                <li>Motor & Property Insurance</li>
                <li>Child Savings Plans</li>
              </ul>
            </div>
            <div className="service-category">
              <h3><Icon name="home" /> Loans</h3>
              <ul>
                <li>Home Loans</li>
                <li>Business Loans</li>
                <li>Personal Loans</li>
                <li>Loan Against Property</li>
              </ul>
            </div>
          </div>
          <div className={`services-cta ${servicesReveal.className}`} style={{ transitionDelay: '150ms' }}>
            <div className="cta-box">
              <Icon name="advisory" />
              <h3>Not sure where to start?</h3>
              <p>Get a free consultation with our experts. We'll analyze your current financial situation and recommend the best path forward.</p>
              <Link className="btn btn-primary" to={contactHref}>Book Free Consultation<Icon name="arrow" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section wrap why-us-section">
        <div className="section-head">
          <span className="eyebrow">Why Padhye Synergetic</span>
          <h2 className="section-title">Built on trust, not transactions</h2>
        </div>
        <div className="why-grid" ref={whyReveal.ref}>
          {whyChooseUs.map((item, i) => (
            <div className={`why-card ${whyReveal.className}`} style={{ transitionDelay: `${i * 80}ms` }} key={item.num}>
              <span className="why-num">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section className="section wrap process-section">
        <div className="section-head">
          <span className="eyebrow">Our Process</span>
          <h2 className="section-title">How we help you succeed</h2>
        </div>
        <ol className="process-steps" ref={processReveal.ref}>
          {howWeWork.map((item, i) => (
            <li className={`process-step ${processReveal.className}`} style={{ transitionDelay: `${i * 100}ms` }} key={item.step}>
              <span className="step-num">{item.step}</span>
              <div className="step-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="center" style={{ marginTop: '2.5rem' }}>
          <Link className="btn btn-primary" to="/calculators">Try Our Calculators<Icon name="arrow" /></Link>
          <Link className="btn btn-ghost" to="/products" style={{ marginLeft: '1rem' }}>Explore Products</Link>
        </div>
      </section>
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
  const protectReveal = useReveal<HTMLDivElement>()
  return (
    <main className="products-page">
      <section className="page-heading">
        <div className="wrap">
          <span className="eyebrow">Products & Services</span>
          <h1>Comprehensive financial solutions</h1>
          <p>Explore diverse investment options tailored to your financial goals.</p>
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
        </div>
      </section>
    </main>
  )
}

// Utility functions for calculations
const formatCurrency = (n: number) => '₹' + n.toLocaleString('en-IN', { maximumFractionDigits: 0 })
const formatCurrencyDecimal = (n: number) => '₹' + n.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

// Calculator Input Component
function CalcInput({ label, value, onChange, suffix, min, max, step = 1 }: { label: string; value: number; onChange: (v: number) => void; suffix?: string; min?: number; max?: number; step?: number }) {
  return (
    <div className="calc-input">
      <label>{label}</label>
      <div className="calc-input-row">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        <div className="calc-value">
          <input
            type="number"
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            min={min}
            max={max}
            step={step}
          />
          {suffix && <span className="calc-suffix">{suffix}</span>}
        </div>
      </div>
    </div>
  )
}

// Result Row Component
function ResultRow({ label, value, highlight, dotColor }: { label: string; value: string; highlight?: boolean; dotColor?: 'invested' | 'returns' }) {
  return (
    <div className={`calc-result-row${highlight ? ' highlight' : ''}`}>
      <span>
        {dotColor && <span className={`dot ${dotColor}`}></span>}
        {label}
      </span>
      <strong>{value}</strong>
    </div>
  )
}

// Donut Chart Component
function DonutChart({ invested, returns, total }: { invested: number; returns: number; total: number }) {
  const radius = 60
  const circumference = 2 * Math.PI * radius
  const investedPercent = total > 0 ? invested / total : 0
  const returnsPercent = total > 0 ? returns / total : 0
  
  const investedDash = investedPercent * circumference
  const returnsDash = returnsPercent * circumference
  const returnsOffset = circumference - investedDash
  
  return (
    <div className="calc-donut">
      <svg viewBox="0 0 140 140">
        <circle className="donut-bg" cx="70" cy="70" r={radius} />
        <circle 
          className="donut-invested" 
          cx="70" cy="70" r={radius}
          strokeDasharray={`${investedDash} ${circumference}`}
        />
        <circle 
          className="donut-returns" 
          cx="70" cy="70" r={radius}
          strokeDasharray={`${returnsDash} ${circumference}`}
          strokeDashoffset={-investedDash}
        />
      </svg>
      <div className="calc-donut-center">
        <small>Total Value</small>
        <strong>{formatCurrency(total)}</strong>
      </div>
    </div>
  )
}

// SIP Calculator
function SIPCalculator() {
  const [monthly, setMonthly] = useState(10000)
  const [rate, setRate] = useState(12)
  const [years, setYears] = useState(10)

  const months = years * 12
  const monthlyRate = rate / 100 / 12
  const futureValue = monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate)
  const totalInvested = monthly * months
  const gains = futureValue - totalInvested

  return (
    <div className="calculator-card">
      <div className="calc-card-header">
        <Icon name="growth" />
        <div className="calc-header-text">
          <h3>SIP Calculator</h3>
          <p>Plan your systematic investments and see how small monthly contributions grow over time.</p>
        </div>
      </div>
      <div className="calc-body">
        <div className="calc-inputs">
          <CalcInput label="Monthly Investment (₹)" value={monthly} onChange={setMonthly} suffix="₹" min={500} max={500000} step={500} />
          <CalcInput label="Expected Return Rate (%)" value={rate} onChange={setRate} suffix="%" min={1} max={30} step={0.5} />
          <CalcInput label="Investment Period (Years)" value={years} onChange={setYears} suffix="Yrs" min={1} max={40} />
        </div>
        <div className="calc-results-wrapper">
          <DonutChart invested={totalInvested} returns={gains} total={futureValue} />
          <div className="calc-results">
            <ResultRow label="Total Invested" value={formatCurrency(totalInvested)} dotColor="invested" />
            <ResultRow label="Estimated Returns" value={formatCurrency(gains)} dotColor="returns" />
            <ResultRow label="Total Value" value={formatCurrency(futureValue)} highlight />
          </div>
        </div>
      </div>
    </div>
  )
}

// Lumpsum Calculator
function LumpsumCalculator() {
  const [principal, setPrincipal] = useState(100000)
  const [rate, setRate] = useState(12)
  const [years, setYears] = useState(10)

  const futureValue = principal * Math.pow(1 + rate / 100, years)
  const gains = futureValue - principal

  return (
    <div className="calculator-card">
      <div className="calc-card-header">
        <Icon name="coins" />
        <div className="calc-header-text">
          <h3>Lumpsum Calculator</h3>
          <p>Calculate returns on a one-time investment over your chosen time horizon.</p>
        </div>
      </div>
      <div className="calc-body">
        <div className="calc-inputs">
          <CalcInput label="Investment Amount (₹)" value={principal} onChange={setPrincipal} suffix="₹" min={1000} max={10000000} step={1000} />
          <CalcInput label="Expected Return Rate (%)" value={rate} onChange={setRate} suffix="%" min={1} max={30} step={0.5} />
          <CalcInput label="Investment Period (Years)" value={years} onChange={setYears} suffix="Yrs" min={1} max={40} />
        </div>
        <div className="calc-results-wrapper">
          <DonutChart invested={principal} returns={gains} total={futureValue} />
          <div className="calc-results">
            <ResultRow label="Invested Amount" value={formatCurrency(principal)} dotColor="invested" />
            <ResultRow label="Estimated Returns" value={formatCurrency(gains)} dotColor="returns" />
            <ResultRow label="Total Value" value={formatCurrency(futureValue)} highlight />
          </div>
        </div>
      </div>
    </div>
  )
}

// STP Calculator
function STPCalculator() {
  const [sourceAmount, setSourceAmount] = useState(500000)
  const [transferAmount, setTransferAmount] = useState(25000)
  const [sourceRate, setSourceRate] = useState(7)
  const [targetRate, setTargetRate] = useState(12)

  const months = Math.ceil(sourceAmount / transferAmount)
  const targetMonthlyRate = targetRate / 100 / 12
  const sourceMonthlyRate = sourceRate / 100 / 12

  let targetValue = 0
  let remainingSource = sourceAmount
  for (let i = 0; i < months; i++) {
    remainingSource = remainingSource * (1 + sourceMonthlyRate) - transferAmount
    if (remainingSource < 0) remainingSource = 0
    targetValue = (targetValue + transferAmount) * (1 + targetMonthlyRate)
  }

  const gains = targetValue - sourceAmount

  return (
    <div className="calculator-card">
      <div className="calc-card-header">
        <Icon name="target" />
        <div className="calc-header-text">
          <h3>STP Calculator</h3>
          <p>Estimate returns when systematically transferring from one fund to another.</p>
        </div>
      </div>
      <div className="calc-body">
        <div className="calc-inputs">
          <CalcInput label="Source Fund Amount (₹)" value={sourceAmount} onChange={setSourceAmount} suffix="₹" min={10000} max={10000000} step={5000} />
          <CalcInput label="Monthly Transfer (₹)" value={transferAmount} onChange={setTransferAmount} suffix="₹" min={1000} max={100000} step={1000} />
          <CalcInput label="Source Fund Return (%)" value={sourceRate} onChange={setSourceRate} suffix="%" min={1} max={15} step={0.5} />
          <CalcInput label="Target Fund Return (%)" value={targetRate} onChange={setTargetRate} suffix="%" min={1} max={30} step={0.5} />
        </div>
        <div className="calc-results-wrapper">
          <DonutChart invested={sourceAmount} returns={gains} total={targetValue} />
          <div className="calc-results">
            <ResultRow label="Transfer Duration" value={`${months} months`} />
            <ResultRow label="Total Transferred" value={formatCurrency(sourceAmount)} dotColor="invested" />
            <ResultRow label="Target Fund Value" value={formatCurrency(targetValue)} highlight />
          </div>
        </div>
      </div>
    </div>
  )
}

// SWP Calculator
function SWPCalculator() {
  const [corpus, setCorpus] = useState(1000000)
  const [withdrawal, setWithdrawal] = useState(10000)
  const [rate, setRate] = useState(8)
  const [years, setYears] = useState(10)

  const months = years * 12
  const monthlyRate = rate / 100 / 12
  let balance = corpus
  let totalWithdrawn = 0

  for (let i = 0; i < months && balance > 0; i++) {
    balance = balance * (1 + monthlyRate) - withdrawal
    totalWithdrawn += withdrawal
  }
  if (balance < 0) balance = 0

  return (
    <div className="calculator-card">
      <div className="calc-card-header">
        <Icon name="waves" />
        <div className="calc-header-text">
          <h3>SWP Calculator</h3>
          <p>Plan regular withdrawals from your investments while preserving capital.</p>
        </div>
      </div>
      <div className="calc-body">
        <div className="calc-inputs">
          <CalcInput label="Initial Investment (₹)" value={corpus} onChange={setCorpus} suffix="₹" min={100000} max={50000000} step={10000} />
          <CalcInput label="Monthly Withdrawal (₹)" value={withdrawal} onChange={setWithdrawal} suffix="₹" min={1000} max={500000} step={1000} />
          <CalcInput label="Expected Return (%)" value={rate} onChange={setRate} suffix="%" min={1} max={20} step={0.5} />
          <CalcInput label="Withdrawal Period (Years)" value={years} onChange={setYears} suffix="Yrs" min={1} max={30} />
        </div>
        <div className="calc-results-wrapper">
          <DonutChart invested={totalWithdrawn} returns={balance} total={totalWithdrawn + balance} />
          <div className="calc-results">
            <ResultRow label="Total Withdrawn" value={formatCurrency(totalWithdrawn)} dotColor="invested" />
            <ResultRow label="Remaining Balance" value={formatCurrency(balance)} highlight />
          </div>
        </div>
      </div>
    </div>
  )
}

// Retirement Calculator
function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(30)
  const [retireAge, setRetireAge] = useState(60)
  const [lifeExpectancy, setLifeExpectancy] = useState(85)
  const [monthlyExpense, setMonthlyExpense] = useState(50000)
  const [currentCorpus, setCurrentCorpus] = useState(100000)
  const [monthlySIP, setMonthlySIP] = useState(10000)
  const [preReturnRate, setPreReturnRate] = useState(12)
  const [postReturnRate, setPostReturnRate] = useState(8)
  const [inflation, setInflation] = useState(6)

  const yearsToRetire = retireAge - currentAge
  const retirementYears = lifeExpectancy - retireAge

  // Future value of current corpus
  const fvCurrentCorpus = currentCorpus * Math.pow(1 + preReturnRate / 100, yearsToRetire)

  // Future value of SIPs
  const monthlyRate = preReturnRate / 100 / 12
  const months = yearsToRetire * 12
  const fvSIP = monthlySIP * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate)

  const totalCorpusAtRetirement = fvCurrentCorpus + fvSIP

  // Monthly expense at retirement (adjusted for inflation)
  const monthlyExpenseAtRetirement = monthlyExpense * Math.pow(1 + inflation / 100, yearsToRetire)

  // Required corpus (using annuity formula with inflation adjustment)
  const realReturnRate = ((1 + postReturnRate / 100) / (1 + inflation / 100) - 1)
  const monthlyRealRate = realReturnRate / 12
  const withdrawalMonths = retirementYears * 12
  const requiredCorpus = monthlyExpenseAtRetirement * ((1 - Math.pow(1 + monthlyRealRate, -withdrawalMonths)) / monthlyRealRate)

  const isSufficient = totalCorpusAtRetirement >= requiredCorpus

  return (
    <div className="calculator-card retirement-calc">
      <div className="calc-card-header">
        <Icon name="clock" />
        <div className="calc-header-text">
          <h3>Retirement Calculator</h3>
          <p>Plan your financial freedom by calculating the corpus needed to sustain your lifestyle through retirement.</p>
        </div>
      </div>
      <div className="calc-body">
        <div className="calc-inputs">
          <CalcInput label="Current Age (Years)" value={currentAge} onChange={setCurrentAge} suffix="Yrs" min={18} max={60} />
          <CalcInput label="Retirement Age (Years)" value={retireAge} onChange={setRetireAge} suffix="Yrs" min={40} max={70} />
          <CalcInput label="Life Expectancy (Years)" value={lifeExpectancy} onChange={setLifeExpectancy} suffix="Yrs" min={60} max={100} />
          <CalcInput label="Current Monthly Expense (₹)" value={monthlyExpense} onChange={setMonthlyExpense} suffix="₹" min={10000} max={500000} step={5000} />
          <CalcInput label="Current Investment Corpus (₹)" value={currentCorpus} onChange={setCurrentCorpus} suffix="₹" min={0} max={50000000} step={10000} />
          <CalcInput label="Monthly SIP (₹)" value={monthlySIP} onChange={setMonthlySIP} suffix="₹" min={0} max={500000} step={1000} />
          <CalcInput label="Pre-Retirement Return (%)" value={preReturnRate} onChange={setPreReturnRate} suffix="%" min={1} max={20} step={0.5} />
          <CalcInput label="Post-Retirement Return (%)" value={postReturnRate} onChange={setPostReturnRate} suffix="%" min={1} max={15} step={0.5} />
          <CalcInput label="Expected Inflation (%)" value={inflation} onChange={setInflation} suffix="%" min={1} max={12} step={0.5} />
        </div>
        <div className={`calc-verdict ${isSufficient ? 'sufficient' : 'insufficient'}`}>
          {isSufficient ? '✓ Your Plan Looks Good!' : '✗ Your Plan May Not Be Sufficient'}
        </div>
        <div className="calc-results-wrapper no-chart">
          <div className="calc-results">
            <h4>Accumulation Phase Summary</h4>
            <ResultRow label="Years until Retirement" value={`${yearsToRetire} Years`} />
            <ResultRow label="Future Value of Current Corpus" value={formatCurrencyDecimal(fvCurrentCorpus)} />
            <ResultRow label="Future Value of SIPs" value={formatCurrencyDecimal(fvSIP)} />
            <ResultRow label="Total Corpus at Retirement" value={formatCurrencyDecimal(totalCorpusAtRetirement)} highlight />
          </div>
        </div>
        <div className="calc-results-wrapper no-chart" style={{ marginTop: '16px' }}>
          <div className="calc-results">
            <h4>Withdrawal & Target Summary</h4>
            <ResultRow label="Monthly Expense at Retirement" value={formatCurrencyDecimal(monthlyExpenseAtRetirement)} />
            <ResultRow label="Target Corpus Required" value={formatCurrencyDecimal(requiredCorpus)} />
            <ResultRow label={isSufficient ? 'Surplus' : 'Shortfall'} value={formatCurrencyDecimal(Math.abs(totalCorpusAtRetirement - requiredCorpus))} highlight />
          </div>
        </div>
      </div>
    </div>
  )
}

// Delay Planning Calculator
function DelayCalculator() {
  const [monthlySIP, setMonthlySIP] = useState(10000)
  const [rate, setRate] = useState(12)
  const [years, setYears] = useState(20)
  const [delay, setDelay] = useState(5)

  const monthlyRate = rate / 100 / 12
  const months = years * 12
  const delayedMonths = (years - delay) * 12

  const withoutDelay = monthlySIP * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate)
  const withDelay = monthlySIP * ((Math.pow(1 + monthlyRate, delayedMonths) - 1) / monthlyRate) * (1 + monthlyRate)
  const costOfDelay = withoutDelay - withDelay

  return (
    <div className="calculator-card">
      <div className="calc-card-header">
        <Icon name="clock" />
        <div className="calc-header-text">
          <h3>Delay Planning Calculator</h3>
          <p>See the cost of delaying your investments and understand the power of starting early.</p>
        </div>
      </div>
      <div className="calc-body">
        <div className="calc-inputs">
          <CalcInput label="Monthly SIP (₹)" value={monthlySIP} onChange={setMonthlySIP} suffix="₹" min={500} max={500000} step={500} />
          <CalcInput label="Expected Return (%)" value={rate} onChange={setRate} suffix="%" min={1} max={30} step={0.5} />
          <CalcInput label="Total Investment Period (Years)" value={years} onChange={setYears} suffix="Yrs" min={5} max={40} />
          <CalcInput label="Delay in Starting (Years)" value={delay} onChange={setDelay} suffix="Yrs" min={1} max={years - 1} />
        </div>
        <div className="calc-results-wrapper no-chart">
          <div className="calc-results">
            <ResultRow label="If You Start Now" value={formatCurrency(withoutDelay)} />
            <ResultRow label={`If You Delay by ${delay} Years`} value={formatCurrency(withDelay)} />
            <ResultRow label="Cost of Delay" value={formatCurrency(costOfDelay)} highlight />
          </div>
        </div>
      </div>
    </div>
  )
}

// Life Insurance Calculator
function LifeInsuranceCalculator() {
  const [annualIncome, setAnnualIncome] = useState(1200000)
  const [currentAge, setCurrentAge] = useState(35)
  const [retireAge, setRetireAge] = useState(60)
  const [liabilities, setLiabilities] = useState(2000000)
  const [existingCover, setExistingCover] = useState(0)
  const [inflation, setInflation] = useState(6)

  const yearsToRetire = retireAge - currentAge
  const incomeMultiplier = 15 // Standard rule of thumb
  const inflationAdjusted = annualIncome * ((Math.pow(1 + inflation / 100, yearsToRetire) - 1) / (inflation / 100))
  const requiredCover = (annualIncome * incomeMultiplier) + liabilities - existingCover
  const idealCover = Math.max(requiredCover, inflationAdjusted)

  return (
    <div className="calculator-card">
      <div className="calc-card-header">
        <Icon name="shield" />
        <div className="calc-header-text">
          <h3>Life Insurance Calculator</h3>
          <p>Calculate the ideal life cover to protect your family's future financial needs.</p>
        </div>
      </div>
      <div className="calc-body">
        <div className="calc-inputs">
          <CalcInput label="Annual Income (₹)" value={annualIncome} onChange={setAnnualIncome} suffix="₹" min={100000} max={50000000} step={50000} />
          <CalcInput label="Current Age (Years)" value={currentAge} onChange={setCurrentAge} suffix="Yrs" min={18} max={60} />
          <CalcInput label="Retirement Age (Years)" value={retireAge} onChange={setRetireAge} suffix="Yrs" min={40} max={70} />
          <CalcInput label="Outstanding Liabilities (₹)" value={liabilities} onChange={setLiabilities} suffix="₹" min={0} max={50000000} step={100000} />
          <CalcInput label="Existing Life Cover (₹)" value={existingCover} onChange={setExistingCover} suffix="₹" min={0} max={50000000} step={100000} />
          <CalcInput label="Inflation Rate (%)" value={inflation} onChange={setInflation} suffix="%" min={1} max={12} step={0.5} />
        </div>
        <div className="calc-results-wrapper no-chart">
          <div className="calc-results">
            <ResultRow label="Years of Income Replacement" value={`${yearsToRetire} Years`} />
            <ResultRow label="Income Replacement Need" value={formatCurrency(annualIncome * incomeMultiplier)} />
            <ResultRow label="Plus Liabilities" value={formatCurrency(liabilities)} />
            <ResultRow label="Less Existing Cover" value={formatCurrency(existingCover)} />
            <ResultRow label="Recommended Life Cover" value={formatCurrency(idealCover)} highlight />
          </div>
        </div>
      </div>
    </div>
  )
}

// EMI Calculator
function EMICalculator() {
  const [principal, setPrincipal] = useState(5000000)
  const [rate, setRate] = useState(8.5)
  const [tenure, setTenure] = useState(20)

  const monthlyRate = rate / 100 / 12
  const months = tenure * 12
  const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1)
  const totalPayment = emi * months
  const totalInterest = totalPayment - principal

  return (
    <div className="calculator-card">
      <div className="calc-card-header">
        <Icon name="home" />
        <div className="calc-header-text">
          <h3>EMI Calculator</h3>
          <p>Estimate your monthly loan payments for home, car, or personal loans.</p>
        </div>
      </div>
      <div className="calc-body">
        <div className="calc-inputs">
          <CalcInput label="Loan Amount (₹)" value={principal} onChange={setPrincipal} suffix="₹" min={100000} max={100000000} step={50000} />
          <CalcInput label="Interest Rate (%)" value={rate} onChange={setRate} suffix="%" min={1} max={20} step={0.1} />
          <CalcInput label="Loan Tenure (Years)" value={tenure} onChange={setTenure} suffix="Yrs" min={1} max={30} />
        </div>
        <div className="calc-results-wrapper">
          <DonutChart invested={principal} returns={totalInterest} total={totalPayment} />
          <div className="calc-results">
            <ResultRow label="Monthly EMI" value={formatCurrency(emi)} highlight />
            <ResultRow label="Principal Amount" value={formatCurrency(principal)} dotColor="invested" />
            <ResultRow label="Total Interest" value={formatCurrency(totalInterest)} dotColor="returns" />
            <ResultRow label="Total Payment" value={formatCurrency(totalPayment)} />
          </div>
        </div>
      </div>
    </div>
  )
}

// Tax Calculator (Old vs New Regime)
function TaxCalculator() {
  const [income, setIncome] = useState(1500000)
  const [deductions80C, setDeductions80C] = useState(150000)
  const [deductions80D, setDeductions80D] = useState(25000)
  const [hra, setHRA] = useState(100000)
  const [otherDeductions, setOtherDeductions] = useState(50000)

  // Old regime calculation
  const totalDeductionsOld = Math.min(deductions80C, 150000) + Math.min(deductions80D, 100000) + hra + otherDeductions
  const taxableIncomeOld = Math.max(income - totalDeductionsOld - 50000, 0) // 50000 standard deduction
  
  const calcOldTax = (ti: number) => {
    if (ti <= 250000) return 0
    if (ti <= 500000) return (ti - 250000) * 0.05
    if (ti <= 1000000) return 12500 + (ti - 500000) * 0.2
    return 112500 + (ti - 1000000) * 0.3
  }

  // New regime calculation (FY 2024-25)
  const taxableIncomeNew = Math.max(income - 75000, 0) // 75000 standard deduction in new regime
  
  const calcNewTax = (ti: number) => {
    if (ti <= 300000) return 0
    if (ti <= 700000) return (ti - 300000) * 0.05
    if (ti <= 1000000) return 20000 + (ti - 700000) * 0.1
    if (ti <= 1200000) return 50000 + (ti - 1000000) * 0.15
    if (ti <= 1500000) return 80000 + (ti - 1200000) * 0.2
    return 140000 + (ti - 1500000) * 0.3
  }

  const oldTax = calcOldTax(taxableIncomeOld)
  const newTax = calcNewTax(taxableIncomeNew)
  const cess = 0.04
  const totalOldTax = oldTax * (1 + cess)
  const totalNewTax = newTax * (1 + cess)
  const savings = Math.abs(totalOldTax - totalNewTax)
  const betterRegime = totalOldTax < totalNewTax ? 'Old Regime' : 'New Regime'

  return (
    <div className="calculator-card">
      <div className="calc-card-header">
        <Icon name="building" />
        <div className="calc-header-text">
          <h3>Tax Calculator</h3>
          <p>Compare old vs new tax regime and plan your tax-saving investments.</p>
        </div>
      </div>
      <div className="calc-body">
        <div className="calc-inputs">
          <CalcInput label="Annual Income (₹)" value={income} onChange={setIncome} suffix="₹" min={100000} max={50000000} step={50000} />
          <CalcInput label="80C Deductions (₹)" value={deductions80C} onChange={setDeductions80C} suffix="₹" min={0} max={150000} step={5000} />
          <CalcInput label="80D Health Insurance (₹)" value={deductions80D} onChange={setDeductions80D} suffix="₹" min={0} max={100000} step={5000} />
          <CalcInput label="HRA Exemption (₹)" value={hra} onChange={setHRA} suffix="₹" min={0} max={500000} step={10000} />
          <CalcInput label="Other Deductions (₹)" value={otherDeductions} onChange={setOtherDeductions} suffix="₹" min={0} max={500000} step={5000} />
        </div>
        <div className="calc-results-wrapper no-chart">
          <div className="calc-results two-col">
            <div className="calc-col">
              <h4>Old Regime</h4>
              <ResultRow label="Taxable Income" value={formatCurrency(taxableIncomeOld)} />
              <ResultRow label="Tax + Cess" value={formatCurrency(totalOldTax)} />
            </div>
            <div className="calc-col">
              <h4>New Regime</h4>
              <ResultRow label="Taxable Income" value={formatCurrency(taxableIncomeNew)} />
              <ResultRow label="Tax + Cess" value={formatCurrency(totalNewTax)} />
            </div>
          </div>
        </div>
        <div className="calc-verdict sufficient">
          {betterRegime} saves you {formatCurrency(savings)}
        </div>
      </div>
    </div>
  )
}

// Vacation Planning Calculator
function VacationCalculator() {
  const [targetAmount, setTargetAmount] = useState(200000)
  const [months, setMonths] = useState(12)
  const [rate, setRate] = useState(8)

  const monthlyRate = rate / 100 / 12
  const requiredSIP = targetAmount / (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate))

  return (
    <div className="calculator-card">
      <div className="calc-card-header">
        <Icon name="plane" />
        <div className="calc-header-text">
          <h3>Vacation Planning Calculator</h3>
          <p>Plan and save for your dream vacation with systematic investments.</p>
        </div>
      </div>
      <div className="calc-body">
        <div className="calc-inputs">
          <CalcInput label="Target Amount (₹)" value={targetAmount} onChange={setTargetAmount} suffix="₹" min={10000} max={5000000} step={10000} />
          <CalcInput label="Time to Save (Months)" value={months} onChange={setMonths} suffix="Mo" min={3} max={60} />
          <CalcInput label="Expected Return (%)" value={rate} onChange={setRate} suffix="%" min={1} max={15} step={0.5} />
        </div>
        <div className="calc-results-wrapper no-chart">
          <div className="calc-results">
            <ResultRow label="Target Vacation Fund" value={formatCurrency(targetAmount)} />
            <ResultRow label="Time Period" value={`${months} Months`} />
            <ResultRow label="Monthly SIP Required" value={formatCurrency(requiredSIP)} highlight />
            <ResultRow label="Total Investment" value={formatCurrency(requiredSIP * months)} />
          </div>
        </div>
      </div>
    </div>
  )
}

const calculatorTabs = [
  { id: 'sip', name: 'SIP', component: SIPCalculator },
  { id: 'lumpsum', name: 'Lumpsum', component: LumpsumCalculator },
  { id: 'stp', name: 'STP', component: STPCalculator },
  { id: 'swp', name: 'SWP', component: SWPCalculator },
  { id: 'retirement', name: 'Retirement', component: RetirementCalculator },
  { id: 'delay', name: 'Delay Planning', component: DelayCalculator },
  { id: 'insurance', name: 'Life Insurance', component: LifeInsuranceCalculator },
  { id: 'emi', name: 'EMI', component: EMICalculator },
  { id: 'tax', name: 'Tax', component: TaxCalculator },
  { id: 'vacation', name: 'Vacation', component: VacationCalculator },
]

function Calculators() {
  const [activeTab, setActiveTab] = useState('retirement')
  const ActiveCalculator = calculatorTabs.find(t => t.id === activeTab)?.component || RetirementCalculator

  return (
    <main className="calculators-page">
      <section className="page-heading">
        <div className="wrap">
          <span className="eyebrow">Financial Tools</span>
          <h1>Financial Planning Calculators</h1>
          <p>Use our free calculators to plan investments, assess loan scenarios, and make informed financial decisions.</p>
        </div>
      </section>
      <section className="section wrap">
        <div className="calc-tabs">
          {calculatorTabs.map(t => (
            <button
              key={t.id}
              className={`calc-tab${activeTab === t.id ? ' active' : ''}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.name}
            </button>
          ))}
        </div>
        <div className="calc-container">
          <ActiveCalculator />
        </div>
        <p className="disclaimer">Calculations are for illustrative purposes only and do not guarantee actual returns.</p>
      </section>
      <ContactPanel compact />
    </main>
  )
}

const testimonials = [
  { quote: 'I have known Madhav for over a decade and have relied on his expertise for multiple home loan processes across different banks. His deep knowledge and clear guidance made the entire experience smooth and stress-free.', author: 'Siddharth Ghosh', photo: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { quote: 'Their prompt responses, deep expertise, and consistent commitment to delivering the best possible guidance truly set them apart. Their approach to wealth creation is built on trust, strong ethical values, and absolute transparency.', author: 'Dr. Binay Kumar', photo: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { quote: 'Padhye Synergetic Company has been instrumental in helping me plan my retirement. Their personalized approach and honest advice gave me confidence in my financial future.', author: 'Rajesh Sharma', photo: 'https://randomuser.me/api/portraits/men/67.jpg' },
  { quote: 'I appreciate the transparency and dedication of the team. They took the time to understand my goals and recommended solutions that perfectly fit my needs.', author: 'Priya Kulkarni', photo: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { quote: 'As a business owner, I needed comprehensive financial planning. PSC delivered exactly that — from insurance to investments, they covered everything with expertise.', author: 'Amit Deshmukh', photo: 'https://randomuser.me/api/portraits/men/52.jpg' },
  { quote: 'The team\'s professionalism and in-depth knowledge made my investment journey simple and rewarding. Highly recommend their services to anyone seeking financial clarity.', author: 'Sneha Patil', photo: 'https://randomuser.me/api/portraits/women/68.jpg' },
]

function Testimonials() {
  const quoteReveal = useReveal<HTMLDivElement>()
  return (
    <main className="testimonials-page">
      <section className="page-heading">
        <div className="wrap">
          <span className="eyebrow">Client Stories</span>
          <h1>What Our Clients Say</h1>
          <p>Hear from thousands of satisfied investors who trust us with their financial journey.</p>
        </div>
      </section>
      <section className="section wrap">
        <div className="quote-grid" ref={quoteReveal.ref}>
          {testimonials.map((t, i) => (
            <blockquote className={`quote-card ${quoteReveal.className}`} style={{ transitionDelay: `${(i % 3) * 110}ms` }} key={t.author}>
              <Icon name="quote" className="quote-mark" />
              <p>{t.quote}</p>
              <div className="quote-author">
                <img src={t.photo} alt={t.author} className="quote-photo" />
                <cite>{t.author}</cite>
              </div>
            </blockquote>
          ))}
        </div>
      </section>
      <ContactPanel compact />
    </main>
  )
}

function About() {
  const aboutReveal = useReveal<HTMLDivElement>()
  const founderReveal = useReveal<HTMLDivElement>()
  return (
    <main className="about-page">
      <section className="page-heading">
        <div className="wrap">
          <span className="eyebrow">About Us</span>
          <h1>A firm built on trust, not transactions</h1>
          <p>Learn about our mission, vision, and the people behind Padhye Synergetic Company.</p>
        </div>
      </section>
      <section className="section wrap">
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
      <ContactPanel compact />
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
  const page = 
    path === '/products' ? <Products /> : 
    path === '/calculators' ? <Calculators /> : 
    path === '/testimonials' ? <Testimonials /> : 
    path === '/about' ? <About /> : 
    path === '/contact' ? <Contact /> : 
    <Home />
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

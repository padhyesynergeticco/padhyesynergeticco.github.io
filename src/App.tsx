import { AnchorHTMLAttributes, useEffect, useState } from 'react'

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

function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link to="/" onClick={close} aria-label="FinRo Bazzar home">
          <img className="brand-logo" src="/assets/padhye-synergetic.png" alt="Padhye Synergetic Company" />
        </Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
          <span /><span /><span />
        </button>
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          <NavLink to="/" onClick={close}>Home</NavLink>
          <NavLink to="/products" onClick={close}>Products</NavLink>
          <Link to="/#about" onClick={close}>About</Link>
          <NavLink to="/contact" onClick={close}>Contact Us</NavLink>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <p>© 2026 FinRo Bazaar. All Rights Reserved. AMFI Registered Mutual Fund Distributor.</p>
        <p>Mutual Fund investments are subject to market risks, read all scheme related documents carefully.</p>
        <p className="credit">Designed &amp; developed by NiVi FinTech Solutions</p>
      </div>
    </footer>
  )
}

function ChatBubble() {
  return <button className="chat-bubble" aria-label="Open FinRo AI">•••</button>
}

const stats = [
  ['7,000+', 'Happy Clients'],
  ['15+', 'Years Experience'],
  ['₹50Cr+', 'Assets Advised'],
  ['360°', 'Services'],
]

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <div className="badge"><i /> AMFI Registered Mutual Fund Distributor</div>
          <h1>Empower Your <span>Financial<br />Future</span></h1>
          <p>Where smart financial solutions meet simplicity and trust.</p>
          <div className="actions">
            <Link className="button primary" to={contactHref}>Start Investing</Link>
            <a className="button secondary" href="#about">Learn More</a>
          </div>
        </div>
      </section>
      {/* 
      <section className="stats wrap">
        {stats.map(([number, label]) => <div key={label}><strong>{number}</strong><span>{label}</span></div>)}
      </section> 
      */}
      {/* 
      <section className="trust-section wrap">
        <div className="trust-logo"><img src="/assets/finro-logo.png" alt="FinRo Bazzar" /></div>
        <div>
          <span className="eyebrow">Your Trusted Wealth Partner</span>
          <div className="three-column">
            <article><h2>Why Us?</h2><p>Finance should be simple, transparent, and goal-oriented. We combine expertise with personalised guidance to help you make informed decisions.</p></article>
            <article><h2>Who We Are?</h2><p>An investment arm of Padhye Synergetic, driven by a team of experienced professionals committed to empowering clients and building trust.</p></article>
            <article><h2>What We Do?</h2><p>We empower families and businesses with transparent, reliable, and customised financial solutions that simplify decision-making and create wealth.</p></article>
          </div>
          <p className="service-line">Investment <b>•</b> Mutual Funds <b>•</b> Loans <b>•</b> Advisory</p>
        </div>
      </section> 
      */}
      <section id="about" className="about-section">
        <div className="wrap">
          <span className="eyebrow">Padhye Synergetic Company</span>
          <h2 className="section-title">About Us</h2>
          <p className="section-lead">
            <strong>Padhye Synergetic Company (PSC)</strong> is a trusted financial services firm committed to helping individuals, families, and businesses build, protect, and grow their wealth through informed financial decisions.
          </p>
          <p className="section-lead">
            With a client-first approach, we provide comprehensive financial solutions tailored to every stage of life. Our expertise spans investments, insurance, loans, and wealth management, ensuring that every recommendation aligns with our clients' financial goals and risk profile.
          </p>
          <p className="section-lead">
            At PSC, we believe that financial planning is more than choosing the right product—it’s about creating long-term value, security, and peace of mind. By combining industry expertise, ethical practices, and personalized service, we strive to build lasting relationships based on trust and transparency.
          </p>
          <div className="value-grid">
            <article>
              <div className="icon">🚀</div>
              <h3>Our Services</h3>
              <p>➟ Financial Planning</p>
              <p>➟ Mutual Funds</p>
              <p>➟ Alternative Investment Funds (AIF)</p>
              <p>➟ Portfolio Management Services (PMS)</p>
              <p>➟ Structured Products</p>
              <p>➟ Fixed Deposits & Bonds</p>
              <p>➟ Life, Health, Motor & General Insurance</p>
              <p>➟ Home, Business & Personal Loans</p>
              <p>➟ Real Estate Advisory</p>
            </article>
            <article>
              <div className="icon">🤝</div>
              <h3>Our Vision</h3>
              <p>To empower every individual and business with the knowledge and financial solutions needed to achieve long-term prosperity and financial independence.</p>
            </article>
            <article>
              <div className="icon">💼</div>
              <h3>Our Mission</h3>
              <p>To deliver transparent, personalized, and innovative financial solutions while maintaining the highest standards of integrity, professionalism, and client satisfaction.</p>
              <p>Padhye Synergetic Company: Building Wealth. Protecting Futures. Creating Financial Confidence.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="founder wrap">
        <div className="founder-image"><img src="/assets/madhav-padhye.jpeg" alt="Mr. Madhav Padhye" /></div>
        <div>
          <span className="eyebrow">Founders</span>
          <h2 className="section-title left">Mr. Madhav Padhye</h2>
          <p className="role">Founder</p>
          <p>Mr. Madhav Padhye is the Founder of Padhye Synergetic Company and the guiding force behind FinRo Bazzar. With decades of strong financial knowledge and practical market experience, he specialises in investments, insurance planning, structured products, bonds, and long-term wealth strategies.</p>
          <p>Madhav's leadership is rooted in honesty, transparency, and delivering well-researched, personalised financial solutions.</p>
        </div>
      </section>
      <section className="inspiration">
        <div className="wrap narrow">
          <h2>Inspiration — Mr. Madhusudhan Nawathe</h2>
          <p>Although not a board member, Mr. Nawathe is a source of guidance and inspiration for the team. His value-driven outlook, discipline, and experience shape FinRo's approach to honesty, client service, and long-term trust.</p>
        </div>
      </section>
      <section className="testimonials wrap">
        <span className="eyebrow">What Our Clients Say</span>
        <h2 className="section-title">Trusted by thousands of investors</h2>
        <div className="testimonial-grid">
          <blockquote>“I have known Madhav for over a decade and have relied on his expertise for multiple home loan processes across different banks. His deep knowledge and clear guidance made the entire experience smooth and stress-free.”<cite>Siddharth Ghosh</cite></blockquote>
          <blockquote>“Their prompt responses, deep expertise, and consistent commitment to delivering the best possible guidance truly set them apart. Their approach to wealth creation is built on trust, strong ethical values, and absolute transparency.”<cite>Dr. Binay Kumar</cite></blockquote>
        </div>
      </section>
      <ContactPanel compact />
    </main>
  )
}

const products = [
  { icon: '◉', title: 'Expert Advisory', text: 'Get personalized guidance from certified financial planners. From tax planning to retirement strategies, we cover it all.', action: 'Book Consultation' },
  { icon: '⬡', title: 'Financial Planning', text: '"Build Your Wealth. Secure Your Future." Your goals deserve a strategy, not just a spreadsheet. Our financial planning services align your capital with your ambitions.', action: 'View Options' },
  { icon: '▱', title: 'Mutual Funds', text: '"Invest in India’s growth story, one SIP at a time." Start investing in India’s top companies with as little as ₹500 a month and harness the power of compounding.', action: 'View Options' },
  { icon: '↗', title: 'Fixed Deposits & Bonds', text: 'Secure your capital with predictable, fixed returns. Choose from a curated selection of FDs and highly-rated corporate bonds.', action: 'View Options' },
]

const insurance = [
  ['♙', 'Life Insurance', "Secure your family's financial future in your absence."],
  ['✚', 'Health Insurance', 'Cover medical expenses and stay prepared for emergencies.'],
  ['☆', 'Child Savings Plans', "Invest for your child's education and future milestones."],
  ['◆', 'Motor Insurance', 'Protect your vehicle against damage and third-party liability.'],
  ['⌂', 'Property Insurance', 'Safeguard your home and its contents from unforeseen events.'],
  ['◷', 'Term Plans', 'High coverage at affordable premiums for a specific period.'],
  ['↗', 'Guaranteed Return Plans', 'Enjoy fixed returns on your investment, regardless of market conditions.'],
  ['≈', 'Marine Insurance', 'Cover for loss or damage of ships, cargo, terminals, and transport.'],
  ['✈', 'Travel Insurance', 'Secure your trips against medical emergencies and lost baggage.'],
]

function Products() {
  return (
    <main className="products-page">
      <section className="page-heading">
        <h1>Comprehensive Financial Solutions</h1>
        <p>Explore diverse investment options and utilize our free tools to plan your future.</p>
      </section>
      <section className="wrap product-section">
        <h2 className="section-title">Explore Our Investment Products</h2>
        <div className="product-grid">
          {products.map(p => <article className="product-card" key={p.title}><div className="round-icon">{p.icon}</div><h3>{p.title}</h3><p>{p.text}</p><Link to={contactHref} className="button primary">{p.action}</Link></article>)}
        </div>
      </section>
      <section className="loan-section">
        <div className="wrap">
          <h2 className="section-title">Flexible Loan Solutions</h2>
          <p className="section-lead">Finance your next big step with a solution tailored to you.</p>
          <div className="loan-grid">
            <article><div className="round-icon">⌂</div><h3>Home Loan</h3><p>Finance your dream home with attractive interest rates.</p></article>
            <article><div className="round-icon">⌁</div><h3>Education Loan</h3><p>Invest in your future with tailored student loans.</p></article>
            <article><div className="round-icon">▤</div><h3>LAP Loan</h3><p>Unlock the value of your property with a Loan Against Property.</p></article>
          </div>
          <div className="center"><Link className="button primary" to={contactHref}>Apply for a Loan Today</Link></div>
        </div>
      </section>
      <section className="process wrap">
        <h2 className="section-title">Our Process</h2>
        <p className="section-lead">A clear and collaborative journey towards your financial goals.</p>
        <div className="process-flow">{['Personalized Attention', 'Technical Assessment', 'Analysis & Planning', 'Goal Setting', 'Pathway Creation', 'Implementation & Guidance'].map((x, i) => <div key={x}><span>{i + 1}</span><p>{x}</p></div>)}</div>
      </section>
      <section className="calculator-section">
        <div className="wrap">
          <h2 className="section-title">Financial Planning Calculators</h2>
          <p className="section-lead">Quickly assess your investment and loan scenarios.</p>
          <div className="calculator-grid">{['SIP', 'Lumpsum', 'STP', 'SWP', 'Retirement', 'Delay Planning', 'Life Insurance', 'EMI', 'Tax', 'Vacation Planning'].map(x => <div key={x}>{x} Calculator</div>)}</div>
        </div>
      </section>
      <section className="insurance wrap">
        <h2 className="section-title">Comprehensive Insurance Plans</h2>
        <p className="section-lead">Protect yourself and your loved ones from life's uncertainties.</p>
        <div className="insurance-grid">{insurance.map(([icon, title, text]) => <article key={title}><div className="mini-icon">{icon}</div><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        <div className="center"><Link className="button primary" to={contactHref}>Get an Insurance Quote</Link></div>
        <p className="disclaimer">Product information and calculations are for illustrative purposes only.</p>
      </section>
    </main>
  )
}

function ContactPanel({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? 'contact-panel compact' : 'contact-panel'}>
      <div className="wrap contact-layout">
        <div>
          <span className="eyebrow">Get in Touch</span>
          <h1>{compact ? "Let's Start a Conversation" : "Let's Start a Conversation"}</h1>
          <p>Have questions about our products or want to start your investment journey? Our dedicated advisory team is here to help you achieve financial clarity.</p>
          <div className="contact-details">
            <a href="mailto:padhyesynergetic.co@gmail.com"><span>✉</span><div><small>Email Us</small>padhyesynergetic.co@gmail.com</div></a>
            <a href="tel:+919665055909"><span>☎</span><div><small>Call Us</small>+91-9665055909</div></a>
            <div><span>⌖</span><div><small>Visit Us</small>Pune, Maharashtra</div></div>
          </div>
        </div>
        <form className="contact-form" onSubmit={e => e.preventDefault()}>
          <div className="form-row"><label>First Name<input required /></label><label>Last Name<input required /></label></div>
          <label>Email Address<input type="email" required /></label>
          <label>Phone Number<input type="tel" /></label>
          <label>Your Message<textarea rows={5} required /></label>
          <button className="button primary" type="submit">Send Message</button>
          <small>This static form is for presentation only.</small>
        </form>
      </div>
    </section>
  )
}

function Contact() {
  return <main><ContactPanel /></main>
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

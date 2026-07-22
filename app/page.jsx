import { ArrowDownRight, ArrowUpRight, BookOpen, ExternalLink, Mail, MapPin } from 'lucide-react';
import { experience, impact, profile, projects } from '@/lib/profile';
import ScrollEffects from '@/components/ScrollEffects';

const nav = [['Work', '#work'], ['Experience', '#experience'], ['Research', '#research'], ['Contact', '#contact']];

export default function Home() {
  return (
    <main>
      <ScrollEffects />
      <aside className="side-rail">
        <a href="#top" className="monogram" aria-label="Back to top">ĐĐ</a>
        <div className="rail-middle"><span>AI / RESEARCH</span><span>2026</span></div>
        <div className="rail-line" />
      </aside>
      <div className="site-shell" id="top">
        <header className="topbar">
          <a className="wordmark" href="#top">NGUYỄN ĐÔN ĐỨC <span>/ EDWARD</span></a>
          <nav aria-label="Primary navigation">{nav.map(([label, href]) => <a key={label} href={href} data-nav-target={href.slice(1)}>{label}</a>)}</nav>
          <a className="availability" href={`mailto:${profile.email}`}><i /> Available for collaboration</a>
        </header>

        <section className="hero reveal is-visible" aria-labelledby="hero-title">
          <p className="kicker">Ho Chi Minh City · Vietnam <span>✦</span> {profile.role}</p>
          <h1 id="hero-title">{profile.headline}</h1>
          <div className="hero-bottom">
            <p>{profile.summary}</p>
            <a href="#work" className="circle-link" aria-label="See selected work"><ArrowDownRight size={26} /></a>
          </div>
        </section>

        <section className="impact-grid reveal" aria-label="Key numbers">
          {impact.map(([number, label]) => <div key={number}><strong>{number}</strong><span>{label}</span></div>)}
        </section>

        <section id="work" className="section reveal" aria-labelledby="work-title">
          <div className="section-heading"><p className="section-number">01 / SELECTED WORK</p><h2 id="work-title">Systems with<br /><em>real stakes.</em></h2></div>
          <div className="work-list">{projects.map(project => <article className="project-card" key={project.title}>
            <div className="project-meta"><span>{project.index}</span><span>{project.eyebrow}</span></div>
            <div className="project-content"><h3>{project.title}</h3><p>{project.summary}</p><p className="project-detail">{project.details}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
            <a href={project.href} target="_blank" rel="noreferrer" className="project-link" aria-label={`Open ${project.title}`}><ArrowUpRight size={22} /></a>
          </article>)}</div>
        </section>

        <section id="experience" className="section experience-section reveal" aria-labelledby="experience-title">
          <div className="section-heading"><p className="section-number">02 / EXPERIENCE</p><h2 id="experience-title">Research meets<br /><em>shipping.</em></h2></div>
          <div className="timeline">{experience.map(item => <article key={item.company}><p className="period">{item.period}</p><div><h3>{item.role}</h3><p className="company">{item.company}</p><p>{item.copy}</p></div></article>)}</div>
        </section>

        <section id="research" className="research-band reveal" aria-labelledby="research-title">
          <div><p className="section-number">03 / RESEARCH</p><h2 id="research-title">Published research,<br />grounded practice.</h2></div>
          <div className="research-list">
            <a href="https://doi.org/10.1007/978-3-032-03751-0_8" target="_blank" rel="noreferrer"><BookOpen size={20} /><span><b>ICDAM 2025 · Springer</b>Comparative Analysis of LSTM, Transformer-Based LSTM and Transformer-Based GRU for Stock Price Prediction.</span><ExternalLink size={17} /></a>
            <div><BookOpen size={20} /><span><b>Graduation thesis · 2025</b>Hybrid-Log Loss for deep-learning regression, with a 5–10% overall performance improvement across practical datasets.</span></div>
          </div>
        </section>

        <section id="contact" className="contact reveal" aria-labelledby="contact-title">
          <p className="section-number">04 / CONTACT</p><h2 id="contact-title">Have a meaningful<br /><em>problem to solve?</em></h2>
          <a className="email-link" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={26} /></a>
          <div className="contact-meta"><span><MapPin size={15} /> {profile.location}</span><span><Mail size={15} /> {profile.phone}</span><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a></div>
        </section>
      </div>
    </main>
  );
}

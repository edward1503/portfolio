import {
  ArrowUpRight,
  BrainCircuit,
  ChartNoAxesCombined,
  GitBranch,
  Mail,
  MapPin,
  Network,
  Sparkles
} from 'lucide-react';
import GithubStats from '@/components/GithubStats';
import { capabilities, journey, metrics, profile, projects, stack } from '@/lib/profile';

const nav = [
  ['Work', '#work'],
  ['Stack', '#stack'],
  ['Journey', '#journey'],
  ['Contact', '#contact']
];

const focusCards = [
  { icon: BrainCircuit, title: 'Machine intelligence', text: 'Modeling pipelines with explainability and practical evaluation in mind.' },
  { icon: Network, title: 'AI workflows', text: 'Search, automation, and API-ready systems that can be iterated quickly.' },
  { icon: ChartNoAxesCombined, title: 'Decision support', text: 'Data stories, dashboards, and recommendations for business context.' }
];

export default function Home() {
  return (
    <main className="page-shell" id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Go to top">
          <span>ED</span>
          <strong>{profile.alias}</strong>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map(([label, href]) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </nav>
        <a className="icon-button" href={profile.github} target="_blank" rel="noreferrer" aria-label="Open GitHub profile">
          <GitBranch size={18} />
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">{profile.role}</p>
          <h1 id="hero-title">{profile.headline}</h1>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              <Sparkles size={18} />
              Selected work
            </a>
            <a className="button secondary" href={`mailto:${profile.email}`}>
              <Mail size={18} />
              Contact Edward
            </a>
          </div>
        </div>

        <aside className="identity-board" aria-label="Profile card">
          <div className="avatar-frame">
            <img src={profile.avatar} alt={`${profile.name} profile`} />
          </div>
          <div className="identity-content">
            <p className="tiny-label">{profile.alias}</p>
            <h2>{profile.name}</h2>
            <p><MapPin size={16} /> {profile.location}</p>
          </div>
          <GithubStats metrics={metrics} />
        </aside>
      </section>

      <section className="mobile-quick-card" aria-label="Quick contact">
        <span>Available for AI engineering roles</span>
        <a href={`mailto:${profile.email}`}>Email</a>
      </section>

      <section className="focus-strip" aria-label="Focus areas">
        {focusCards.map(({ icon: Icon, title, text }) => (
          <article key={title}>
            <Icon size={22} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="section" id="work" aria-labelledby="work-title">
        <div className="section-heading wide">
          <p className="eyebrow">Selected work</p>
          <h2 id="work-title">Project cards with enough signal to start a real conversation.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card ${index === 0 ? 'project-card-featured' : ''}`} data-accent={project.accent} key={project.title}>
              <div className="project-meta">
                <span>{project.language}</span>
                <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository`}>
                  <ArrowUpRight size={17} />
                </a>
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul>
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section stack-section" id="stack" aria-labelledby="stack-title">
        <div className="section-heading">
          <p className="eyebrow">Stack</p>
          <h2 id="stack-title">Tools for the full ML loop.</h2>
        </div>
        <div className="stack-marquee" aria-label="Technology stack">
          {stack.map((item) => <span key={item}>{item}</span>)}
        </div>
        <div className="capability-grid">
          {capabilities.map((item, index) => (
            <article key={item.label}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.label}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section journey-section" id="journey" aria-labelledby="journey-title">
        <div className="section-heading wide">
          <p className="eyebrow">Journey</p>
          <h2 id="journey-title">A compact path from data science foundation to applied AI practice.</h2>
        </div>
        <div className="timeline">
          {journey.map((item) => (
            <article key={item.year}>
              <time>{item.year}</time>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Let&apos;s make data useful.</h2>
          <p>Best fit: machine learning, applied AI search, data science, analytics, and MLOps-flavored engineering.</p>
        </div>
        <div className="contact-actions" aria-label="Contact links">
          <a href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a>
          <a href={profile.github} target="_blank" rel="noreferrer"><GitBranch size={18} /> GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><ArrowUpRight size={18} /> LinkedIn</a>
          <a href={profile.huggingFace} target="_blank" rel="noreferrer"><ArrowUpRight size={18} /> Hugging Face</a>
        </div>
      </section>

      <footer className="site-footer">
        <span>{profile.name} / {profile.alias}</span>
        <span>Next.js static export for GitHub Pages.</span>
      </footer>
    </main>
  );
}

import { ArrowUpRight, GitBranch, Mail, MapPin } from 'lucide-react';
import { profile, projects, stack } from '@/lib/profile';

const proof = [
  ['78+', 'public repos across AI, data, and engineering labs'],
  ['2026', 'recent work in applied search, agents, automation, and observability'],
  ['UEH', 'data science foundation with NLP, BI, big data, and AI projects']
];

const selectedProjects = projects.slice(0, 4);

export default function Home() {
  return (
    <main className="site-shell" id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Go to top">
          <span>ED</span>
          <strong>{profile.alias}</strong>
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-link" href={profile.github} target="_blank" rel="noreferrer">
          <GitBranch size={17} />
          GitHub
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-main">
          <p className="eyebrow">{profile.role}</p>
          <h1 id="hero-title">AI engineer who turns data work into usable systems.</h1>
          <p className="hero-copy">
            I&apos;m {profile.name}, also known as {profile.alias}. I build with Python, machine learning, retrieval/search,
            and MLOps habits so models do not stay trapped in notebooks.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">See selected work</a>
            <a className="button secondary" href={`mailto:${profile.email}`}>Start a conversation</a>
          </div>
        </div>

        <aside className="portrait-card" aria-label="Profile summary">
          <img src={profile.avatar} alt={`${profile.name} profile`} />
          <div className="portrait-copy">
            <span>Available for AI / ML roles</span>
            <h2>{profile.name}</h2>
            <p><MapPin size={15} /> {profile.location}</p>
          </div>
        </aside>
      </section>

      <section className="proof-grid" aria-label="Profile highlights">
        {proof.map(([value, label]) => (
          <article key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-kicker">
          <p className="eyebrow">Selected work</p>
          <h2 id="work-title">Not everything. Just the projects that explain the direction.</h2>
        </div>
        <div className="case-list">
          {selectedProjects.map((project, index) => (
            <article className="case-card" key={project.title}>
              <div className="case-index">0{index + 1}</div>
              <div className="case-body">
                <div className="case-meta">
                  <span>{project.language}</span>
                  <span>{project.tags.slice(0, 2).join(' / ')}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <a className="case-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository`}>
                <ArrowUpRight size={19} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="stack-contact" id="stack" aria-labelledby="stack-title">
        <div className="stack-panel">
          <p className="eyebrow">Stack</p>
          <h2 id="stack-title">Built around practical AI delivery.</h2>
          <div className="stack-tags" aria-label="Technology stack">
            {stack.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="contact-panel" id="contact">
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s build useful AI.</h2>
          <p>Best fit: ML engineering, applied search, data products, analytics automation, and MLOps-flavored work.</p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}><Mail size={17} /> {profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><ArrowUpRight size={17} /> LinkedIn</a>
            <a href={profile.huggingFace} target="_blank" rel="noreferrer"><ArrowUpRight size={17} /> Hugging Face</a>
          </div>
        </div>
      </section>
    </main>
  );
}

import { ArrowUpRight, BriefcaseBusiness, Code2, GitBranch, Home as HomeIcon, Mail, UserRound, Wrench } from 'lucide-react';
import { profile, projects, stack } from '@/lib/profile';

const navItems = [
  { label: 'Home', href: '#top', icon: HomeIcon },
  { label: 'About', href: '#about', icon: UserRound },
  { label: 'Work', href: '#work', icon: BriefcaseBusiness },
  { label: 'Stack', href: '#stack', icon: Wrench },
  { label: 'Contact', href: '#contact', icon: Mail }
];

const selectedProjects = projects.slice(0, 4);

export default function Home() {
  return (
    <main className="space-site" id="top">
      <aside className="side-rail" aria-label="Primary navigation">
        <a className="rail-logo" href="#top" aria-label="Go to top">
          <span>E</span>
          <strong>Edward</strong>
        </a>
        <nav>
          {navItems.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} aria-label={label}>
              <Icon size={22} />
              <span>{label}</span>
            </a>
          ))}
        </nav>
        <div className="rail-socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitBranch size={18} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
        </div>
      </aside>

      <div className="stars" aria-hidden="true" />

      <section className="hero-screen section-screen" aria-labelledby="hero-title">
        <div className="code-tag top-tag">&lt;body&gt;</div>
        <div className="code-tag music-tag">&lt;ai/ml&gt;</div>

        <div className="hero-text">
          <p className="code-tag inline-tag">&lt;h1&gt;</p>
          <h1 id="hero-title">
            Hire <span>Edward</span>,<br />Fresher AI Engineer
          </h1>
          <p className="code-tag closing-tag">&lt;/h1&gt;</p>
          <p className="hero-subtitle">Python / Machine Learning / Data Analysis / FastAPI / MLOps basics</p>
          <a className="neon-button" href="#contact">Interview me</a>
        </div>

        <div className="hero-mark" aria-hidden="true">
          <span>E</span>
          <span>D</span>
        </div>

        <div className="code-tag bottom-tag">&lt;/body&gt;<br />&lt;/html&gt;</div>
      </section>

      <section className="about-screen section-screen" id="about" aria-labelledby="about-title">
        <div className="text-zone">
          <p className="code-tag">&lt;h2&gt;</p>
          <h2 id="about-title">About Me</h2>
          <p className="code-tag close-small">&lt;/h2&gt;</p>
          <p>
            I&apos;m {profile.name}, a Data Science graduate looking for Fresher/Junior roles in AI Engineering,
            Machine Learning, or Data Science. I work best where I can combine Python, data analysis, model experimentation,
            and clear documentation.
          </p>
          <p>
            For a team, I can help clean datasets, build baseline models, create notebooks that explain decisions,
            expose prototypes through APIs, and keep experiments reproducible enough for other engineers to review.
          </p>
        </div>

        <div className="glass-cube" aria-label="Profile highlights">
          <div><span>Python</span></div>
          <div><span>PyTorch</span></div>
          <div><span>FastAPI</span></div>
          <div><span>DVC</span></div>
        </div>
      </section>

      <section className="work-screen section-screen" id="work" aria-labelledby="work-title">
        <div className="work-intro">
          <p className="code-tag">&lt;h2&gt;</p>
          <h2 id="work-title">Projects</h2>
          <p className="code-tag close-small">&lt;/h2&gt;</p>
          <p>
            Public work selected for hiring signal: search/retrieval, explainable modeling, reproducible ML, and NLP classification.
          </p>
          <div className="filter-pills" aria-label="Project focus areas">
            <span>Applied AI</span>
            <span>Machine Learning</span>
            <span>MLOps</span>
            <span>NLP</span>
          </div>
        </div>

        <div className="project-stage">
          {selectedProjects.map((project) => (
            <article className="project-panel" key={project.title}>
              <div className="project-pill-row">
                <span>{project.language}</span>
                <span>Public repo</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul>
                {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
              <a href={project.href} target="_blank" rel="noreferrer">
                <Code2 size={18} /> Repository <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="stack-screen section-screen" id="stack" aria-labelledby="stack-title">
        <div className="text-zone compact">
          <p className="code-tag">&lt;h2&gt;</p>
          <h2 id="stack-title">Skills & Tools</h2>
          <p className="code-tag close-small">&lt;/h2&gt;</p>
          <p>Tools I can use on day one for data cleaning, ML baselines, API prototypes, experiment tracking, and readable reports.</p>
        </div>
        <div className="skill-orbit">
          {stack.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="contact-screen section-screen" id="contact" aria-labelledby="contact-title">
        <div className="text-zone contact-zone">
          <p className="code-tag">&lt;h2&gt;</p>
          <h2 id="contact-title">Contact Me</h2>
          <p className="code-tag close-small">&lt;/h2&gt;</p>
          <p>
            I&apos;m actively looking for Fresher/Junior AI Engineer, Machine Learning Engineer, Data Scientist,
            or Data Analyst opportunities. Email me for my CV, interview availability, or project walkthrough.
          </p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><GitBranch size={18} /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><ArrowUpRight size={18} /> LinkedIn</a>
            <a href={profile.huggingFace} target="_blank" rel="noreferrer"><ArrowUpRight size={18} /> Hugging Face</a>
          </div>
        </div>
      </section>
    </main>
  );
}

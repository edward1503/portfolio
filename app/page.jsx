import { ArrowUpRight, BrainCircuit, Code2, Database, GraduationCap, Mail, Rocket, Server, Sparkles } from 'lucide-react';
import { profile, projects, stack } from '@/lib/profile';

const nav = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Education', '#education']
];

const roles = ['AI Engineer', 'Machine Learning Engineer', 'Data Scientist', 'Data Analyst'];

const skillGroups = [
  {
    title: 'AI / ML',
    icon: BrainCircuit,
    items: ['Python', 'PyTorch', 'Scikit-learn', 'NLP', 'Explainable AI', 'Model Evaluation']
  },
  {
    title: 'Data',
    icon: Database,
    items: ['Pandas', 'Visualization', 'Analytics', 'PySpark', 'Databricks', 'Business Insights']
  },
  {
    title: 'Engineering',
    icon: Server,
    items: ['FastAPI', 'Docker', 'Git', 'DVC', 'AWS', 'GCP']
  }
];

const experience = [
  {
    title: 'Applied AI Project Builder',
    period: '2024 - 2026',
    body: 'Built public projects around retrieval/search, explainable modeling, NLP classification, analytics case studies, and reproducible ML workflows.'
  },
  {
    title: 'Data Science Graduate',
    period: 'UEH',
    body: 'Studied data science foundations and completed university projects in NLP, big data, business intelligence, AI algorithms, and high-performance computing.'
  }
];

const selectedProjects = projects.slice(0, 6);

export default function Home() {
  return (
    <main className="portfolio-shell">
      <header className="site-header">
        <a className="brand" href="#top">Edward<span>.</span></a>
        <nav aria-label="Primary navigation">
          {nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <a className="nav-cta" href={profile.github} target="_blank" rel="noreferrer">GitHub Profile</a>
      </header>

      <section className="hero-section" id="top" aria-labelledby="hero-title">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-copy">
          <p className="section-chip"><Sparkles size={16} /> Open to Fresher / Junior roles</p>
          <h1 id="hero-title">Hi, I am <span>{profile.alias}</span></h1>
          <div className="role-line">I am a <span>{roles.join(' / ')}</span></div>
          <p className="hero-desc">{profile.summary}</p>
          <div className="hero-actions">
            <a className="gradient-button" href={`mailto:${profile.email}`}>Interview Me</a>
            <a className="ghost-button" href="#projects">View Projects</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Profile image">
          <div className="profile-ring">
            <img src={profile.avatar} alt={`${profile.name} profile`} />
          </div>
          <div className="floating-card top-card"><Rocket size={18} /> AI prototypes</div>
          <div className="floating-card bottom-card"><Code2 size={18} /> Python + FastAPI</div>
        </div>
      </section>

      <section className="about-section section-block" id="about" aria-labelledby="about-title">
        <div className="section-heading">
          <h2 id="about-title">About</h2>
          <p>What I can bring to a team from day one.</p>
        </div>
        <div className="about-grid">
          <article>
            <strong>01</strong>
            <h3>ML foundations</h3>
            <p>I can prepare data, train baseline models, evaluate results, and explain model behavior in readable notebooks.</p>
          </article>
          <article>
            <strong>02</strong>
            <h3>AI product mindset</h3>
            <p>I like building small usable systems: search workflows, API prototypes, analytics automation, and clear demos.</p>
          </article>
          <article>
            <strong>03</strong>
            <h3>Engineering habits</h3>
            <p>I use Git, Docker, FastAPI, DVC, and documentation so other people can review and reproduce my work.</p>
          </article>
        </div>
      </section>

      <section className="skills-section section-block" id="skills" aria-labelledby="skills-title">
        <div className="section-heading centered">
          <h2 id="skills-title">Skills</h2>
          <p>Grouped by the jobs I am applying for.</p>
        </div>
        <div className="skills-grid">
          {skillGroups.map(({ title, icon: Icon, items }) => (
            <article className="skill-card" key={title}>
              <div className="skill-title"><Icon size={26} /><h3>{title}</h3></div>
              <div className="skill-tags">
                {items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section section-block" aria-labelledby="experience-title">
        <div className="section-heading">
          <h2 id="experience-title">Experience</h2>
          <p>Project-driven experience, shaped for a first AI/ML role.</p>
        </div>
        <div className="timeline-list">
          {experience.map((item) => (
            <article key={item.title}>
              <span>{item.period}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section section-block" id="projects" aria-labelledby="projects-title">
        <div className="section-heading centered">
          <h2 id="projects-title">Projects</h2>
          <p>Selected public work that supports AI Engineer / Data Scientist applications.</p>
        </div>
        <div className="project-filters" aria-label="Project categories">
          <span>All</span><span>Applied AI</span><span>Machine Learning</span><span>MLOps</span><span>NLP</span>
        </div>
        <div className="projects-grid">
          {selectedProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image" aria-hidden="true">
                <span>{project.title.slice(0, 2).toUpperCase()}</span>
              </div>
              <div className="project-tags">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <a href={project.href} target="_blank" rel="noreferrer">Repository <ArrowUpRight size={16} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="education-section section-block" id="education" aria-labelledby="education-title">
        <div className="section-heading centered">
          <h2 id="education-title">Education</h2>
          <p>Academic background supporting the AI/Data direction.</p>
        </div>
        <article className="education-card">
          <GraduationCap size={34} />
          <div>
            <h3>Data Science Graduate</h3>
            <p>University of Economics Ho Chi Minh City</p>
            <span>Focus: Machine Learning, NLP, Big Data, Business Intelligence, AI Algorithms</span>
          </div>
        </article>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">Ready to discuss a Fresher AI/ML role?</h2>
        <p>Email me for my CV, interview availability, or a walkthrough of the projects above.</p>
        <div>
          <a className="gradient-button" href={`mailto:${profile.email}`}><Mail size={18} /> Contact Edward</a>
          <a className="ghost-button" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>
    </main>
  );
}

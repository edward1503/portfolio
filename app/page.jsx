import { ExternalLink, GraduationCap, Mail, MapPin } from 'lucide-react';
import { profile, projects, stack } from '@/lib/profile';

const nav = [
  ['About', '#about'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['Education', '#education'],
  ['Contact', '#contact']
];

const updates = [
  ['2026', 'Open to Fresher / Junior opportunities in AI Engineering, Machine Learning, and Data Science.'],
  ['2025', 'Completed Data Science studies at the University of Economics Ho Chi Minh City (UEH).'],
  ['2024–26', 'Built public, project-driven work in retrieval, NLP, explainable AI, analytics, and reproducible ML.']
];

export default function Home() {
  return (
    <main className="academic-page">
      <aside className="profile-sidebar">
        <a href="#top" className="profile-photo">
          <img src={profile.avatar} alt={`Portrait of ${profile.name}`} />
        </a>
        <div className="identity">
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="location"><MapPin size={15} /> {profile.location}, Vietnam</p>
        </div>

        <nav className="sidebar-nav" aria-label="Primary navigation">
          {nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>

        <div className="social-links" aria-label="Profile links">
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={19} /></a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
        </div>
        <p className="sidebar-note">© {new Date().getFullYear()} {profile.name}</p>
      </aside>

      <div className="content-column" id="top">
        <header className="mobile-header">
          <a href="#top">{profile.alias}</a>
          <a href={`mailto:${profile.email}`}>Contact</a>
        </header>

        <section id="about" aria-labelledby="about-heading">
          <p className="eyebrow">About me</p>
          <h2 id="about-heading">Hello, I&apos;m {profile.alias}.</h2>
          <p className="lead">{profile.headline}</p>
          <p>{profile.summary}</p>
          <p>
            I enjoy turning messy data and research ideas into useful, understandable software—from model experiments and data analysis to small APIs and search workflows. I care about clear documentation, reproducible results, and building things people can actually use.
          </p>
          <dl className="details-list">
            <div><dt>Email</dt><dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd></div>
            <div><dt>Location</dt><dd>{profile.location}, Vietnam</dd></div>
            <div><dt>Profiles</dt><dd><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a> · <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> · <a href={profile.huggingFace} target="_blank" rel="noreferrer">Hugging Face</a></dd></div>
          </dl>
        </section>

        <section className="news-section" aria-labelledby="news-heading">
          <h2 id="news-heading">Latest updates</h2>
          <ul className="news-list">
            {updates.map(([date, text]) => <li key={date}><time>{date}</time><span>{text}</span></li>)}
          </ul>
        </section>

        <section id="projects" aria-labelledby="projects-heading">
          <h2 id="projects-heading">Selected projects</h2>
          <p className="section-intro">A selection of public work. More is available on my <a href={profile.github} target="_blank" rel="noreferrer">GitHub profile</a>.</p>
          <ol className="project-list">
            {projects.map((project, index) => (
              <li key={project.title}>
                <article>
                  <div className="project-title-row">
                    <h3>{project.title}</h3>
                    <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository`}><ExternalLink size={17} /></a>
                  </div>
                  <p>{project.summary}</p>
                  <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section id="skills" aria-labelledby="skills-heading">
          <h2 id="skills-heading">Technical skills</h2>
          <div className="skill-columns">
            <div><h3>Machine learning & AI</h3><p>Python, PyTorch, Scikit-learn, NLP, Explainable AI, model evaluation</p></div>
            <div><h3>Data & analytics</h3><p>Pandas, data visualization, PySpark, Databricks, business insights</p></div>
            <div><h3>Engineering</h3><p>FastAPI, Docker, Git, DVC, AWS, GCP</p></div>
          </div>
          <p className="stack-line">{stack.join(' · ')}</p>
        </section>

        <section id="education" aria-labelledby="education-heading">
          <h2 id="education-heading">Education</h2>
          <div className="education-entry">
            <GraduationCap size={25} aria-hidden="true" />
            <div><h3>Data Science Graduate</h3><p>University of Economics Ho Chi Minh City (UEH)</p><span>Focus: Machine Learning, NLP, Big Data, Business Intelligence, AI Algorithms</span></div>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-heading">
          <h2 id="contact-heading">Let&apos;s connect</h2>
          <p>I&apos;m available for Fresher / Junior AI, Machine Learning, and Data Science opportunities.</p>
          <a className="contact-link" href={`mailto:${profile.email}`}>Email me <Mail size={17} /></a>
        </section>
      </div>
    </main>
  );
}

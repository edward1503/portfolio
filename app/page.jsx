import { ExternalLink, GraduationCap, Mail, MapPin } from 'lucide-react';
import { experience, profile, projects, stack } from '@/lib/profile';
import ScrollEffects from '@/components/ScrollEffects';

const nav = [['About', '#about'], ['Experience', '#experience'], ['Projects', '#projects'], ['Research', '#research'], ['Education', '#education'], ['Contact', '#contact']];
const updates = [
  ['2026', 'Research Assistant / Lab Coach at VinUniversity Center of AI Research (CAIR).'],
  ['2026', 'Quantitative Researcher Intern at FINPROS.'],
  ['2025', 'Published research on stock-price prediction in ICDAM 2025 (Springer).']
];

export default function Home() {
  return <main className="academic-page">
    <aside className="profile-sidebar">
      <a href="#top" className="profile-photo"><img src={profile.avatar} alt={`Portrait of ${profile.name}`} /></a>
      <div className="identity"><h1>{profile.name}</h1><p className="role">{profile.role}</p><p className="location"><MapPin size={15} /> {profile.location}, Vietnam</p></div>
      <nav className="sidebar-nav" aria-label="Primary navigation">{nav.map(([label, href], index) => <a key={label} href={href} data-nav-target={href.slice(1)} className={index === 0 ? 'active' : ''}>{label}</a>)}</nav>
      <div className="social-links"><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={19} /></a><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">GH</a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a></div>
      <p className="sidebar-note">© {new Date().getFullYear()} {profile.name}</p>
    </aside>
    <div className="content-column" id="top"><ScrollEffects />
      <section id="about" className="reveal is-visible"><p className="eyebrow">About me</p><h2>Hello, I&apos;m {profile.alias}.</h2><p className="lead">{profile.headline}</p><p>{profile.summary}</p><dl className="details-list"><div><dt>Email</dt><dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd></div><div><dt>Location</dt><dd>{profile.location}, Vietnam</dd></div><div><dt>Profiles</dt><dd><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a> · <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> · <a href={profile.huggingFace} target="_blank" rel="noreferrer">Hugging Face</a></dd></div></dl></section>
      <section className="news-section reveal"><h2>Latest updates</h2><ul className="news-list">{updates.map(([date, text]) => <li key={text}><time>{date}</time><span>{text}</span></li>)}</ul></section>
      <section id="experience" className="reveal"><h2>Experience</h2><div className="experience-list">{experience.map(item => <article key={item.organization}><time>{item.period}</time><div><h3>{item.role}</h3><p className="organization">{item.organization}</p><p>{item.summary}</p></div></article>)}</div></section>
      <section id="projects" className="reveal"><h2>Selected projects</h2><p className="section-intro">Featured work from my current CV and research practice.</p><ol className="project-list">{projects.map(project => <li key={project.title}><article><div className="project-title-row"><h3>{project.title}</h3><a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><ExternalLink size={17} /></a></div><p>{project.summary}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article></li>)}</ol></section>
      <section id="research" className="reveal"><h2>Research</h2><div className="research-entry"><h3>ICDAM 2025 · Springer</h3><p><a href="https://doi.org/10.1007/978-3-032-03751-0_8" target="_blank" rel="noreferrer">Comparative Analysis of LSTM, Transformer-Based LSTM and Transformer-Based GRU for Stock Price Prediction</a></p><p>Led research design, model implementation, experimentation, and presentation for the Vietnam-market study.</p></div><div className="research-entry"><h3>Graduation thesis · 2025</h3><p><em>A performance insight for combining Loss functions in Deep Learning approach for Regression problem.</em></p><p>Introduced Hybrid-Log Loss and reported a 5–10% overall improvement across practical regression datasets.</p></div></section>
      <section id="skills" className="reveal"><h2>Technical skills</h2><div className="skill-columns"><div><h3>AI & research</h3><p>RAG, LLM, Agents, ReAct, LangChain, PyTorch, Scikit-learn, evaluation</p></div><div><h3>Engineering & ops</h3><p>FastAPI, Docker, AWS, DVC, GitHub Actions, Git</p></div></div><p className="stack-line">{stack.join(' · ')}</p></section>
      <section id="education" className="reveal"><h2>Education</h2><div className="education-entry"><GraduationCap size={25} /><div><h3>Bachelor of Science in Data Science</h3><p>University of Economics Ho Chi Minh City (UEH) · Sep 2022 — Apr 2026</p><span>GPA: 3.85/4.00 · AI in Action (VinUniversity) · AI VIETNAM Data Science & AI Cohort 2025</span></div></div></section>
      <section id="contact" className="contact-section reveal"><h2>Let&apos;s connect</h2><p>Open to research and AI engineering collaborations.</p><a className="contact-link" href={`mailto:${profile.email}`}>Email me <Mail size={17} /></a></section>
    </div>
  </main>;
}

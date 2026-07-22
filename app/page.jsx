import { Award, ExternalLink, GraduationCap, Mail, MapPin } from 'lucide-react';
import { experience, highlights, honors, profile, projects, stack } from '@/lib/profile';
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
      <section id="about" className="reveal is-visible"><p className="eyebrow">About me</p><h2>Hello, I&apos;m {profile.alias}.</h2><p className="lead">{profile.headline}</p><p>{profile.summary}</p><dl className="details-list"><div><dt>Focus</dt><dd>Retrieval systems · LLM applications · Adaptive learning</dd></div><div><dt>Email</dt><dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd></div><div><dt>Profiles</dt><dd><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a> · <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> · <a href={profile.huggingFace} target="_blank" rel="noreferrer">Hugging Face</a></dd></div></dl></section>
      <section className="highlights reveal" aria-label="Career highlights">{highlights.map(item => <div key={item.value}><strong>{item.value}</strong><span>{item.label}</span></div>)}</section>
      <section className="news-section reveal"><h2>Latest updates</h2><ul className="news-list">{updates.map(([date, text]) => <li key={text}><time>{date}</time><span>{text}</span></li>)}</ul></section>
      <section id="experience" className="reveal"><h2>Experience</h2><div className="experience-list">{experience.map(item => <article key={item.organization}><time>{item.period}</time><div><h3>{item.role}</h3><p className="organization">{item.organization}</p><p>{item.summary}</p></div></article>)}</div></section>
      <section id="projects" className="reveal"><h2>Selected projects</h2><p className="section-intro">Selected systems from my current CV. Each project links a research question to an implemented product or evaluation pipeline.</p><ol className="project-list">{projects.map(project => <li key={project.title}><article><div className="project-title-row"><h3>{project.title}</h3><a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><ExternalLink size={17} /></a></div><p>{project.summary}</p><ul className="outcomes">{project.outcomes.map(outcome => <li key={outcome}>{outcome}</li>)}</ul><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article></li>)}</ol></section>
      <section id="research" className="reveal"><h2>Research</h2><div className="research-entry"><p className="citation-label">Conference paper · ICDAM 2025 · Springer</p><h3><a href="https://doi.org/10.1007/978-3-032-03751-0_8" target="_blank" rel="noreferrer">Comparative Analysis of LSTM, Transformer-Based LSTM and Transformer-Based GRU for Stock Price Prediction</a></h3><p>Leader for ideation and research design; supervised model implementation and experimentation, and presented the published work. Published in <em>Proceedings of Data Analytics and Management</em>, Lecture Notes in Networks and Systems, vol. 1607.</p></div><div className="research-entry"><p className="citation-label">Graduation thesis · UEH · 2025</p><h3>A performance insight for combining loss functions in deep-learning regression</h3><p>Introduced Hybrid-Log Loss and evaluated it against conventional and blended loss functions, showing a 5–10% overall performance improvement across practical datasets.</p></div></section>
      <section id="skills" className="reveal"><h2>Technical skills</h2><div className="skill-columns"><div><h3>AI & research</h3><p>RAG, LLM, Agents, ReAct, LangChain, PyTorch, Scikit-learn, evaluation</p></div><div><h3>Engineering & ops</h3><p>FastAPI, Docker, AWS, DVC, GitHub Actions, Git</p></div></div><p className="stack-line">{stack.join(' · ')}</p></section>
      <section id="education" className="reveal"><h2>Education & recognition</h2><div className="education-entry"><GraduationCap size={25} /><div><h3>Bachelor of Science in Data Science</h3><p>University of Economics Ho Chi Minh City (UEH) · Sep 2022 — Apr 2026</p><span>GPA: 3.85/4.00 · AI in Action (VinUniversity) · AI VIETNAM Data Science & AI Cohort 2025</span></div></div><ul className="honors">{honors.map(honor => <li key={honor}><Award size={15} />{honor}</li>)}</ul></section>
      <section id="contact" className="contact-section reveal"><h2>Let&apos;s connect</h2><p>Open to research and AI engineering collaborations.</p><a className="contact-link" href={`mailto:${profile.email}`}>Email me <Mail size={17} /></a></section>
    </div>
  </main>;
}

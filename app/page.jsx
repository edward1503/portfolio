import { Award, ExternalLink, GraduationCap, Mail, MapPin, Sparkles, BookOpen, Briefcase, Code } from 'lucide-react';
import { experience, highlights, honors, profile, projects, stack } from '@/lib/profile';
import ScrollEffects from '@/components/ScrollEffects';

const nav = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Research', '#research'],
  ['Skills', '#skills'],
  ['Education', '#education'],
  ['Contact', '#contact']
];

const updates = [
  ['2026', 'Research Assistant / Lab Coach at VinUniversity Center of AI Research (CAIR).'],
  ['2026', 'Quantitative Researcher Intern at FINPROS.'],
  ['2025', 'Published research on stock-price prediction in ICDAM 2025 (Springer).']
];

export default function Home() {
  return (
    <main className="academic-page">
      {/* Sidebar Navigation */}
      <aside className="profile-sidebar">
        <div className="profile-photo-wrapper">
          <a href="#top" className="profile-photo" aria-label="Profile photo">
            <img src={profile.avatar} alt={`Portrait of ${profile.name}`} />
          </a>
        </div>

        <div className="status-pill">
          <span className="status-dot"></span>
          <span>Available for AI Research & Ops</span>
        </div>

        <div className="identity">
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="location">
            <MapPin size={14} /> {profile.location}, Vietnam
          </p>
        </div>

        <nav className="sidebar-nav" aria-label="Primary navigation">
          {nav.map(([label, href], index) => (
            <a
              key={label}
              href={href}
              data-nav-target={href.slice(1)}
              className={index === 0 ? 'active' : ''}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="social-links">
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            GH
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            IN
          </a>
          <a href={profile.huggingFace} target="_blank" rel="noreferrer" aria-label="HuggingFace">
            HF
          </a>
        </div>

        <p className="sidebar-note">© {new Date().getFullYear()} {profile.name}</p>
      </aside>

      {/* Main Content Area */}
      <div className="content-column" id="top">
        <ScrollEffects />

        {/* About Section */}
        <section id="about" className="reveal is-visible">
          <p className="eyebrow">
            <Sparkles size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: '-2px' }} />
            About me
          </p>
          <h2>Hello, I&apos;m {profile.alias}.</h2>
          <p className="lead">{profile.headline}</p>
          <p>{profile.summary}</p>
          
          <dl className="details-list">
            <div>
              <dt>Focus</dt>
              <dd>Retrieval Systems · LLM Applications · Adaptive Learning · Quant Alpha</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </dd>
            </div>
            <div>
              <dt>Profiles</dt>
              <dd>
                <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a> ·{' '}
                <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> ·{' '}
                <a href={profile.huggingFace} target="_blank" rel="noreferrer">Hugging Face</a>
              </dd>
            </div>
          </dl>
        </section>

        {/* Highlights Section */}
        <section className="highlights reveal" aria-label="Career highlights">
          {highlights.map((item) => (
            <div key={item.value} className="highlight-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        {/* Latest Updates Section */}
        <section className="news-section reveal">
          <h2>Latest updates</h2>
          <ul className="news-list">
            {updates.map(([date, text]) => (
              <li key={text} className="timeline-item">
                <span className="timeline-date">{date}</span>
                <div className="timeline-content">
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Experience Section */}
        <section id="experience" className="reveal">
          <h2>
            <Briefcase size={22} style={{ display: 'inline', marginRight: '8px', verticalAlign: '-3px' }} />
            Experience
          </h2>
          <div className="experience-list">
            {experience.map((item) => (
              <article key={item.organization} className="timeline-item">
                <span className="timeline-date">{item.period}</span>
                <div className="timeline-content">
                  <h3>{item.role}</h3>
                  <p className="organization">{item.organization}</p>
                  <p>{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="reveal">
          <h2>
            <Code size={22} style={{ display: 'inline', marginRight: '8px', verticalAlign: '-3px' }} />
            Selected Projects
          </h2>
          <p className="section-intro">
            Selected systems from my current CV. Each project bridges theoretical research questions with practical, high-throughput production products.
          </p>
          <ul className="project-list">
            {projects.map((project) => (
              <li key={project.title}>
                <article className="project-card">
                  <div className="project-title-row">
                    <h3>{project.title}</h3>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link-btn"
                      aria-label={`Open ${project.title}`}
                    >
                      <span>Explore</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                  <p>{project.summary}</p>
                  <ul className="outcomes">
                    {project.outcomes.map((outcome) => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ul>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>

        {/* Research Section */}
        <section id="research" className="reveal">
          <h2>
            <BookOpen size={22} style={{ display: 'inline', marginRight: '8px', verticalAlign: '-3px' }} />
            Research & Publications
          </h2>
          <div className="research-entry">
            <span className="citation-badge">Conference Paper · ICDAM 2025 · Springer</span>
            <h3>
              <a href="https://doi.org/10.1007/978-3-032-03751-0_8" target="_blank" rel="noreferrer">
                Comparative Analysis of LSTM, Transformer-Based LSTM and Transformer-Based GRU for Stock Price Prediction
              </a>
            </h3>
            <p>
              Lead researcher for ideation, supervision, and model architecture design; published in <em>Proceedings of Data Analytics and Management</em>, Lecture Notes in Networks and Systems, vol. 1607.
            </p>
          </div>

          <div className="research-entry">
            <span className="citation-badge">Graduation Thesis · UEH · 2025</span>
            <h3>A performance insight for combining loss functions in deep-learning regression</h3>
            <p>
              Introduced Hybrid-Log Loss and evaluated it against conventional and blended loss functions, achieving 5–10% performance improvement across practical datasets.
            </p>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="reveal">
          <h2>Technical Skills</h2>
          <div className="skill-columns">
            <div className="skill-card">
              <h3>AI & Research</h3>
              <p>RAG, LLM Agents, ReAct, LangChain, PyTorch, Scikit-learn, System Evaluation</p>
            </div>
            <div className="skill-card">
              <h3>Engineering & Ops</h3>
              <p>FastAPI, Docker, AWS, DVC, GitHub Actions, Redis, Git, Linux</p>
            </div>
          </div>
          <div className="stack-line">{stack.join(' · ')}</div>
        </section>

        {/* Education & Honors Section */}
        <section id="education" className="reveal">
          <h2>Education & Recognition</h2>
          <div className="education-entry">
            <GraduationCap size={28} />
            <div>
              <h3>Bachelor of Science in Data Science</h3>
              <p>University of Economics Ho Chi Minh City (UEH) · Sep 2022 — Apr 2026</p>
              <span style={{ color: 'var(--accent-cyan)', fontWeight: '600' }}>
                GPA: 3.85/4.00 · AI in Action (VinUniversity) · AI VIETNAM Cohort 2025
              </span>
            </div>
          </div>
          
          <ul className="honors">
            {honors.map((honor) => (
              <li key={honor}>
                <Award size={16} />
                <span>{honor}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section reveal">
          <div className="contact-card">
            <h2>Let&apos;s build something intelligent.</h2>
            <p>Open for AI Research, LLM/RAG Engineering, and Quant System collaborations.</p>
            <a className="contact-btn" href={`mailto:${profile.email}`}>
              <span>Email me directly</span>
              <Mail size={18} />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}


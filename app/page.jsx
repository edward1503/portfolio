import { ArrowDown, ArrowUpRight } from "lucide-react";
import { experience, honors, profile, projects } from "@/lib/profile";

const navigation = [
  ["Work", "#projects"],
  ["Research", "#research"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

function OutboundLink({ href, children, className = "" }) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}

function SectionHeading({ id, number, title, note }) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow section-number">{number}</span>
        <h2 id={id}>{title}</h2>
      </div>
      {note && <p>{note}</p>}
    </div>
  );
}

function LearningVisual() {
  return (
    <div className="project-visual learning-visual" aria-hidden="true">
      <div className="visual-topline">
        <span>VLEARN</span>
        <span>ADAPTIVE LEARNING</span>
      </div>
      <div className="learning-path">
        <div className="path-step">
          <span className="path-dot complete">✓</span>
          <span>Assess</span>
        </div>
        <span className="path-connector" />
        <div className="path-step">
          <span className="path-dot current">
            <span />
          </span>
          <span>Learn</span>
        </div>
        <span className="path-connector future" />
        <div className="path-step">
          <span className="path-dot next">↗</span>
          <span>Adapt</span>
        </div>
      </div>
      <div className="visual-bottomline">
        <span>A path that learns with you.</span>
        <span>01 / SYSTEM OVERVIEW</span>
      </div>
    </div>
  );
}

function RetrievalVisual() {
  return (
    <div className="project-visual retrieval-visual" aria-hidden="true">
      <div className="visual-topline">
        <span>HOTPOTQA</span>
        <span>MULTI-HOP RETRIEVAL</span>
      </div>
      <div className="retrieval-flow">
        <div className="retrieval-inputs">
          <span>BM25</span>
          <span>Dense</span>
        </div>
        <span className="flow-arrow">→</span>
        <span className="fusion-node">RRF</span>
        <span className="flow-arrow">→</span>
        <div className="evidence-stack">
          <span />
          <span />
          <span>Evidence</span>
        </div>
      </div>
      <div className="visual-bottomline">
        <span>Find the evidence. Connect the dots.</span>
        <span>02 / SYSTEM OVERVIEW</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header shell">
        <a className="wordmark" href="#top" aria-label="Edward, back to top">
          <span className="monogram">e.</span>
          <span>
            Edward<span className="wordmark-dot"> / </span>
            <span className="wordmark-role">AI researcher & engineer</span>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          {navigation.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main id="main" className="shell" tabIndex={-1}>
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="status-dot" /> Open to research & engineering
              collaborations
            </p>
            <h1 id="hero-title">
              Research,{" "}
              <br />
              made <em>useful.</em>
            </h1>
            <p className="hero-intro">
              I’m <strong>{profile.name}</strong>, also known as Edward.
              <br className="desktop-break" /> I build AI systems that turn
              research into something people can use.
            </p>
            <p className="hero-focus">
              Retrieval systems · LLM applications · Adaptive learning
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowDown size={16} aria-hidden="true" />
              </a>
              <a className="quiet-link" href={`mailto:${profile.email}`}>
                Get in touch <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
          <aside className="hero-profile" aria-label="About Edward">
            <div className="portrait-frame">
              <img
                src={profile.avatar}
                alt={`Portrait of ${profile.name}`}
                width="280"
                height="310"
                fetchPriority="high"
              />
            </div>
            <div className="portrait-caption">
              <span>{profile.location}, Vietnam</span>
              <span>BASED IN VIETNAM</span>
            </div>
            <div className="current-role">
              <span className="eyebrow">Currently</span>
              <p>Research Assistant / Lab Coach</p>
              <span>VinUniversity · CAIR</span>
            </div>
          </aside>
        </section>

        <section
          id="projects"
          className="section work-section"
          aria-labelledby="work-heading"
        >
          <div className="section-heading">
            <div>
              <span className="eyebrow section-number">01 / SELECTED WORK</span>
              <h2 id="work-heading">From ideas to working systems.</h2>
            </div>
            <OutboundLink href={profile.github} className="quiet-link">
              More on GitHub
            </OutboundLink>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article key={project.title} className="project-card">
                {project.visual === "learning" ? <LearningVisual /> : <RetrievalVisual />}
                <div className="project-content">
                  <div className="project-kicker">
                    <span>{project.category}</span>
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-summary">{project.summary}</p>
                  <div className="project-evidence">
                    <strong>{project.evidence.title}</strong>
                    <span>{project.evidence.detail}</span>
                  </div>
                  <details className="project-details">
                    <summary aria-label={`Technical details for ${project.name}`}>
                      Technical details <span aria-hidden="true">+</span>
                    </summary>
                    <ul>
                      {project.outcomes.map((outcome) => (
                        <li key={outcome}>{outcome}</li>
                      ))}
                    </ul>
                    <p className="project-stack">{project.tags.join(" · ")}</p>
                  </details>
                  <OutboundLink href={project.href} className="project-link">
                    {project.linkLabel}
                  </OutboundLink>
                  {project.evidence.href && (
                    <OutboundLink href={project.evidence.href} className="evidence-link">
                      View evaluation evidence
                    </OutboundLink>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience-section" aria-labelledby="experience-heading">
          <SectionHeading
            id="experience-heading"
            number="02 / EXPERIENCE"
            title="Research meets practice."
          />
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-row" key={item.organization}>
                <p className="period">{item.period}</p>
                <div>
                  <h3>{item.role}</h3>
                  <p className="organization">{item.organization}</p>
                </div>
                <p className="experience-description">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="research" className="section research-section" aria-labelledby="research-heading">
          <SectionHeading
            id="research-heading"
            number="03 / RESEARCH"
            title="Questions worth exploring."
            note="Selected publication and thesis work."
          />
          <article className="research-row">
            <div className="research-meta">
              <span className="eyebrow">Conference paper</span>
              <span>ICDAM 2025 · Springer</span>
            </div>
            <div>
              <h3>
                <OutboundLink href="https://doi.org/10.1007/978-3-032-03751-0_8">
                  Comparative Analysis of LSTM, Transformer-Based LSTM and
                  Transformer-Based GRU for Stock Price Prediction: An
                  Implementation in Vietnam Market
                </OutboundLink>
              </h3>
              <p>
                Co-authored research published in{" "}
                <em>Proceedings of Data Analytics and Management</em>, Lecture
                Notes in Networks and Systems, vol. 1607.
              </p>
            </div>
          </article>
          <article className="research-row">
            <div className="research-meta">
              <span className="eyebrow">Graduation thesis</span>
              <span>UEH · 2025</span>
            </div>
            <div>
              <h3>
                A performance insight for combining loss functions in
                deep-learning regression
              </h3>
              <p>
                Introduced Hybrid-Log Loss and evaluated it against conventional
                and blended loss functions across practical datasets.
              </p>
            </div>
          </article>
        </section>

        <section id="about" className="section about-section" aria-labelledby="about-heading">
          <SectionHeading
            id="about-heading"
            number="04 / A LITTLE CONTEXT"
            title="Curious by nature. Practical by approach."
          />
          <div className="about-grid">
            <div className="about-copy">
              <p>{profile.summary}</p>
              <div id="skills" className="skill-groups">
                <div>
                  <h3>AI & research</h3>
                  <p>
                    Python, RAG, LLM agents, ReAct, LangChain, PyTorch,
                    Scikit-learn, system evaluation
                  </p>
                </div>
                <div>
                  <h3>Engineering & operations</h3>
                  <p>
                    FastAPI, Docker, AWS, DVC, GitHub Actions, Redis, Git, Linux
                  </p>
                </div>
              </div>
            </div>
            <div id="education" className="education">
              <p className="eyebrow">Education & recognition</p>
              <h3>B.Sc. in Data Science</h3>
              <p>University of Economics Ho Chi Minh City (UEH)</p>
              <div className="education-detail">
                <span>Sep 2022 — Apr 2026</span>
                <strong>GPA 3.85 / 4.00</strong>
              </div>
              <p className="additional-learning">
                AI in Action (VinUniversity)
                <br />
                AI VIETNAM Cohort 2025
              </p>
              <ul className="honors">
                {honors.map((honor) => (
                  <li key={honor}>{honor}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-heading"
        >
          <div>
            <p className="eyebrow">
              <span className="status-dot" /> LET’S CONNECT
            </p>
            <h2 id="contact-heading">
              Have a good problem{" "}
              <br />
              in <em>mind?</em>
            </h2>
            <p>
              Open to AI research, LLM/RAG engineering,
              <br className="desktop-break" /> and quantitative systems
              collaborations.
            </p>
          </div>
          <div className="contact-actions">
            <a className="contact-email" href={`mailto:${profile.email}`}>
              Let’s talk <ArrowUpRight size={32} aria-hidden="true" />
            </a>
            <a className="email-address" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <div className="social-links">
              <OutboundLink href={profile.github}>GitHub</OutboundLink>
              <OutboundLink href={profile.linkedin}>LinkedIn</OutboundLink>
              <OutboundLink href={profile.huggingFace}>
                Hugging Face
              </OutboundLink>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer shell">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <span>Thoughtfully built. Always learning.</span>
        <a href="#top">
          Back to top <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </footer>
    </>
  );
}

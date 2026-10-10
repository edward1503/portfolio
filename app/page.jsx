import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Mail, Sparkles, Fingerprint, ChartNoAxesCombined, GitBranch } from "lucide-react";
import Header from "@/components/Header";
import ProjectPreview from "@/components/ProjectPreview";
import { profile, projects, featuredProjects, additionalProjects, education, experience, honors, skillGroups, assetPath } from "@/lib/profile";

const dimensions = { "vlearn-interface.png": [1440, 900], "retrieval-benchmark.png": [1798, 1043], "retrieval-console.png": [1366, 768], "air-quality-architecture.png": [2585, 961] };
const explorations = [projects[2], ...additionalProjects];
const explorationIcons = [GitBranch, Fingerprint, ChartNoAxesCombined];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="hero-shell">
        <Header homeHref={assetPath("")} />
        <main id="main">
          <section className="hero container" aria-labelledby="hero-title">
            <div className="hero-topline"><span><i className="status-dot" /> AI researcher & engineer</span><span>Based in Vietnam ↗</span></div>
            <div className="hero-grid">
              <div className="hero-copy">
                <p className="hero-greeting">Hi, I’m Nguyễn Đôn Đức.</p>
                <h1 id="hero-title">Curious mind.<br />Useful <span>AI.</span></h1>
                <p className="hero-description">I connect research with engineering to turn ambitious ideas into things people can use.</p>
                <a className="button cobalt-button" href="#projects">Explore my work <ArrowDown size={19} /></a>
              </div>
              <div className="portrait-stage">
                <div className="portrait-orbit" aria-hidden="true" />
                <div className="portrait-frame"><img src={profile.avatar} alt="Nguyễn Đôn Đức, also known as Edward" width="460" height="460" fetchPriority="high" /></div>
                <span className="portrait-sticker"><Sparkles size={19} /> Research meets real life.</span>
                <div className="portrait-caption"><span>Currently</span><strong>Research Assistant @ CAIR<br />M.Sc. Computer Science @ VinUniversity</strong></div>
              </div>
            </div>
            <div className="hero-signature" aria-hidden="true">EDWARD<span>↗</span></div>
            <div className="hero-bottom"><span>Retrieval · AI products · Data systems</span><a href="#projects">SCROLL TO EXPLORE <ArrowDown size={15} /></a></div>
          </section>
          <section id="projects" className="work-section" aria-labelledby="work-heading">
            <div className="container">
              <div className="section-heading"><div><p className="section-index">01 / SELECTED WORK</p><h2 id="work-heading">Built with curiosity.<br /><span>Backed by work.</span></h2></div><p>A closer look at the products,<br className="desktop-break" /> experiments, and systems I build.</p></div>
              <div className="work-grid">
                {featuredProjects.map((project, index) => (
                  <article className={"work-card work-card-" + project.slug + " theme-" + project.theme} key={project.slug}>
                    <div className="work-card-heading"><span className="project-number">0{index + 1}</span><span className="project-category">{project.category}</span><Link className="round-link" href={"/work/" + project.slug + "/"} aria-label={"Read " + project.name + " case study"}><ArrowUpRight size={25} /></Link></div>
                    <div className="work-card-copy"><Link href={"/work/" + project.slug + "/"}><h3>{project.featureTitle}</h3></Link><p>{project.summary}</p></div>
                    <ProjectPreview name={project.name} caption={project.previewLabel} wide={project.slug === "air-quality"} previews={project.previews.map((preview) => ({ ...preview, src: assetPath("projects/" + preview.src), width: dimensions[preview.src][0], height: dimensions[preview.src][1] }))} />
                    <div className="work-card-footer"><span>{project.slug === "hotpotqa" ? "60.08% full-support Recall@10 · test run" : project.slug === "vlearn" ? "Team project / Full-stack & DevOps lead" : "AWS / Quality-gated ETL"}</span><Link href={"/work/" + project.slug + "/"}>Case study <ArrowRight size={17} /></Link></div>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <section className="explorations-section" aria-labelledby="explorations-heading">
            <div className="container">
              <div className="section-heading compact-heading"><div><p className="section-index">02 / MORE EXPLORATIONS</p><h2 id="explorations-heading">Always asking “what if?”</h2></div><a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">All projects on GitHub <ArrowUpRight size={18} /></a></div>
              <div className="exploration-grid">
                {explorations.map((project, index) => { const Icon = explorationIcons[index]; return (
                  <a className="exploration-card" key={project.name} href={project.href} target="_blank" rel="noopener noreferrer">
                    <div className="exploration-top"><span className="exploration-icon"><Icon size={28} strokeWidth={1.5} /></span><ArrowUpRight size={23} /></div>
                    <p className="eyebrow">{project.category}</p><h3>{project.name}</h3><p>{project.summary}</p><div className="tag-list">{project.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </a>
                ); })}
              </div>
            </div>
          </section>
          <section id="about" className="about-section container" aria-labelledby="about-heading">
            <div className="about-heading"><p className="section-index">03 / A LITTLE ABOUT ME</p><h2 id="about-heading">Researcher by curiosity.<br />Engineer by practice.</h2></div>
            <div className="about-grid">
              <div className="about-copy"><p className="large-copy">I’m Edward — an AI researcher and engineer who enjoys the space between a promising idea and a useful system.</p><p>{profile.summary}</p><p>Today, I’m a Research Assistant at VinUniversity’s Center for AI Research and an M.Sc. Computer Science student. My background in data science keeps me grounded in experiments, evidence, and the questions behind the numbers.</p><a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">More about me on LinkedIn <ArrowUpRight size={18} /></a></div>
              <div className="about-toolbox"><p className="eyebrow">MY TOOLBOX</p>{skillGroups.map((group) => <div className="toolbox-group" key={group.title}><h3>{group.title}</h3><div className="tag-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}<p className="toolbox-note">Start with the problem. Choose the tools that fit.</p></div>
            </div>
          </section>
          <section id="experience" className="experience-section container" aria-labelledby="experience-heading">
            <div className="section-heading compact-heading"><div><p className="section-index">04 / THE JOURNEY</p><h2 id="experience-heading">Learning. Building. Growing.</h2></div></div>
            <div className="journey-grid"><div><h3 className="column-label">Experience</h3>{experience.map((item) => <article className="journey-item" key={item.role}><span className="journey-period">{item.period}</span><h4>{item.role}</h4><p className="journey-organization">{item.shortOrganization || item.organization}</p><p>{item.summary}</p></article>)}</div><div><h3 className="column-label">Education</h3>{education.map((item) => <article className="education-item" key={item.degree}><span className="journey-period">{item.period}</span><h4>{item.degree}</h4><p>{item.institution}</p>{item.detail && <span className="education-detail">{item.detail}</span>}</article>)}</div></div>
            <div className="recognition-strip">{honors.map((item) => <span key={item}>{item}</span>)}</div>
          </section>
          <section className="research-section container" aria-labelledby="research-heading">
            <p className="section-index">05 / RESEARCH NOTES</p><div className="research-grid"><div><h2 id="research-heading">Ideas worth<br />looking closer at.</h2><p>Questions about models, markets,<br className="desktop-break" /> and what the evidence actually says.</p></div><div>
              <a className="research-item" href="https://doi.org/10.1007/978-3-032-03751-0_8" target="_blank" rel="noopener noreferrer"><div className="research-meta"><span>PUBLICATION / ICDAM 2025</span><ArrowUpRight size={22} /></div><h3>Comparative Analysis of LSTM, Transformer-Based LSTM and Transformer-Based GRU for Stock Price Prediction: An Implementation in Vietnam Market</h3><p>Led the research design, supervised implementation and experiments, and presented the work at ICDAM 2025. Published by Springer.</p></a>
              <article className="research-item"><div className="research-meta"><span>UNDERGRADUATE THESIS / 2025</span></div><h3>Hybrid-Log Loss for deep-learning regression</h3><p>Explored a combined loss formulation using characteristics of L₁ and L₂ losses, with comparison against conventional and blended losses on regression datasets.</p></article>
            </div></div>
          </section>
          <section id="contact" className="contact-section" aria-labelledby="contact-heading">
            <div className="container"><div className="contact-top"><span className="section-index">HAVE A QUESTION OR AN IDEA?</span><span>Let’s make something useful.</span></div><a className="contact-title" href={"mailto:" + profile.email}><h2 id="contact-heading">Let’s talk.</h2><span className="contact-arrow"><ArrowUpRight strokeWidth={1.2} /></span></a><div className="contact-bottom"><a className="email-link" href={"mailto:" + profile.email}><Mail size={20} />{profile.email}</a><div className="social-links"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub<ArrowUpRight size={15} /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<ArrowUpRight size={15} /></a><a href={profile.huggingFace} target="_blank" rel="noopener noreferrer">Hugging Face<ArrowUpRight size={15} /></a></div></div><footer className="site-footer"><span>© 2026 Nguyễn Đôn Đức / Edward</span><span>Research. Build. Refine.</span><a href="#main">Back to top ↑</a></footer></div>
          </section>
        </main>
      </div>
    </>
  );
}

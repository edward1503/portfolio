import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import ProjectPreview from "@/components/ProjectPreview";
import { featuredProjects, assetPath, profile } from "@/lib/profile";

const dimensions = {
  "vlearn-interface.png": [1440, 900],
  "retrieval-benchmark.png": [1798, 1043],
  "retrieval-console.png": [1366, 768],
  "air-quality-architecture.png": [2585, 961],
};

export function generateStaticParams() {
  return featuredProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = featuredProjects.find((item) => item.slug === slug);
  if (!project) return {};
  const url = `https://edward1503.github.io/portfolio/work/${slug}/`;
  return {
    title: `${project.name} — Edward`,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: { title: `${project.name} — Edward`, description: project.summary, url, images: [{ url: `https://edward1503.github.io/portfolio/projects/${project.previews[0].src}`, alt: project.previews[0].alt }] },
  };
}

export default async function CaseStudy({ params }) {
  const { slug } = await params;
  const project = featuredProjects.find((item) => item.slug === slug);
  if (!project) notFound();
  const next = featuredProjects[(featuredProjects.indexOf(project) + 1) % featuredProjects.length];
  const previews = project.previews.map((preview) => ({ ...preview, src: assetPath(`projects/${preview.src}`), width: dimensions[preview.src][0], height: dimensions[preview.src][1] }));
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header caseStudy homeHref={assetPath("")} />
      <main id="main" className={`case-page theme-${project.theme}`}>
        <section className="case-intro container">
          <a href={assetPath("") + "#projects"} className="back-link"><ArrowLeft size={17} /> Selected work</a>
          <p className="eyebrow">{project.category} / Case study</p>
          <h1>{project.featureTitle}</h1>
          <div className="case-intro-bottom"><p>{project.summary}</p><a className="button dark-button" href={project.href} target="_blank" rel="noopener noreferrer">View source <ArrowUpRight size={19} /></a></div>
          <div className="case-facts"><div><span>Project</span><strong>{project.name}</strong></div><div><span>Contribution</span><strong>{project.role || "Research & engineering"}</strong></div><div><span>Stack</span><strong>{project.tags.slice(0, 4).join(" / ")}</strong></div></div>
        </section>
        <div className="case-hero-preview container"><ProjectPreview name={project.name} previews={previews} caption={project.previewLabel} wide={slug === "air-quality"} /></div>
        <section className="case-story container" aria-labelledby="challenge-heading">
          <div className="story-label"><span className="section-index">01 / THE PROBLEM</span><h2 id="challenge-heading">A question worth solving.</h2></div><p>{project.challenge}</p>
        </section>
        <section className="case-story container" aria-labelledby="approach-heading">
          <div className="story-label"><span className="section-index">02 / THE APPROACH</span><h2 id="approach-heading">How it comes together.</h2></div><div><p>{project.approach}</p><ul className="case-outcomes">{project.outcomes.slice(0, 2).map((item) => <li key={item}>{item}</li>)}</ul></div>
        </section>
        <section className="case-story container" aria-labelledby="contribution-heading">
          <div className="story-label"><span className="section-index">03 / MY CONTRIBUTION</span><h2 id="contribution-heading">From idea to implementation.</h2></div><p>{project.contribution}</p>
        </section>
        <section className="case-result container" aria-labelledby="result-heading">
          <span className="section-index">04 / THE TAKEAWAY</span><h2 id="result-heading">{project.result || (slug === "vlearn" ? "Built around the learner." : "Quality before quantity.")}</h2>
          {project.resultLabel && <p className="result-label">{project.resultLabel}</p>}
          <p>{project.takeaway}</p>
          {project.resultHref && <a className="text-link" href={project.resultHref} target="_blank" rel="noopener noreferrer">Inspect the benchmark result <ArrowUpRight size={18} /></a>}
          {slug === "hotpotqa" && <p className="artifact-note">The console screenshot uses a separate nano corpus configuration. The benchmark chart reports the full test run; these are different evaluation contexts.</p>}
          {slug === "vlearn" && <p className="artifact-note">Interface captured from a later local development version of VLearn. The linked public repository documents the earlier team project.</p>}
          {slug === "air-quality" && <p className="artifact-note">Preview: the project’s original architecture diagram. It illustrates the pipeline design; the repository contains the implementation.</p>}
        </section>
        <Link className="next-project container" href={`/work/${next.slug}/`}><span><small>UP NEXT</small><strong>{next.name}</strong></span><ArrowRight size={44} /></Link>
      </main>
      <footer className="case-footer container"><Link href="/">edward®</Link><a href={`mailto:${profile.email}`}>Let’s talk <ArrowUpRight size={18} /></a><span>Research. Build. Refine.</span></footer>
    </>
  );
}

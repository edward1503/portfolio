export const profile = {
  name: "Nguyễn Đôn Đức",
  alias: "Edward",
  role: "AI Researcher | AI Engineer",
  location: "Ho Chi Minh City",
  email: "nguyendonduc1503@gmail.com",
  avatar: `${process.env.GITHUB_PAGES === "true" ? "/portfolio" : ""}/portrait.jpg`,
  github: "https://github.com/edward1503",
  linkedin: "https://linkedin.com/in/edward1503",
  huggingFace: "https://huggingface.co/edward1503",
  headline:
    "AI researcher and engineer building useful systems from data, models, and research ideas.",
  summary:
    "I work across retrieval, LLM applications, adaptive learning, and quantitative research. My focus is taking an idea from experiment to a dependable system people can use.",
};

export const projects = [
  {
    title: "VLearn — Adaptive Learning Platform",
    slug: "vlearn",
    theme: "blue",
    featureTitle: "A better way to learn AI.",
    previewLabel: "Product interface · development preview",
    previews: [{ src: "vlearn-interface.png", label: "Tutor interface", alt: "VLearn development interface with a Socratic tutor conversation and personalized learning features" }],
    challenge: "Learning AI takes more than a library of videos. Learners need guidance, feedback, and a path that responds to what they already know.",
    approach: "VLearn brings personalized learning paths, RAG tutoring, Socratic questioning, and progress tracking into one learning experience for the AI20K program.",
    contribution: "As Full-stack & DevOps lead on the team, I contributed the frontend experience, learner and admin interfaces, backend foundations, Redis authentication, and deployment and observability configuration.",
    takeaway: "Turning AI capabilities into a useful product means connecting the learning experience, backend systems, and operational visibility.",
    name: "VLearn",
    subtitle: "An adaptive learning platform for AI20K",
    category: "Adaptive learning",
    role: "Team project · Full-stack & DevOps lead",
    href: "https://github.com/edward1503/vlearn-adaptive",
    summary:
      "Team-built adaptive learning platform for the AI20K practical-AI program, with personalized paths, RAG tutoring, and progress tracking.",
    outcomes: [
      "Contributed frontend UI/UX, learner and admin interfaces, backend foundations, and Redis authentication as the team's Full-stack & DevOps lead.",
      "The platform combines personalized learning paths, knowledge-component mapping, RAG tutoring, and learner progress tracking.",
      "Repository includes AWS ECS/Fargate and Terraform deployment configuration, GitHub Actions, and Prometheus/Grafana/Loki observability.",
    ],
    tags: ["FastAPI", "PostgreSQL", "Redis", "LangGraph", "Qwen", "vLLM"],
  },
  {
    title: "Full-Corpus Multi-Hop Retrieval for HotpotQA",
    slug: "hotpotqa",
    theme: "violet",
    featureTitle: "Finding both halves of the answer.",
    previewLabel: "Repository benchmark · 7,405 test queries",
    previews: [
      { src: "retrieval-benchmark.png", label: "Benchmark", alt: "Repository benchmark chart comparing 51.75 percent baseline with 60.08 percent bridge-aware full-support Recall at 10 on 7,405 HotpotQA test queries" },
      { src: "retrieval-console.png", label: "Search console", caption: "Search console · nano corpus configuration", alt: "HotpotQA retrieval console screenshot showing a nano corpus configuration and retrieval dataflow" },
    ],
    challenge: "Multi-hop questions need evidence from more than one document. Retrieving a single relevant passage is not enough when the answer depends on a complete evidence chain.",
    approach: "Combined Elasticsearch BM25, BGE-small embeddings, TurboVec dense search, and Reciprocal Rank Fusion. Bridge-aware retrieval adds title and entity expansion to connect supporting documents.",
    contribution: "Built indexing, embedding, benchmarking, API serving, caching, and dashboard inspection into a single research pipeline over a 5.23M-document corpus.",
    takeaway: "On 7,405 beir/hotpotqa/test queries, full-support Recall@10 increased from 51.75% to 60.08%. The quality gain has a latency cost: p95 rose from 0.76s to 1.60s in the reported runs.",
    result: "60.08%",
    resultLabel: "Full-support Recall@10 · 7,405 test queries",
    resultHref: "https://github.com/edward1503/vdt-meeting-search/blob/a207b9dc2fa490293aea10e7a9893fa3c788d647/evaluation/results/hotpotqa_full/test_full/tv_bridge_title_entities_rrf_beam1_terms6_test_full.json",
    name: "Full-corpus retrieval",
    subtitle: "Multi-hop evidence retrieval for HotpotQA",
    category: "Information retrieval",
    href: "https://github.com/edward1503/vdt-meeting-search",
    summary:
      "Hybrid retrieval system over 5.23M documents for finding supporting evidence in multi-hop questions.",
    outcomes: [
      "Combined Elasticsearch BM25, BGE-small embeddings, a 4-bit TurboVec index, and Reciprocal Rank Fusion.",
      "Built indexing, embeddings, benchmarking, API serving, caching, and dashboard inspection into one pipeline.",
      "Raised full-support Recall@10 from 51.75% to 60.08% on 7,405 test queries, with p95 latency increasing from 0.76s to 1.60s.",
    ],
    tags: [
      "Elasticsearch",
      "TurboVec",
      "BGE-small",
      "FastAPI",
      "React",
      "Redis",
    ],
  },
  {
    title: "Vietnamese Legal Agentic RAG",
    name: "Vietnamese Legal RAG",
    subtitle: "Retrieval that follows the question",
    category: "Agentic RAG",
    href: "https://github.com/edward1503/Data-Science-AI-Engineering-Personal-Projects/tree/main/Agentic%20RAG%20in%20Vietnamese%20Law%20Documents",
    summary:
      "A legal-document question-answering system that routes factual, temporal, and multi-hop queries to different retrieval tools.",
    outcomes: [
      "Orchestrated ingestion and legal-QA agents with Deep Agents and LangGraph, using ChromaDB and BM25 indexes.",
      "Added graph traversal for amendment and reference chains, metadata filters for temporal queries, and CrossEncoder reranking.",
      "Implemented cited-answer generation, retrieval retries, a FastAPI service, a Gradio interface, and comparison tooling for recall, nDCG, and latency.",
    ],
    tags: ["Deep Agents", "LangGraph", "ChromaDB", "BM25", "NetworkX", "FastAPI"],
  },
  {
    title: "Vietnam Air Quality Data Pipeline",
    slug: "air-quality",
    theme: "mint",
    featureTitle: "Raw measurements. Useful insights.",
    previewLabel: "Original project architecture",
    previews: [{ src: "air-quality-architecture.png", label: "AWS architecture", alt: "Original Vietnam air-quality ETL architecture showing S3 Bronze, Silver and Gold layers, Lambda quality gates, Glue, Athena and Step Functions" }],
    challenge: "Live sensor feeds and historical CSV files arrive with different structures and quality problems. Analysis needs a consistent, trustworthy layer of data.",
    approach: "Built an AWS Medallion pipeline: ingest into S3 Bronze, transform with Glue into Silver, validate with Athena-based checks, and publish Gold analytics tables through Step Functions.",
    contribution: "Implemented ingestion and transformation scripts, checks for missing values, valid AQI ranges, city coverage and freshness, plus quality-gated orchestration and SNS notifications.",
    takeaway: "The pipeline makes data quality part of the delivery process. A failed check blocks Gold processing before downstream analytics consume the data.",
    name: "Air Quality Pipeline",
    subtitle: "From raw measurements to analytics-ready data",
    category: "Cloud & data engineering",
    href: "https://github.com/edward1503/Data-Science-AI-Engineering-Personal-Projects/tree/main/AWS%20Data%20Pipeline",
    summary:
      "An AWS Medallion pipeline combining WAQI measurements and historical Vietnamese air-quality data for analysis.",
    outcomes: [
      "Implemented Lambda ingestion and Glue transformations for live WAQI data and historical CSV sources in S3.",
      "Built Athena-based checks for missing values, AQI ranges, city coverage, and freshness; Step Functions blocks Gold processing when quality checks fail.",
      "Produced partitioned Parquet tables for daily AQI summaries, monthly city rankings, and station-level analytics, with SNS notifications.",
    ],
    tags: ["AWS S3", "Lambda", "Glue", "Athena", "Step Functions", "SNS"],
  },
];

export const featuredProjects = [projects[0], projects[1], projects[3]];

export const assetPath = (path) =>
  (process.env.GITHUB_PAGES === "true" ? "/portfolio" : "") + "/" + path;

export const additionalProjects = [
  {
    name: "Explainable credit risk",
    category: "Applied ML · Team project",
    summary:
      "Credit-default modeling with tree-based classifiers, SHAP/LIME explanations, a FastAPI prediction service, and a Streamlit interface.",
    href: "https://github.com/edward1503/xAI-credit-risk",
    tags: ["XGBoost", "LightGBM", "SHAP", "LIME", "Docker"],
  },
  {
    name: "FPT time-series forecasting",
    category: "Quantitative research",
    summary:
      "Notebook experiments comparing linear forecasters, RevIN normalization, and HMM market regimes on FPT stock-price data.",
    href: "https://github.com/edward1503/Data-Science-AI-Engineering-Personal-Projects/tree/main/Long-Time%20Series-Forecast%20with%20RevIN%20and%20Regime%20Switch",
    tags: ["PyTorch", "DLinear", "RevIN", "HMM"],
  },
];

export const experience = [
  {
    period: "Apr 2026 — Present",
    role: "Research Assistant",
    organization: "VinUniversity Center for AI Research (CAIR)",
    shortOrganization: "VinUniversity · CAIR",
    summary:
      "Brought VLearn into the AI20K training program with personalized paths, RAG tutoring, and progress tracking. Developed hands-on labs and grading rubrics, and guided learners through code reviews and debugging.",
  },
  {
    period: "Jan 2026 — Apr 2026",
    role: "Quantitative Researcher Intern",
    organization: "FINPROS",
    summary:
      "Processed high-frequency VN30F1M data for trading alpha research, tuned parameters with Optuna against risk-adjusted returns and drawdowns, and deployed trading bots on internal servers.",
  },
];

export const education = [
  {
    degree: "M.Sc. in Computer Science",
    institution: "VinUniversity",
    period: "Sep 2026 — Present",
  },
  {
    degree: "B.Sc. in Data Science",
    institution: "University of Economics Ho Chi Minh City (UEH)",
    period: "Sep 2022 — Apr 2026",
    detail: "GPA 3.85 / 4.00",
  },
  {
    degree: "Data Science & Artificial Intelligence",
    institution: "AI VIETNAM · Cohort 2025",
    period: "Jul 2025 — Jul 2026",
  },
];

export const skillGroups = [
  {
    title: "AI & research",
    skills: ["Python", "PyTorch", "Scikit-learn", "Optuna", "RAG", "LLM agents", "ReAct", "LangChain", "LangGraph", "vLLM"],
  },
  {
    title: "Engineering & operations",
    skills: ["FastAPI", "PostgreSQL", "Elasticsearch", "Redis", "Docker", "AWS", "DVC", "GitHub Actions"],
  },
];

export const honors = [
  "AWS Certified Cloud Practitioner · 2026",
  "TOEFL C1 · 2026",
  "Five-Good Student Award, UEH BIT Faculty · 2026",
  "Two C-Level Scientific Research Awards, UEH Young Researcher Awards · 2025",
];

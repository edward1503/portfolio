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
    name: "VLearn",
    subtitle: "An adaptive learning platform for AI20K",
    category: "Adaptive learning",
    visual: "learning",
    linkLabel: "View repository",
    role: "Team project · Full-stack & DevOps lead",
    evidence: {
      title: "Personalized learning.",
      detail: "BKT + IRT · RAG tutor · Self-hosted Qwen",
    },
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
    name: "Full-corpus retrieval",
    subtitle: "Multi-hop evidence retrieval for HotpotQA",
    category: "Information retrieval",
    visual: "retrieval",
    linkLabel: "View repository",
    evidence: {
      title: "5.23M documents indexed.",
      detail: "200-query dev pilot · full-support Recall@10: 0.365 → 0.545",
      href: "https://github.com/edward1503/vdt-meeting-search/blob/main/evaluation/results/hotpotqa_full/tv_full_200.json",
    },
    href: "https://github.com/edward1503/vdt-meeting-search",
    summary:
      "Hybrid retrieval system over 5.23M documents for finding supporting evidence in multi-hop questions.",
    outcomes: [
      "Combined Elasticsearch BM25, BGE-small embeddings, a 4-bit TurboVec index, and Reciprocal Rank Fusion.",
      "Built indexing, embeddings, benchmarking, API serving, caching, and dashboard inspection into one pipeline.",
      "Raised pilot full-support Recall@10 from 0.365 to 0.545 while tracking MRR, nDCG, latency, and QPS.",
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
    visual: "legal",
    linkLabel: "View project",
    href: "https://github.com/edward1503/Data-Science-AI-Engineering-Personal-Projects/tree/main/Agentic%20RAG%20in%20Vietnamese%20Law%20Documents",
    summary:
      "A legal-document question-answering system that routes factual, temporal, and multi-hop queries to different retrieval tools.",
    evidence: {
      title: "Query-aware retrieval.",
      detail: "Hybrid search · Reranking · Document relationship graph",
    },
    outcomes: [
      "Orchestrated ingestion and legal-QA agents with Deep Agents and LangGraph, using ChromaDB and BM25 indexes.",
      "Added graph traversal for amendment and reference chains, metadata filters for temporal queries, and CrossEncoder reranking.",
      "Implemented cited-answer generation, retrieval retries, a FastAPI service, a Gradio interface, and comparison tooling for recall, nDCG, and latency.",
    ],
    tags: ["Deep Agents", "LangGraph", "ChromaDB", "BM25", "NetworkX", "FastAPI"],
  },
  {
    title: "Vietnam Air Quality Data Pipeline",
    name: "Air Quality Pipeline",
    subtitle: "From raw measurements to analytics-ready data",
    category: "Cloud & data engineering",
    visual: "pipeline",
    linkLabel: "View project",
    href: "https://github.com/edward1503/Data-Science-AI-Engineering-Personal-Projects/tree/main/AWS%20Data%20Pipeline",
    summary:
      "An AWS Medallion pipeline combining WAQI measurements and historical Vietnamese air-quality data for analysis.",
    evidence: {
      title: "Quality gates before analytics.",
      detail: "Bronze → Silver → Gold · Athena checks · Step Functions",
    },
    outcomes: [
      "Implemented Lambda ingestion and Glue transformations for live WAQI data and historical CSV sources in S3.",
      "Built Athena-based checks for missing values, AQI ranges, city coverage, and freshness; Step Functions blocks Gold processing when quality checks fail.",
      "Produced partitioned Parquet tables for daily AQI summaries, monthly city rankings, and station-level analytics, with SNS notifications.",
    ],
    tags: ["AWS S3", "Lambda", "Glue", "Athena", "Step Functions", "SNS"],
  },
];

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

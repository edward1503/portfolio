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

export const highlights = [
  { value: "5.23M", label: "documents indexed for full-corpus retrieval" },
  { value: "0.545", label: "pilot full-support Recall@10 on HotpotQA" },
  { value: "3.85/4", label: "B.Sc. Data Science GPA at UEH" },
];

export const stack = [
  "Python",
  "RAG",
  "LLM Agents",
  "LangChain",
  "PyTorch",
  "Scikit-learn",
  "FastAPI",
  "Docker",
  "AWS",
  "DVC",
  "GitHub Actions",
];

export const projects = [
  {
    title: "VLearn — Adaptive Learning Platform",
    name: "VLearn",
    subtitle: "An adaptive learning platform for AI20K",
    category: "Adaptive learning",
    visual: "learning",
    linkLabel: "Explore VLearn",
    evidence: {
      title: "Personalized learning.",
      detail: "BKT + IRT · RAG tutor · Self-hosted Qwen",
    },
    href: "https://a20-app-049.io.vn",
    summary:
      "AI-powered adaptive learning platform productionized for the AI20K practical-AI program.",
    outcomes: [
      "Personalized learning paths with Bayesian Knowledge Tracing, Item Response Theory, and knowledge-component mapping.",
      "RAG tutor, AI study planner, and Socratic critical-thinking mode for guided learning.",
      "Self-hosted Qwen with vLLM, containerized with Docker, and delivered through Cloudflare.",
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
      "Combined Elasticsearch BM25, TurboVec dense retrieval, and Reciprocal Rank Fusion.",
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
];

export const experience = [
  {
    period: "Apr 2026 — Present",
    role: "Research Assistant / Lab Coach",
    organization: "VinUniversity Center of AI Research (CAIR)",
    summary:
      "Productionized VLearn; developed lab materials, exercises, evaluation rubrics, reference implementations, and technical support for AI20K learners.",
  },
  {
    period: "Jan 2026 — Apr 2026",
    role: "Quantitative Researcher Intern",
    organization: "FINPROS",
    summary:
      "Engineered predictive alpha signals from VN30F1M high-frequency data, optimized them with Optuna, and deployed trading bots to internal servers.",
  },
];

export const honors = [
  "AWS Certified Cloud Practitioner · 2026",
  "Five-Good Student Award, UEH BIT Faculty · 2026",
  "Two C-Level Scientific Research Awards, UEH Young Researcher Awards · 2025",
];

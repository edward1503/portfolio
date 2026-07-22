export const profile = {
  name: 'Nguyễn Đôn Đức',
  alias: 'Edward',
  role: 'AI Researcher & Engineer',
  location: 'Ho Chi Minh City, Vietnam',
  email: 'nguyendonduc1503@gmail.com',
  phone: '+84 359 993 781',
  github: 'https://github.com/edward1503',
  linkedin: 'https://linkedin.com/in/edward1503',
  website: 'https://a20-app-049.io.vn',
  headline: 'Building rigorous AI systems that people can learn, search, and decide with.',
  summary: 'AI researcher and engineer working across retrieval, LLM applications, adaptive learning, and quantitative research. I enjoy taking ideas from a research question through to a dependable, usable system.'
};

export const impact = [
  ['5.23M', 'documents indexed for multi-hop retrieval'],
  ['0.545', 'full-support Recall@10 in HotpotQA pilot'],
  ['3.85/4.00', 'B.Sc. Data Science GPA, UEH']
];

export const projects = [
  {
    index: '01',
    title: 'VLearn',
    eyebrow: 'Adaptive learning platform · 2026',
    href: 'https://a20-app-049.io.vn',
    summary: 'An AI-powered learning environment for AI20K that adapts study support to each learner.',
    details: 'Combines Bayesian Knowledge Tracing, Item Response Theory, knowledge-component mapping, RAG tutoring, a study planner, and Socratic questioning.',
    tags: ['FastAPI', 'LangGraph', 'Qwen3-7B', 'vLLM', 'PostgreSQL', 'Redis']
  },
  {
    index: '02',
    title: 'Full-Corpus Multi-Hop Retrieval',
    eyebrow: 'HotpotQA research system · 2026',
    href: 'https://github.com/edward1503/vdt-meeting-search',
    summary: 'A retrieval stack over 5.23M documents, designed to surface supporting evidence for multi-hop questions.',
    details: 'Hybrid BM25 and dense retrieval with Reciprocal Rank Fusion, two-hop Bridge-RRF, compressed vector indexing, benchmarking, API serving, caching, and inspection dashboard.',
    tags: ['Elasticsearch', 'TurboVec', 'BGE-small', 'FastAPI', 'React', 'Redis']
  }
];

export const experience = [
  {
    period: 'Apr 2026 — Present',
    company: 'VinUniversity Center of AI Research (CAIR)',
    role: 'Research Assistant / Lab Coach',
    copy: 'Productionizing VLearn for the AI20K practical-AI program; developing labs, reference implementations, evaluation rubrics, and hands-on technical support.'
  },
  {
    period: 'Jan 2026 — Present',
    company: 'FINPROS',
    role: 'Quantitative Researcher Intern',
    copy: 'Engineering predictive features from VN30F1M OHLCV data, optimizing trading alphas with Optuna, and deploying real-time trading bots on internal servers.'
  }
];

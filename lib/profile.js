export const profile = {
  name: 'Nguyễn Đôn Đức',
  alias: 'Edward',
  role: 'AI Researcher | AI Engineer',
  location: 'Ho Chi Minh City',
  email: 'nguyendonduc1503@gmail.com',
  avatar: 'https://avatars.githubusercontent.com/u/142201083?v=4',
  github: 'https://github.com/edward1503',
  linkedin: 'https://linkedin.com/in/edward1503',
  huggingFace: 'https://huggingface.co/edward1503',
  headline: 'AI researcher and engineer building useful systems from data, models, and research ideas.',
  summary: 'I work across retrieval, LLM applications, adaptive learning, and quantitative research. My focus is taking an idea from experiment to a dependable system people can use.'
};

export const stack = ['Python', 'RAG', 'LLM Agents', 'LangChain', 'PyTorch', 'Scikit-learn', 'FastAPI', 'Docker', 'AWS', 'DVC', 'GitHub Actions'];

export const projects = [
  { title: 'VLearn — Adaptive Learning Platform', href: 'https://a20-app-049.io.vn', summary: 'AI-powered adaptive learning platform for the AI20K practical-AI program, combining personalized learning paths, tutoring, and learner progress tracking.', tags: ['FastAPI', 'LangGraph', 'Qwen3-7B', 'vLLM', 'Docker'] },
  { title: 'Full-Corpus Multi-Hop Retrieval for HotpotQA', href: 'https://github.com/edward1503/vdt-meeting-search', summary: 'Full-corpus retrieval system over 5.23M documents using BM25, dense retrieval, and Reciprocal Rank Fusion. Improved pilot full-support Recall@10 from 0.365 to 0.545.', tags: ['Elasticsearch', 'TurboVec', 'BGE-small', 'FastAPI', 'Redis'] }
];

export const experience = [
  { period: 'Apr 2026 — Present', role: 'Research Assistant / Lab Coach', organization: 'VinUniversity Center of AI Research (CAIR)', summary: 'Productionized VLearn; developed lab materials, exercises, evaluation rubrics, reference implementations, and technical support for AI20K learners.' },
  { period: 'Jan 2026 — Present', role: 'Quantitative Researcher Intern', organization: 'FINPROS', summary: 'Engineered predictive alpha signals from VN30F1M high-frequency data, optimized them with Optuna, and deployed trading bots to internal servers.' }
];

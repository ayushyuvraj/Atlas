export type DecisionStatus =
  | "Context"
  | "Reasoning"
  | "Executive Review"
  | "Committed";

export type Initiative = {
  id: string;
  name: string;
  owner: string;
  fundingAsk: number;
  expectedValue: number;
  riskLevel: "Low" | "Medium" | "High";
  strategicFit: number;
  executionReadiness: number;
  evidenceStrength: number;
  description: string;
};

export type EvidenceItem = {
  id: string;
  title: string;
  source: string;
  confidence: number;
  summary: string;
};

export type Assumption = {
  id: string;
  description: string;
  confidence: number;
  validationNeed: string;
};

export type Perspective = {
  role: string;
  stance: string;
  signal: "Support" | "Caution" | "Oppose";
  rationale: string;
};

export type Scenario = {
  name: string;
  fundedInitiatives: string[];
  budgetUsed: number;
  expectedValue: number;
  riskPosture: string;
  rationale: string;
};

export type Risk = {
  category: string;
  severity: "Low" | "Medium" | "High";
  description: string;
  mitigation: string;
};

export type Recommendation = {
  option: string;
  confidence: number;
  rationale: string[];
  alternatives: string[];
  openQuestions: string[];
};

export type LearningArtifact = {
  pattern: string;
  reuse: string;
  reviewTrigger: string;
};

export type Decision = {
  id: string;
  title: string;
  statement: string;
  objective: string;
  owner: string;
  sponsor: string;
  deadline: string;
  budget: number;
  status: DecisionStatus;
  initiatives: Initiative[];
  evidence: EvidenceItem[];
  assumptions: Assumption[];
};

export type ReasoningOutput = {
  contextSummary: string;
  evidenceSummary: string;
  assumptions: Assumption[];
  perspectives: Perspective[];
  scenarios: Scenario[];
  tradeoffs: string[];
  risks: Risk[];
  recommendation: Recommendation;
  learning: LearningArtifact;
};

export type DecisionRecord = {
  decisionId: string;
  finalDecision: string;
  owner: string;
  approver: string;
  successMetrics: string[];
  acceptedRisks: string[];
  reviewDate: string;
  createdAt: string;
};

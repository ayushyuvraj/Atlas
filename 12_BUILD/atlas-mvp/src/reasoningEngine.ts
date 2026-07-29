import type {
  Assumption,
  Decision,
  DecisionRecord,
  LearningArtifact,
  Perspective,
  ReasoningOutput,
  Recommendation,
  Risk,
  Scenario,
} from "./types";

const currency = (value: number) => `$${value}M`;

export function runInstitutionalReasoning(decision: Decision): ReasoningOutput {
  const ranked = [...decision.initiatives].sort((a, b) => {
    const scoreA =
      a.strategicFit * 0.34 +
      a.executionReadiness * 0.26 +
      a.evidenceStrength * 0.24 +
      (a.expectedValue / a.fundingAsk) * 8 -
      (a.riskLevel === "High" ? 12 : a.riskLevel === "Medium" ? 5 : 0);
    const scoreB =
      b.strategicFit * 0.34 +
      b.executionReadiness * 0.26 +
      b.evidenceStrength * 0.24 +
      (b.expectedValue / b.fundingAsk) * 8 -
      (b.riskLevel === "High" ? 12 : b.riskLevel === "Medium" ? 5 : 0);
    return scoreB - scoreA;
  });

  const recommended = ranked.slice(0, 3);
  const deferred = ranked.slice(3);

  return {
    contextSummary: buildContextSummary(decision),
    evidenceSummary: buildEvidenceSummary(decision),
    assumptions: refineAssumptions(decision.assumptions),
    perspectives: buildPerspectives(decision),
    scenarios: buildScenarios(decision, recommended),
    tradeoffs: buildTradeoffs(decision, recommended, deferred),
    risks: buildRisks(decision),
    recommendation: buildRecommendation(decision, recommended, deferred),
    learning: buildLearning(decision, recommended),
  };
}

export function createDecisionRecord(
  decision: Decision,
  reasoning: ReasoningOutput,
): DecisionRecord {
  return {
    decisionId: decision.id,
    finalDecision: reasoning.recommendation.option,
    owner: decision.owner,
    approver: decision.sponsor,
    successMetrics: [
      "Benefit realization reviewed within 90 days",
      "Assumptions revalidated before next funding cycle",
      "Execution readiness tracked for each funded initiative",
    ],
    acceptedRisks: reasoning.risks
      .filter((risk) => risk.severity !== "Low")
      .map((risk) => `${risk.category}: ${risk.description}`),
    reviewDate: "2026-11-20",
    createdAt: new Date().toISOString(),
  };
}

function buildContextSummary(decision: Decision) {
  return `${decision.sponsor} must allocate ${currency(
    decision.budget,
  )} across ${decision.initiatives.length} competing initiatives before ${
    decision.deadline
  }. The decision requires balancing strategic fit, evidence quality, value potential, and execution readiness.`;
}

function buildEvidenceSummary(decision: Decision) {
  const averageConfidence = Math.round(
    decision.evidence.reduce((sum, item) => sum + item.confidence, 0) /
      decision.evidence.length,
  );
  return `Evidence strength is ${averageConfidence}/100. Internal transformation evidence is strongest; market-entry evidence remains thinner and should be treated as an open validation area.`;
}

function refineAssumptions(assumptions: Assumption[]) {
  return assumptions.map((assumption) => ({
    ...assumption,
    validationNeed: `${assumption.validationNeed} Mark as reviewed before commitment.`,
  }));
}

function buildPerspectives(decision: Decision): Perspective[] {
  const highestValue = [...decision.initiatives].sort(
    (a, b) => b.expectedValue - a.expectedValue,
  )[0];
  const mostReady = [...decision.initiatives].sort(
    (a, b) => b.executionReadiness - a.executionReadiness,
  )[0];
  const highestRisk = [...decision.initiatives].find(
    (initiative) => initiative.riskLevel === "High",
  );

  return [
    {
      role: "Strategy",
      signal: "Support",
      stance: "Prioritize fit and compound capability.",
      rationale:
        "AI Operations Automation and Enterprise Risk Intelligence both reinforce cross-enterprise decision and execution capability.",
    },
    {
      role: "Finance",
      signal: "Support",
      stance: `Favor initiatives with strong value-to-funding ratio; ${highestValue.name} needs deeper risk review before full approval.`,
      rationale:
        "Capital is constrained, so the recommendation should preserve budget flexibility while funding near-term value.",
    },
    {
      role: "Operations",
      signal: "Caution",
      stance: `${mostReady.name} is operationally credible, but change capacity must be validated.`,
      rationale:
        "Execution readiness is high, yet adoption depends on capacity, process ownership, and frontline enablement.",
    },
    {
      role: "Risk",
      signal: highestRisk ? "Caution" : "Support",
      stance: highestRisk
        ? `${highestRisk.name} should be deferred until regulatory and partner assumptions are validated.`
        : "No high-risk initiative blocks commitment.",
      rationale:
        "High upside should not override unresolved evidence gaps in strategic investment decisions.",
    },
    {
      role: "Technology",
      signal: "Support",
      stance:
        "Sequence platform dependencies before data-heavy modernization work.",
      rationale:
        "Technical dependency risk is manageable if initiatives are sequenced rather than funded as disconnected programs.",
    },
  ];
}

function buildScenarios(decision: Decision, recommended: Decision["initiatives"]): Scenario[] {
  const balanced = recommended;
  const aggressive = [...decision.initiatives].sort(
    (a, b) => b.expectedValue - a.expectedValue,
  ).slice(0, 2);
  const conservative = [...decision.initiatives].sort(
    (a, b) => b.executionReadiness - a.executionReadiness,
  ).slice(0, 3);

  return [
    scenarioFrom("Balanced portfolio", balanced, "Medium", "Funds the strongest mix of strategic fit, execution readiness, and evidence strength."),
    scenarioFrom("Aggressive growth", aggressive, "High", "Maximizes expected value but concentrates risk in less validated initiatives."),
    scenarioFrom("Execution-first", conservative, "Low to Medium", "Prioritizes readiness and governance confidence over maximum upside."),
  ];
}

function scenarioFrom(
  name: string,
  initiatives: Decision["initiatives"],
  riskPosture: string,
  rationale: string,
): Scenario {
  return {
    name,
    fundedInitiatives: initiatives.map((initiative) => initiative.name),
    budgetUsed: initiatives.reduce((sum, initiative) => sum + initiative.fundingAsk, 0),
    expectedValue: initiatives.reduce((sum, initiative) => sum + initiative.expectedValue, 0),
    riskPosture,
    rationale,
  };
}

function buildTradeoffs(
  decision: Decision,
  recommended: Decision["initiatives"],
  deferred: Decision["initiatives"],
) {
  const fundedNames = recommended.map((initiative) => initiative.name).join(", ");
  const deferredNames = deferred.map((initiative) => initiative.name).join(", ");
  const budgetUsed = recommended.reduce((sum, item) => sum + item.fundingAsk, 0);

  return [
    `Funding ${fundedNames} uses ${currency(budgetUsed)} of ${currency(
      decision.budget,
    )}, leaving limited contingency for dependency overruns.`,
    deferredNames
      ? `Deferring ${deferredNames} sacrifices upside but reduces evidence and execution risk.`
      : "No initiative is deferred in the current scenario.",
    "The recommendation favors institutional capability and execution confidence over maximum theoretical upside.",
  ];
}

function buildRisks(decision: Decision): Risk[] {
  const highRiskInitiatives = decision.initiatives.filter(
    (initiative) => initiative.riskLevel === "High",
  );
  return [
    {
      category: "Execution",
      severity: "Medium",
      description:
        "Funded initiatives may compete for transformation and change management capacity.",
      mitigation:
        "Require initiative owners to confirm operating capacity before release of full funding.",
    },
    {
      category: "Evidence",
      severity: "Medium",
      description:
        "Some benefits depend on assumptions that are not yet fully validated.",
      mitigation:
        "Attach validation milestones to assumptions and review before next committee cycle.",
    },
    {
      category: "Strategic",
      severity: highRiskInitiatives.length > 0 ? "High" : "Medium",
      description:
        "High-upside initiatives may create false urgency despite weaker readiness signals.",
      mitigation:
        "Stage-gate high-risk initiatives until regulatory, partner, or architecture dependencies are clearer.",
    },
  ];
}

function buildRecommendation(
  decision: Decision,
  recommended: Decision["initiatives"],
  deferred: Decision["initiatives"],
): Recommendation {
  const budgetUsed = recommended.reduce((sum, initiative) => sum + initiative.fundingAsk, 0);
  const confidence = Math.round(
    recommended.reduce(
      (sum, initiative) =>
        sum +
        (initiative.strategicFit +
          initiative.executionReadiness +
          initiative.evidenceStrength) /
          3,
      0,
    ) / recommended.length,
  );

  return {
    option: `Fund ${recommended.map((initiative) => initiative.name).join(", ")} for ${currency(
      budgetUsed,
    )}. Defer ${deferred.map((initiative) => initiative.name).join(", ") || "no remaining initiatives"} pending validation.`,
    confidence,
    rationale: [
      "The recommended portfolio balances strategic fit, evidence quality, and execution readiness.",
      "It preserves human accountability by surfacing unresolved assumptions before commitment.",
      "It avoids over-concentrating capital in high-risk expansion before validation improves.",
    ],
    alternatives: [
      "Aggressive growth portfolio: fund the highest expected-value initiatives despite higher execution risk.",
      "Execution-first portfolio: fund only the most ready initiatives and preserve remaining budget.",
      "Staged funding: approve discovery funding for deferred initiatives while fully funding ready initiatives.",
    ],
    openQuestions: [
      "Can Operations absorb process redesign during automation rollout?",
      "Which customer data dependencies must be cleared before modernization funding?",
      "What evidence would justify moving Japan Market Entry from deferred to staged approval?",
    ],
  };
}

function buildLearning(
  decision: Decision,
  recommended: Decision["initiatives"],
): LearningArtifact {
  return {
    pattern:
      "Strategic investment decisions improve when readiness and evidence strength are evaluated before expected upside.",
    reuse: `Future ${decision.sponsor} portfolio reviews should compare value, readiness, evidence, and assumption confidence in the same workspace.`,
    reviewTrigger: `Review funded initiatives on 2026-11-20 and compare actual progress against assumptions for ${recommended
      .map((initiative) => initiative.name)
      .join(", ")}.`,
  };
}

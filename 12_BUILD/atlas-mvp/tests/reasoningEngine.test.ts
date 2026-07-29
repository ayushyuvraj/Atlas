import { describe, expect, it } from "vitest";
import { demoDecision } from "../src/demoData";
import { createDecisionRecord, runInstitutionalReasoning } from "../src/reasoningEngine";

describe("Institutional Reasoning Engine", () => {
  it("generates the required reasoning outputs", () => {
    const reasoning = runInstitutionalReasoning(demoDecision);

    expect(reasoning.contextSummary).toContain("allocate");
    expect(reasoning.assumptions.length).toBeGreaterThan(0);
    expect(reasoning.perspectives.length).toBeGreaterThanOrEqual(5);
    expect(reasoning.scenarios.length).toBe(3);
    expect(reasoning.risks.length).toBeGreaterThan(0);
    expect(reasoning.recommendation.alternatives.length).toBeGreaterThan(0);
    expect(reasoning.recommendation.openQuestions.length).toBeGreaterThan(0);
  });

  it("creates a decision record only from an explicit commitment call", () => {
    const reasoning = runInstitutionalReasoning(demoDecision);
    const record = createDecisionRecord(demoDecision, reasoning);

    expect(record.decisionId).toBe(demoDecision.id);
    expect(record.finalDecision).toBe(reasoning.recommendation.option);
    expect(record.approver).toBe(demoDecision.sponsor);
    expect(record.acceptedRisks.length).toBeGreaterThan(0);
  });
});

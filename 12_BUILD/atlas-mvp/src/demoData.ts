import type { Decision } from "./types";

export const demoDecision: Decision = {
  id: "DEC-2026-041",
  title: "Q4 Strategic Investment Committee",
  statement: "Which strategic initiatives should receive funding this cycle?",
  objective:
    "Allocate limited transformation capital to the initiatives with the strongest strategic fit, value potential, and execution readiness.",
  owner: "Maya Shah, Strategy Director",
  sponsor: "Chief Strategy Officer",
  deadline: "2026-08-20",
  budget: 38,
  status: "Reasoning",
  initiatives: [
    {
      id: "AI-OPS",
      name: "AI Operations Automation",
      owner: "Operations",
      fundingAsk: 14,
      expectedValue: 42,
      riskLevel: "Medium",
      strategicFit: 92,
      executionReadiness: 84,
      evidenceStrength: 88,
      description:
        "Automate exception handling and service workflows across high-volume operations teams.",
    },
    {
      id: "CUSTOMER360",
      name: "Customer 360 Modernization",
      owner: "Product",
      fundingAsk: 18,
      expectedValue: 39,
      riskLevel: "Medium",
      strategicFit: 86,
      executionReadiness: 72,
      evidenceStrength: 74,
      description:
        "Unify customer data and decision support across product, sales, and support teams.",
    },
    {
      id: "MARKET-JP",
      name: "Japan Market Entry",
      owner: "Growth",
      fundingAsk: 22,
      expectedValue: 51,
      riskLevel: "High",
      strategicFit: 78,
      executionReadiness: 58,
      evidenceStrength: 62,
      description:
        "Fund first-stage market entry, localization, regulatory review, and partner development.",
    },
    {
      id: "PLATFORM-RISK",
      name: "Enterprise Risk Intelligence",
      owner: "Risk",
      fundingAsk: 11,
      expectedValue: 26,
      riskLevel: "Low",
      strategicFit: 81,
      executionReadiness: 88,
      evidenceStrength: 82,
      description:
        "Create a cross-functional risk sensing layer for transformation and investment governance.",
    },
  ],
  evidence: [
    {
      id: "E-01",
      title: "Transformation benefits review",
      source: "Internal portfolio report",
      confidence: 84,
      summary:
        "Automation programs show faster benefit realization when workflow ownership and exception metrics are defined before rollout.",
    },
    {
      id: "E-02",
      title: "Customer data readiness assessment",
      source: "Enterprise architecture review",
      confidence: 72,
      summary:
        "Customer data consolidation is strategically important but has unresolved dependency risk across data governance and identity systems.",
    },
    {
      id: "E-03",
      title: "Market entry lessons",
      source: "Prior international expansion decision",
      confidence: 67,
      summary:
        "Prior expansion efforts underestimated regulatory sequencing and partner onboarding lead time.",
    },
  ],
  assumptions: [
    {
      id: "A-01",
      description:
        "Operations teams can absorb process redesign while automation is introduced.",
      confidence: 76,
      validationNeed: "Confirm change capacity with Operations and HR.",
    },
    {
      id: "A-02",
      description:
        "Customer 360 can resolve identity and governance dependencies within two quarters.",
      confidence: 58,
      validationNeed: "Validate dependency timeline with Enterprise Architecture.",
    },
    {
      id: "A-03",
      description:
        "Japan market entry partner pipeline can be developed before regulatory approval is complete.",
      confidence: 49,
      validationNeed: "Validate with Legal, Growth, and local market advisors.",
    },
  ],
};

import {
  Activity,
  Archive,
  BadgeCheck,
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Clock3,
  FileText,
  Gauge,
  Layers3,
  LockKeyhole,
  Network,
  Play,
  Scale,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import { useMemo, useState } from "react";
import { demoDecision } from "./demoData";
import { createDecisionRecord, runInstitutionalReasoning } from "./reasoningEngine";
import type { DecisionRecord, ReasoningOutput } from "./types";

type View = "dashboard" | "workspace" | "recommendation" | "record";

const lifecycle = [
  "Initiated",
  "Context",
  "Framing",
  "Reasoning",
  "Review",
  "Commit",
  "Learn",
];

const moduleIcons = [BrainCircuit, FileText, CircleAlert, Network, BarChart3, Scale, ShieldAlert];

export function App() {
  const [view, setView] = useState<View>("dashboard");
  const [reasoning, setReasoning] = useState<ReasoningOutput | null>(null);
  const [record, setRecord] = useState<DecisionRecord | null>(null);
  const [activeModule, setActiveModule] = useState("Perspectives");

  const budgetUsed = useMemo(() => {
    if (!reasoning) return 0;
    return reasoning.scenarios[0].budgetUsed;
  }, [reasoning]);

  const runReasoning = () => {
    const output = runInstitutionalReasoning(demoDecision);
    setReasoning(output);
    setView("workspace");
  };

  const commitDecision = () => {
    if (!reasoning) return;
    const decisionRecord = createDecisionRecord(demoDecision, reasoning);
    setRecord(decisionRecord);
    setView("record");
  };

  return (
    <main className="app-shell">
      <aside className="sidebar" aria-label="Atlas navigation">
        <div className="brand">
          <div className="brand-mark">
            <Layers3 size={22} />
          </div>
          <div>
            <strong>Atlas</strong>
            <span>Decision OS</span>
          </div>
        </div>
        <nav>
          <button className={view === "dashboard" ? "nav-item active" : "nav-item"} onClick={() => setView("dashboard")}>
            <Activity size={18} /> Home
          </button>
          <button className={view === "workspace" ? "nav-item active" : "nav-item"} onClick={() => setView("workspace")}>
            <BrainCircuit size={18} /> Workspace
          </button>
          <button className={view === "recommendation" ? "nav-item active" : "nav-item"} onClick={() => reasoning && setView("recommendation")} disabled={!reasoning}>
            <BadgeCheck size={18} /> Recommendation
          </button>
          <button className={view === "record" ? "nav-item active" : "nav-item"} onClick={() => record && setView("record")} disabled={!record}>
            <Archive size={18} /> Decision Record
          </button>
        </nav>
        <section className="sidebar-panel">
          <span className="eyebrow">Demo data</span>
          <p>Simulated strategic portfolio review. No customer data or external sources are used.</p>
        </section>
      </aside>

      <section className="content">
        <header className="topbar">
          <div>
            <span className="eyebrow">Strategic Portfolio & Investment Decision Support</span>
            <h1>{demoDecision.title}</h1>
          </div>
          <div className="top-actions">
            <StatusPill label={record ? "Committed" : reasoning ? "Executive Review" : "Reasoning"} />
            <button className="icon-button" title="Governed demo workspace" aria-label="Governed demo workspace">
              <LockKeyhole size={18} />
            </button>
          </div>
        </header>

        {view === "dashboard" && (
          <Dashboard onOpenWorkspace={() => setView("workspace")} onRunReasoning={runReasoning} reasoning={reasoning} />
        )}
        {view === "workspace" && (
          <Workspace
            reasoning={reasoning}
            activeModule={activeModule}
            setActiveModule={setActiveModule}
            onRunReasoning={runReasoning}
            onRecommendation={() => reasoning && setView("recommendation")}
          />
        )}
        {view === "recommendation" && reasoning && (
          <RecommendationView reasoning={reasoning} budgetUsed={budgetUsed} onCommit={commitDecision} />
        )}
        {view === "record" && reasoning && record && (
          <DecisionRecordView reasoning={reasoning} record={record} />
        )}
      </section>
    </main>
  );
}

function Dashboard({
  reasoning,
  onOpenWorkspace,
  onRunReasoning,
}: {
  reasoning: ReasoningOutput | null;
  onOpenWorkspace: () => void;
  onRunReasoning: () => void;
}) {
  return (
    <div className="screen-grid">
      <section className="summary-panel">
        <div className="panel-heading">
          <div>
            <span className="eyebrow">Active decision</span>
            <h2>{demoDecision.statement}</h2>
          </div>
          <button className="primary-button" onClick={onOpenWorkspace}>
            Open <ChevronRight size={18} />
          </button>
        </div>
        <p className="muted">{demoDecision.objective}</p>
        <div className="metric-row">
          <Metric label="Budget" value={`$${demoDecision.budget}M`} />
          <Metric label="Initiatives" value={String(demoDecision.initiatives.length)} />
          <Metric label="Owner" value="Strategy" />
          <Metric label="Due" value="Aug 20" />
        </div>
      </section>

      <section className="panel">
        <div className="panel-heading">
          <div>
            <span className="eyebrow">Institutional reasoning</span>
            <h2>Reasoning run</h2>
          </div>
          <button className="secondary-button" onClick={onRunReasoning}>
            <Play size={17} /> {reasoning ? "Re-run" : "Run"}
          </button>
        </div>
        <Lifecycle />
      </section>

      <section className="panel wide">
        <div className="panel-heading">
          <div>
            <span className="eyebrow">Portfolio options</span>
            <h2>Initiatives under review</h2>
          </div>
        </div>
        <div className="initiative-table" role="table" aria-label="Initiatives under review">
          <div className="table-row table-head" role="row">
            <span>Initiative</span>
            <span>Ask</span>
            <span>Value</span>
            <span>Fit</span>
            <span>Ready</span>
            <span>Risk</span>
          </div>
          {demoDecision.initiatives.map((initiative) => (
            <div className="table-row" role="row" key={initiative.id}>
              <span>
                <strong>{initiative.name}</strong>
                <small>{initiative.owner}</small>
              </span>
              <span>${initiative.fundingAsk}M</span>
              <span>${initiative.expectedValue}M</span>
              <span>{initiative.strategicFit}</span>
              <span>{initiative.executionReadiness}</span>
              <span>
                <RiskBadge level={initiative.riskLevel} />
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Workspace({
  reasoning,
  activeModule,
  setActiveModule,
  onRunReasoning,
  onRecommendation,
}: {
  reasoning: ReasoningOutput | null;
  activeModule: string;
  setActiveModule: (value: string) => void;
  onRunReasoning: () => void;
  onRecommendation: () => void;
}) {
  const modules = ["Context", "Evidence", "Assumptions", "Perspectives", "Scenarios", "Tradeoffs", "Risks"];

  return (
    <div className="workspace-layout">
      <section className="panel lifecycle-panel">
        <span className="eyebrow">Lifecycle</span>
        <Lifecycle vertical />
      </section>

      <section className="panel workspace-main">
        <div className="panel-heading">
          <div>
            <span className="eyebrow">Decision Workspace</span>
            <h2>{demoDecision.statement}</h2>
          </div>
          <button className="primary-button" onClick={onRunReasoning}>
            <Sparkles size={18} /> {reasoning ? "Refresh reasoning" : "Run reasoning"}
          </button>
        </div>

        <div className="context-block">
          <div>
            <span className="eyebrow">Decision objective</span>
            <p>{demoDecision.objective}</p>
          </div>
          <div className="context-meta">
            <Metric label="Owner" value="Maya Shah" />
            <Metric label="Sponsor" value="CSO" />
            <Metric label="Budget" value={`$${demoDecision.budget}M`} />
          </div>
        </div>

        <div className="module-tabs" role="tablist" aria-label="Reasoning modules">
          {modules.map((module, index) => {
            const Icon = moduleIcons[index] || BrainCircuit;
            return (
              <button
                key={module}
                className={activeModule === module ? "module-tab active" : "module-tab"}
                onClick={() => setActiveModule(module)}
              >
                <Icon size={16} /> {module}
              </button>
            );
          })}
        </div>

        {reasoning ? <ReasoningModule module={activeModule} reasoning={reasoning} /> : <EmptyReasoning />}

        <div className="workspace-actions">
          <button className="secondary-button">Request revision</button>
          <button className="primary-button" disabled={!reasoning} onClick={onRecommendation}>
            Executive recommendation <ChevronRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}

function ReasoningModule({ module, reasoning }: { module: string; reasoning: ReasoningOutput }) {
  if (module === "Context") {
    return <InsightCard title="AI-generated context brief" body={reasoning.contextSummary} />;
  }
  if (module === "Evidence") {
    return <InsightCard title="Evidence strength summary" body={reasoning.evidenceSummary} />;
  }
  if (module === "Assumptions") {
    return (
      <div className="card-grid">
        {reasoning.assumptions.map((assumption) => (
          <article className="small-card" key={assumption.id}>
            <div className="card-topline">
              <strong>{assumption.id}</strong>
              <Confidence value={assumption.confidence} />
            </div>
            <p>{assumption.description}</p>
            <small>{assumption.validationNeed}</small>
          </article>
        ))}
      </div>
    );
  }
  if (module === "Perspectives") {
    return (
      <div className="card-grid">
        {reasoning.perspectives.map((perspective) => (
          <article className="small-card" key={perspective.role}>
            <div className="card-topline">
              <strong>{perspective.role}</strong>
              <Signal signal={perspective.signal} />
            </div>
            <p>{perspective.stance}</p>
            <small>{perspective.rationale}</small>
          </article>
        ))}
      </div>
    );
  }
  if (module === "Scenarios") {
    return (
      <div className="scenario-list">
        {reasoning.scenarios.map((scenario) => (
          <article className="scenario" key={scenario.name}>
            <div>
              <strong>{scenario.name}</strong>
              <p>{scenario.rationale}</p>
              <small>{scenario.fundedInitiatives.join(" + ")}</small>
            </div>
            <div className="scenario-metrics">
              <Metric label="Budget" value={`$${scenario.budgetUsed}M`} />
              <Metric label="Value" value={`$${scenario.expectedValue}M`} />
              <Metric label="Risk" value={scenario.riskPosture} />
            </div>
          </article>
        ))}
      </div>
    );
  }
  if (module === "Tradeoffs") {
    return <BulletPanel title="Tradeoff analysis" items={reasoning.tradeoffs} />;
  }
  return (
    <div className="card-grid">
      {reasoning.risks.map((risk) => (
        <article className="small-card" key={risk.category}>
          <div className="card-topline">
            <strong>{risk.category}</strong>
            <RiskBadge level={risk.severity} />
          </div>
          <p>{risk.description}</p>
          <small>{risk.mitigation}</small>
        </article>
      ))}
    </div>
  );
}

function RecommendationView({
  reasoning,
  budgetUsed,
  onCommit,
}: {
  reasoning: ReasoningOutput;
  budgetUsed: number;
  onCommit: () => void;
}) {
  return (
    <div className="recommendation-layout">
      <section className="summary-panel">
        <div className="panel-heading">
          <div>
            <span className="eyebrow">Executive recommendation</span>
            <h2>{reasoning.recommendation.option}</h2>
          </div>
          <Confidence value={reasoning.recommendation.confidence} />
        </div>
        <BulletPanel title="Rationale" items={reasoning.recommendation.rationale} />
        <div className="commit-strip">
          <Metric label="Budget used" value={`$${budgetUsed}M`} />
          <Metric label="Decision owner" value="Strategy Director" />
          <Metric label="Human approval" value="Required" />
          <button className="primary-button" onClick={onCommit}>
            <CheckCircle2 size={18} /> Commit Decision
          </button>
        </div>
      </section>

      <section className="panel">
        <BulletPanel title="Alternatives considered" items={reasoning.recommendation.alternatives} />
      </section>
      <section className="panel">
        <BulletPanel title="Open questions" items={reasoning.recommendation.openQuestions} />
      </section>
      <section className="panel wide">
        <div className="panel-heading">
          <div>
            <span className="eyebrow">Reasoning trace</span>
            <h2>Evidence, assumptions, risks, and tradeoffs remain inspectable</h2>
          </div>
        </div>
        <div className="trace-grid">
          <TraceItem icon={<FileText size={18} />} label="Evidence" value="Linked to internal demo evidence" />
          <TraceItem icon={<CircleAlert size={18} />} label="Assumptions" value={`${reasoning.assumptions.length} surfaced`} />
          <TraceItem icon={<ShieldAlert size={18} />} label="Risks" value={`${reasoning.risks.length} active`} />
          <TraceItem icon={<Scale size={18} />} label="Tradeoffs" value={`${reasoning.tradeoffs.length} documented`} />
        </div>
      </section>
    </div>
  );
}

function DecisionRecordView({
  reasoning,
  record,
}: {
  reasoning: ReasoningOutput;
  record: DecisionRecord;
}) {
  return (
    <div className="record-layout">
      <section className="summary-panel">
        <div className="panel-heading">
          <div>
            <span className="eyebrow">Decision Record</span>
            <h2>{record.finalDecision}</h2>
          </div>
          <StatusPill label="Human-approved record" />
        </div>
        <div className="metric-row">
          <Metric label="Owner" value={record.owner} />
          <Metric label="Approver" value={record.approver} />
          <Metric label="Review" value={record.reviewDate} />
          <Metric label="Created" value={new Date(record.createdAt).toLocaleDateString()} />
        </div>
      </section>

      <section className="panel">
        <BulletPanel title="Success metrics" items={record.successMetrics} />
      </section>
      <section className="panel">
        <BulletPanel title="Accepted risks" items={record.acceptedRisks} />
      </section>
      <section className="panel wide">
        <div className="panel-heading">
          <div>
            <span className="eyebrow">Institutional learning</span>
            <h2>{reasoning.learning.pattern}</h2>
          </div>
          <BookOpenCheck size={24} />
        </div>
        <p>{reasoning.learning.reuse}</p>
        <p className="muted">{reasoning.learning.reviewTrigger}</p>
      </section>
    </div>
  );
}

function Lifecycle({ vertical = false }: { vertical?: boolean }) {
  return (
    <ol className={vertical ? "lifecycle vertical" : "lifecycle"}>
      {lifecycle.map((step) => (
        <li key={step} className={["Initiated", "Context", "Framing", "Reasoning"].includes(step) ? "done" : ""}>
          <span>{step}</span>
        </li>
      ))}
    </ol>
  );
}

function EmptyReasoning() {
  return (
    <section className="empty-state">
      <BrainCircuit size={32} />
      <h3>Reasoning has not been run yet</h3>
      <p>Run the Institutional Reasoning Engine to generate structured module outputs from the decision context.</p>
    </section>
  );
}

function InsightCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="insight-card">
      <span className="eyebrow">{title}</span>
      <p>{body}</p>
    </article>
  );
}

function BulletPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bullet-panel">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="metric">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Confidence({ value }: { value: number }) {
  return (
    <div className="confidence" title={`Confidence ${value}/100`}>
      <Gauge size={16} />
      <span>{value}</span>
    </div>
  );
}

function StatusPill({ label }: { label: string }) {
  return (
    <span className="status-pill">
      <Clock3 size={15} /> {label}
    </span>
  );
}

function RiskBadge({ level }: { level: string }) {
  return <span className={`risk-badge ${level.toLowerCase()}`}>{level}</span>;
}

function Signal({ signal }: { signal: string }) {
  return <span className={`signal ${signal.toLowerCase()}`}>{signal}</span>;
}

function TraceItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="trace-item">
      {icon}
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

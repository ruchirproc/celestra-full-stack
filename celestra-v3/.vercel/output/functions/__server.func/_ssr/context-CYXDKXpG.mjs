import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { P as PageHeader } from "./PageHeader-VAH6eLWf.mjs";
import { B as Button } from "./button-CtByUnye.mjs";
import { c as cn } from "./router-BF2ZJpgr.mjs";
import { b as analyzeContext } from "./chat-D-u_0V2G.mjs";
import "../_libs/sonner.mjs";
import { L as LoaderCircle, S as Sparkles, h as ChevronRight, d as CircleCheck, P as Plus, T as Target, i as Users, M as Map, j as Save, D as Download, A as ArrowRight, X } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/xlsx.mjs";
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const EMPTY = {
  brandName: "",
  genericName: "",
  mechanismOfAction: "",
  indication: "",
  regulatoryStatus: "",
  therapeuticArea: "",
  patientPopulation: "",
  prevalenceEstimate: "",
  rareDisease: "",
  competitors: [],
  marketLeader: "",
  competitivePositioning: "",
  launchDate: "",
  commercialStage: "",
  keyMilestones: [],
  targetSpecialties: [],
  geographicFocus: "",
  fieldForceModel: "",
  repCountTarget: "",
  deploymentYear: ""
};
function SectionCard({
  number,
  title,
  filled,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 border-b border-border px-5 py-3.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold", filled ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"), children: filled ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5" }) : number }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 px-5 py-4", children })
  ] });
}
function FieldLabel({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children });
}
function Pills({
  options,
  value,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: options.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => onChange(value === opt ? "" : opt), className: cn("rounded-full border px-3.5 py-1.5 text-xs transition-colors", value === opt ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-foreground hover:border-primary/50 hover:bg-muted/40"), children: opt }, opt)) });
}
function TagInput({
  tags,
  onChange,
  placeholder
}) {
  const [draft, setDraft] = reactExports.useState("");
  const inputRef = reactExports.useRef(null);
  const add = () => {
    const v = draft.trim();
    if (v && !tags.includes(v)) onChange([...tags, v]);
    setDraft("");
  };
  const handleKey = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      add();
    }
    if (e.key === "Backspace" && !draft && tags.length) onChange(tags.slice(0, -1));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => inputRef.current?.focus(), className: "flex min-h-[40px] cursor-text flex-wrap gap-1.5 rounded-md border border-input bg-background px-3 py-2 text-sm focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-0", children: [
    tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary", children: [
      t,
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => onChange(tags.filter((x) => x !== t)), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3" }) })
    ] }, t)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: inputRef, value: draft, onChange: (e) => setDraft(e.target.value), onKeyDown: handleKey, onBlur: add, placeholder: tags.length ? "" : placeholder, className: "flex-1 bg-transparent text-xs outline-none placeholder:text-muted-foreground" })
  ] });
}
function RecommendationCard({
  icon: Icon,
  title,
  color,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("rounded-xl border p-4", color), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 text-xs", children })
  ] });
}
function RecRow({
  label,
  value
}) {
  if (!value || Array.isArray(value) && value.length === 0) return null;
  const display = Array.isArray(value) ? value.join(", ") : String(value);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-foreground/70", children: [
      label,
      ": "
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: display })
  ] });
}
function ContextPage() {
  const navigate = useNavigate();
  const [form, setForm] = reactExports.useState(EMPTY);
  const [rawResponse, setRawResponse] = reactExports.useState("");
  const [recommendations, setRecommendations] = reactExports.useState(null);
  const [projectId, setProjectId] = reactExports.useState(null);
  const [isAnalyzing, setIsAnalyzing] = reactExports.useState(false);
  const [showRaw, setShowRaw] = reactExports.useState(false);
  const [saved, setSaved] = reactExports.useState(false);
  const responseRef = reactExports.useRef(null);
  const rawRef = reactExports.useRef("");
  const set = (key, value) => setForm((f) => ({
    ...f,
    [key]: value
  }));
  const sectionFilled = [!!(form.brandName || form.genericName || form.indication), !!(form.therapeuticArea || form.patientPopulation), !!(form.competitors.length || form.competitivePositioning), !!(form.commercialStage || form.launchDate), !!(form.targetSpecialties.length || form.geographicFocus)];
  const filledCount = sectionFilled.filter(Boolean).length;
  const canAnalyze = filledCount >= 2;
  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    setRawResponse("");
    rawRef.current = "";
    setRecommendations(null);
    setProjectId(null);
    setSaved(false);
    try {
      const result = await analyzeContext(form, (delta) => {
        rawRef.current += delta;
        setRawResponse((r) => r + delta);
        if (responseRef.current) {
          responseRef.current.scrollTop = responseRef.current.scrollHeight;
        }
      });
      setProjectId(result.project_id);
      if (result.project_id) {
        localStorage.setItem("celestra_project_id", result.project_id);
      }
      const raw = rawRef.current;
      const keyIdx = raw.indexOf('"project_context"');
      if (keyIdx !== -1) {
        const start = raw.lastIndexOf("{", keyIdx);
        const end = raw.lastIndexOf("}");
        if (start !== -1 && end > start) {
          const jsonStr = raw.slice(start, end + 1);
          localStorage.setItem("celestra_context_json", jsonStr);
          try {
            const parsed = JSON.parse(jsonStr);
            if (parsed.claude_recommendations) setRecommendations(parsed.claude_recommendations);
          } catch {
          }
        }
      }
    } catch (err) {
      setRawResponse(`Error: ${err.message}`);
    } finally {
      setIsAnalyzing(false);
    }
  };
  const handleDownloadJson = () => {
    const keyIdx = rawResponse.indexOf('"project_context"');
    if (keyIdx === -1) return;
    const start = rawResponse.lastIndexOf("{", keyIdx);
    const end = rawResponse.lastIndexOf("}");
    if (start === -1 || end <= start) return;
    const jsonStr = rawResponse.slice(start, end + 1);
    const blob = new Blob([jsonStr], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `project-context-${projectId?.slice(0, 8) ?? "draft"}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };
  const handleParseRecommendations = () => {
    const keyIdx = rawResponse.indexOf('"project_context"');
    if (keyIdx === -1) return;
    const start = rawResponse.lastIndexOf("{", keyIdx);
    const end = rawResponse.lastIndexOf("}");
    if (start === -1 || end <= start) return;
    try {
      const parsed = JSON.parse(rawResponse.slice(start, end + 1));
      if (parsed.claude_recommendations) setRecommendations(parsed.claude_recommendations);
    } catch {
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Module 00 · project-context-gathering", title: "Project Context", description: "Fill in the drug, market, and commercial details — Claude analyzes them and pre-seeds recommendations for targeting, sizing, and alignment." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 p-4 sm:p-6 lg:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: sectionFilled.map((ok, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("h-1.5 w-8 rounded-full transition-colors", ok ? "bg-primary" : "bg-muted") }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
          filledCount,
          " of ",
          sectionFilled.length,
          " sections filled"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { number: "01", title: "Drug & Indication", filled: sectionFilled[0], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { children: "Brand name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.brandName, onChange: (e) => set("brandName", e.target.value), placeholder: "e.g. Dupixent", className: "text-sm" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { children: "Generic / INN name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.genericName, onChange: (e) => set("genericName", e.target.value), placeholder: "e.g. dupilumab", className: "text-sm" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { children: "Mechanism of action" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.mechanismOfAction, onChange: (e) => set("mechanismOfAction", e.target.value), placeholder: "e.g. IL-4/IL-13 receptor antagonist", className: "text-sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { children: "Primary indication" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.indication, onChange: (e) => set("indication", e.target.value), placeholder: "e.g. Moderate-to-severe atopic dermatitis", className: "text-sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { children: "Regulatory status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pills, { options: ["Phase II", "Phase III", "NDA / BLA Filed", "FDA Approved — Pre-launch", "FDA Approved — Launched"], value: form.regulatoryStatus, onChange: (v) => set("regulatoryStatus", v) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { number: "02", title: "Therapeutic Area & Patient Population", filled: sectionFilled[1], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { children: "Therapeutic area" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pills, { options: ["Oncology", "Rare Disease", "Neurology", "Cardiology", "Immunology", "Endocrinology", "Infectious Disease", "Dermatology"], value: form.therapeuticArea, onChange: (v) => set("therapeuticArea", v) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { children: "Target patient population" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.patientPopulation, onChange: (e) => set("patientPopulation", e.target.value), placeholder: "e.g. Adult patients with relapsed/refractory AML", className: "text-sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { children: "US prevalence estimate" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.prevalenceEstimate, onChange: (e) => set("prevalenceEstimate", e.target.value), placeholder: "e.g. ~15,000 patients/year", className: "text-sm" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { children: "Rare disease?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pills, { options: ["Yes", "No", "Unknown"], value: form.rareDisease, onChange: (v) => set("rareDisease", v) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { number: "03", title: "Competitive Landscape", filled: sectionFilled[2], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldLabel, { children: [
            "Known competitors ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "normal-case font-normal text-muted-foreground/60", children: "(press Enter after each)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TagInput, { tags: form.competitors, onChange: (v) => set("competitors", v), placeholder: "Type a drug name and press Enter…" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { children: "Current market leader" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.marketLeader, onChange: (e) => set("marketLeader", e.target.value), placeholder: "e.g. Opdivo (nivolumab)", className: "text-sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { children: "Competitive positioning" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pills, { options: ["First-in-class", "Best-in-class", "Me-too / Parity", "Niche / Orphan", "Differentiated mechanism"], value: form.competitivePositioning, onChange: (v) => set("competitivePositioning", v) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { number: "04", title: "Launch Timeline & Milestones", filled: sectionFilled[3], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { children: "Expected US launch date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.launchDate, onChange: (e) => set("launchDate", e.target.value), placeholder: "e.g. Q3 2026", className: "text-sm" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { children: "Commercial stage" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pills, { options: ["Pre-launch > 12 mo", "Pre-launch < 12 mo", "Launch year", "Post-launch"], value: form.commercialStage, onChange: (v) => set("commercialStage", v) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldLabel, { children: [
            "Key milestones ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "normal-case font-normal text-muted-foreground/60", children: "(press Enter after each)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TagInput, { tags: form.keyMilestones, onChange: (v) => set("keyMilestones", v), placeholder: "e.g. PDUFA date, label negotiations, KOL advisory board…" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { number: "05", title: "Commercial Goals & Field Force", filled: sectionFilled[4], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldLabel, { children: [
            "Target HCP specialties ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "normal-case font-normal text-muted-foreground/60", children: "(press Enter after each)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TagInput, { tags: form.targetSpecialties, onChange: (v) => set("targetSpecialties", v), placeholder: "e.g. Hematologists, Neurologists…" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { children: "Geographic focus" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pills, { options: ["National", "Northeast", "Southeast", "Midwest", "Southwest", "West", "Key markets only"], value: form.geographicFocus, onChange: (v) => set("geographicFocus", v) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { children: "Field force model" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pills, { options: ["Specialty sales force", "Primary care sales force", "Hybrid (specialty + PC)", "MSL-only", "Not yet determined"], value: form.fieldForceModel, onChange: (v) => set("fieldForceModel", v) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { children: "Initial rep count target" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.repCountTarget, onChange: (e) => set("repCountTarget", e.target.value), placeholder: "e.g. 50–75", className: "text-sm" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { children: "Target deployment year" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.deploymentYear, onChange: (e) => set("deploymentYear", e.target.value), placeholder: "e.g. 2026", className: "text-sm" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleAnalyze, disabled: !canAnalyze || isAnalyzing, size: "lg", className: "gap-2", children: isAnalyzing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
          "Analyzing…"
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
          "Analyze with Claude",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
        ] }) }),
        !canAnalyze && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Fill at least 2 sections to enable analysis" })
      ] }),
      (isAnalyzing || rawResponse) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-primary/20 bg-primary/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-primary/10 px-5 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-primary", children: "Claude's Analysis" }),
            isAnalyzing && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] text-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" })
              ] }),
              "Streaming"
            ] }),
            !isAnalyzing && projectId && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-[10px] text-green-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3" }),
              " Saved · ",
              projectId.slice(0, 8)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowRaw((s) => !s), className: "text-[10px] text-muted-foreground hover:text-foreground", children: showRaw ? "Hide raw" : "Show raw" })
        ] }),
        showRaw && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: responseRef, className: "max-h-64 overflow-y-auto px-5 py-4 font-mono text-xs leading-relaxed text-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-pre-wrap", children: rawResponse }),
          isAnalyzing && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-pulse", children: "▌" })
        ] }),
        !isAnalyzing && rawResponse && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-4", children: !recommendations ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleParseRecommendations, className: "flex items-center gap-1.5 text-xs text-primary hover:underline", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
          " Extract structured recommendations"
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Pre-seeded recommendations for downstream skills" }),
          recommendations.strategic_summary && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/80 italic", children: recommendations.strategic_summary }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(RecommendationCard, { icon: Target, title: "Targeting", color: "border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RecRow, { label: "Market type", value: recommendations.for_targeting?.market_type }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(RecRow, { label: "Priority metrics", value: recommendations.for_targeting?.recommended_metric_priority_order }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(RecRow, { label: "Rationale", value: recommendations.for_targeting?.rationale })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(RecommendationCard, { icon: Users, title: "Sizing", color: "border-purple-200 bg-purple-50 dark:border-purple-900 dark:bg-purple-950/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RecRow, { label: "Classification", value: recommendations.for_sizing?.market_classification }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(RecRow, { label: "Rep count range", value: recommendations.for_sizing?.recommended_rep_count_range }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(RecRow, { label: "Field force model", value: recommendations.for_sizing?.field_force_model_recommendation }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(RecRow, { label: "Rationale", value: recommendations.for_sizing?.rationale })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(RecommendationCard, { icon: Map, title: "Alignment", color: "border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RecRow, { label: "Territory design", value: recommendations.for_alignment?.territory_design_philosophy }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(RecRow, { label: "Territory count", value: recommendations.for_alignment?.territory_count_estimate }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(RecRow, { label: "Workload tolerance", value: recommendations.for_alignment?.workload_tolerance_pct != null ? `±${recommendations.for_alignment.workload_tolerance_pct}%` : void 0 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(RecRow, { label: "Rationale", value: recommendations.for_alignment?.rationale })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 pt-1 border-t border-border/50 mt-2", children: [
            !saved ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => setSaved(true), className: "gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-3.5 w-3.5" }),
              "Save context"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 rounded-lg border border-green-200 bg-green-50 px-3 py-1.5 text-xs font-medium text-green-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 text-green-600" }),
              "Saved"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: handleDownloadJson, disabled: !rawResponse.includes('"project_context"'), className: "gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3.5 w-3.5" }),
              "Download JSON"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: () => navigate({
              to: "/pipeline"
            }), className: "gap-2 ml-auto", children: [
              "Continue to Targeting",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "w-full text-[10px] text-muted-foreground font-mono", children: [
              "Project ID: ",
              projectId?.slice(0, 12)
            ] })
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  ContextPage as component
};

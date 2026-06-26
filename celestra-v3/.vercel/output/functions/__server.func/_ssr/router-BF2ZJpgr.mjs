import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { Q as redirect } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { r as readSync, u as utils } from "../_libs/xlsx.mjs";
import { C as ClipboardList, T as Target, a as ChartColumn, M as Map, X, b as Menu } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function CelestraLogo({ className }) {
  const uid = reactExports.useId().replace(/:/g, "");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className, viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: `${uid}a`, x1: "0%", y1: "100%", x2: "100%", y2: "0%", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#0A1E78" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "#1A56DB" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#06B6D4" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: `${uid}b`, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#818CF8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#E0D7FF" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "20", cy: "20", r: "16", stroke: `url(#${uid}a)`, strokeWidth: "2.5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 10 24 A 10 10 0 0 1 30 16", stroke: "#1A56DB", strokeWidth: "1.5", strokeLinecap: "round", opacity: "0.7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M20 14 L21.3 18.7 L26 20 L21.3 21.3 L20 26 L18.7 21.3 L14 20 L18.7 18.7 Z",
        fill: `url(#${uid}b)`
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "20", cy: "4", r: "2", fill: "#06B6D4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "34", cy: "16", r: "1.5", fill: "#06B6D4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "30", cy: "33", r: "1.5", fill: "#1A56DB" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "8", cy: "28", r: "1.5", fill: "#1A56DB" })
  ] });
}
const nav = [
  { to: "/context", label: "Project Context", icon: ClipboardList, skill: "project-context-gathering" },
  { to: "/pipeline", label: "Targeting", icon: Target, skill: "targeting-rare-skill" },
  { to: "/sizing", label: "Sizing", icon: ChartColumn, skill: "sizing-skill" },
  { to: "/alignment", label: "Alignment", icon: Map, skill: "zip-based-alignment" }
];
function AppShell({ children }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = reactExports.useState(false);
  const navList = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden whitespace-nowrap pb-2 pl-4 text-[10px] font-medium uppercase tracking-[0.14em] text-white/50 transition-opacity duration-200 lg:opacity-0 lg:group-hover:opacity-100", children: "Modules" }),
    nav.map((item) => {
      const active = pathname === item.to;
      const Icon = item.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: item.to,
          onClick: () => setOpen(false),
          className: cn(
            "mb-1 flex items-center overflow-hidden rounded-md py-2.5 transition-colors",
            active ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-white/80 hover:bg-white/5 hover:text-white"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-16 shrink-0 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden whitespace-nowrap pr-3 transition-opacity duration-200 lg:opacity-0 lg:group-hover:opacity-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: item.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-mono text-white/45", children: item.skill })
            ] })
          ]
        },
        item.to
      );
    })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-screen w-full overflow-hidden bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-border bg-sidebar px-4 py-3 text-sidebar-foreground lg:hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CelestraLogo, { className: "h-7 w-7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold tracking-widest", children: "CELESTRA" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setOpen((o) => !o),
          className: "rounded-md p-1.5 hover:bg-white/10",
          "aria-label": "Toggle navigation",
          children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "aside",
      {
        className: cn(
          "group fixed inset-y-0 left-0 z-30 flex shrink-0 flex-col bg-sidebar text-sidebar-foreground",
          "overflow-x-hidden transition-[width] duration-300 ease-in-out",
          "w-64 lg:w-16 lg:hover:w-64",
          "lg:static lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center border-b border-white/10 py-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-16 shrink-0 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CelestraLogo, { className: "h-9 w-9" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden whitespace-nowrap pr-3 transition-opacity duration-200 lg:opacity-0 lg:group-hover:opacity-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold tracking-widest text-white", children: "CELESTRA" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.14em] text-white/60", children: "Pharma Intelligence" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex-1 overflow-x-hidden overflow-y-auto py-4", children: navList }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden whitespace-nowrap px-5 text-[10px] text-white/50 transition-opacity duration-200 lg:opacity-0 lg:group-hover:opacity-100", children: "Skill-driven · sendPrompt() bridge" }) })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        onClick: () => setOpen(false),
        className: "fixed inset-0 z-20 bg-black/40 lg:hidden",
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 min-w-0 flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "hidden lg:flex items-center justify-between bg-white px-6 py-3.5 border-b border-gray-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CelestraLogo, { className: "h-8 w-8 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-bold tracking-widest text-[oklch(0.32_0.18_265)]", children: "CELESTRA" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-300 select-none", children: "|" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-500 font-light", children: "The intelligence layer for pharma commercial" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-mono text-gray-400 tracking-wider", children: "V1.0 · procDNA Analytics" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex items-center justify-between bg-slate-50 px-6 py-1.5 text-[11px] font-mono text-gray-400 tracking-wider border-b border-gray-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ANALYTICS PLATFORM · Project Context · Targeting · Sizing · Alignment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AUTO-REFRESH ON LOAD" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 min-w-0 overflow-y-auto pt-14 lg:pt-0", children })
    ] })
  ] });
}
const WorkbookCtx = reactExports.createContext(null);
const LS_KEY = "procdna-workbooks-v1";
const LS_SEL = "procdna-workbook-selection-v1";
const PREVIEW_ROW_LIMIT = 200;
const PREVIEW_COL_LIMIT = 30;
async function parseExcelFile(file) {
  const buf = await file.arrayBuffer();
  const wb = readSync(buf, { type: "array" });
  const sheets = wb.SheetNames.map((name) => {
    const ws = wb.Sheets[name];
    const raw = utils.sheet_to_json(ws, {
      header: 1,
      blankrows: false,
      defval: null
    });
    const rows = raw.slice(0, PREVIEW_ROW_LIMIT).map((r) => Array.isArray(r) ? r.slice(0, PREVIEW_COL_LIMIT) : []);
    return { name, rows };
  });
  return {
    id: crypto.randomUUID(),
    name: file.name,
    source: "uploaded",
    createdAt: Date.now(),
    sheets
  };
}
function WorkbookProvider({ children }) {
  const [workbooks, setWorkbooks] = reactExports.useState([]);
  const [selectionByModule, setSelection] = reactExports.useState({});
  reactExports.useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) setWorkbooks(JSON.parse(raw));
      const sel = localStorage.getItem(LS_SEL);
      if (sel) setSelection(JSON.parse(sel));
    } catch {
    }
  }, []);
  reactExports.useEffect(() => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(workbooks));
    } catch {
    }
  }, [workbooks]);
  reactExports.useEffect(() => {
    try {
      localStorage.setItem(LS_SEL, JSON.stringify(selectionByModule));
    } catch {
    }
  }, [selectionByModule]);
  const add = reactExports.useCallback((wb) => {
    setWorkbooks((arr) => [wb, ...arr]);
  }, []);
  const remove = reactExports.useCallback((id) => {
    setWorkbooks((arr) => arr.filter((w) => w.id !== id));
    setSelection((s) => {
      const next = { ...s };
      for (const k of Object.keys(next)) if (next[k] === id) next[k] = void 0;
      return next;
    });
  }, []);
  const getById = reactExports.useCallback((id) => workbooks.find((w) => w.id === id), [workbooks]);
  const selectForModule = reactExports.useCallback((module, id) => {
    setSelection((s) => ({ ...s, [module]: id }));
  }, []);
  const value = reactExports.useMemo(
    () => ({ workbooks, add, remove, getById, selectionByModule, selectForModule }),
    [workbooks, add, remove, getById, selectionByModule, selectForModule]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(WorkbookCtx.Provider, { value, children });
}
function useWorkbooks() {
  const ctx = reactExports.useContext(WorkbookCtx);
  if (!ctx) throw new Error("useWorkbooks must be used within WorkbookProvider");
  return ctx;
}
const appCss = "/assets/styles-BkofWl_9.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$6 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "procDNA · Pharma Analytics" },
      { name: "description", content: "Skill-driven HCP targeting, field force sizing, and territory alignment." },
      { name: "author", content: "procDNA" },
      { property: "og:title", content: "procDNA · Pharma Analytics" },
      { property: "og:description", content: "Skill-driven HCP targeting, field force sizing, and territory alignment." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$6.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(WorkbookProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "top-right" })
  ] }) });
}
const $$splitComponentImporter$5 = () => import("./sizing-Bpy-60dm.mjs");
const Route$5 = createFileRoute("/sizing")({
  head: () => ({
    meta: [{
      title: "Sizing · Celestra"
    }, {
      name: "description",
      content: "Field force sizing — EDA, scenario analysis, and rep-count recommendation."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./pipeline-BQnvxUeX.mjs");
const Route$4 = createFileRoute("/pipeline")({
  head: () => ({
    meta: [{
      title: "Pipeline · Celestra"
    }, {
      name: "description",
      content: "Project context gathering and HCP targeting pipeline."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./library-DHWsCdbE.mjs");
const Route$3 = createFileRoute("/library")({
  head: () => ({
    meta: [{
      title: "Workbook Library · procDNA"
    }, {
      name: "description",
      content: "Shared store for uploaded and exported analytics workbooks."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./context-CYXDKXpG.mjs");
const Route$2 = createFileRoute("/context")({
  head: () => ({
    meta: [{
      title: "Project Context · Celestra"
    }, {
      name: "description",
      content: "Capture drug, market, and commercial details before running skills."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./alignment-CnTf5pLk.mjs");
const Route$1 = createFileRoute("/alignment")({
  head: () => ({
    meta: [{
      title: "Alignment · Celestra"
    }, {
      name: "description",
      content: "Territory alignment strategy — geographic EDA, COE mapping, and territory design recommendation."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-BTU5dmpx.mjs");
const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({
      to: "/pipeline"
    });
  },
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SizingRoute = Route$5.update({
  id: "/sizing",
  path: "/sizing",
  getParentRoute: () => Route$6
});
const PipelineRoute = Route$4.update({
  id: "/pipeline",
  path: "/pipeline",
  getParentRoute: () => Route$6
});
const LibraryRoute = Route$3.update({
  id: "/library",
  path: "/library",
  getParentRoute: () => Route$6
});
const ContextRoute = Route$2.update({
  id: "/context",
  path: "/context",
  getParentRoute: () => Route$6
});
const AlignmentRoute = Route$1.update({
  id: "/alignment",
  path: "/alignment",
  getParentRoute: () => Route$6
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  AlignmentRoute,
  ContextRoute,
  LibraryRoute,
  PipelineRoute,
  SizingRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  cn as c,
  parseExcelFile as p,
  router as r,
  useWorkbooks as u
};

import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function PageHeader({
  eyebrow,
  title,
  description,
  actions
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "border-b border-border bg-card px-4 py-5 sm:px-6 lg:px-8 lg:py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground", children: eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-1 text-xl font-semibold tracking-tight text-foreground sm:text-2xl", children: title }),
      description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 max-w-2xl text-sm text-muted-foreground", children: description })
    ] }),
    actions && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-2 sm:shrink-0", children: actions })
  ] }) });
}
export {
  PageHeader as P
};

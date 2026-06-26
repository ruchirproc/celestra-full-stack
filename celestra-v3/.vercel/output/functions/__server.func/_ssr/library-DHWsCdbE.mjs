import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-VAH6eLWf.mjs";
import { B as Button } from "./button-CtByUnye.mjs";
import { u as useWorkbooks, c as cn, p as parseExcelFile } from "./router-BF2ZJpgr.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { U as Upload, F as FileSpreadsheet, E as EyeOff, f as Eye, g as Trash2 } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/tailwind-merge.mjs";
import "../_libs/xlsx.mjs";
function SheetPreviewTable({ sheets }) {
  const [active, setActive] = reactExports.useState(0);
  if (!sheets.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border border-dashed border-border bg-muted/30 p-6 text-center text-xs text-muted-foreground", children: "No sheets found." });
  }
  const sheet = sheets[active] ?? sheets[0];
  const header = sheet.rows[0] ?? [];
  const body = sheet.rows.slice(1, 26);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-md border border-border bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 border-b border-border bg-muted/30 px-2 py-1.5", children: sheets.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setActive(i),
        className: cn(
          "rounded px-2.5 py-1 text-[11px] font-medium transition-colors",
          i === active ? "bg-foreground text-background" : "text-muted-foreground hover:bg-background hover:text-foreground"
        ),
        children: s.name
      },
      s.name + i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-80 overflow-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "sticky top-0 bg-muted/60 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-10 border-b border-r border-border px-2 py-1.5 text-[10px] font-mono text-muted-foreground", children: "#" }),
        header.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "th",
          {
            className: "whitespace-nowrap border-b border-r border-border px-2 py-1.5 font-semibold text-foreground",
            children: String(h ?? "")
          },
          i
        ))
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: body.map((row, ri) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "odd:bg-background even:bg-muted/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border-b border-r border-border px-2 py-1 text-[10px] font-mono text-muted-foreground", children: ri + 2 }),
        header.map((_, ci) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "td",
          {
            className: "whitespace-nowrap border-b border-r border-border px-2 py-1 tabular-nums",
            children: row[ci] === null || row[ci] === void 0 ? "" : String(row[ci])
          },
          ci
        ))
      ] }, ri)) })
    ] }) })
  ] });
}
function LibraryPage() {
  const {
    workbooks,
    add,
    remove
  } = useWorkbooks();
  const [openId, setOpenId] = reactExports.useState(null);
  const [busy, setBusy] = reactExports.useState(false);
  const handleUpload = async (files) => {
    if (!files?.length) return;
    setBusy(true);
    try {
      for (const f of Array.from(files)) {
        const wb = await parseExcelFile(f);
        add(wb);
      }
      toast.success(`Added ${files.length} file(s) to library`);
    } catch (e) {
      toast.error("Could not parse", {
        description: e.message
      });
    } finally {
      setBusy(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Module 04 · workbook-library", title: "Workbook Library", description: "Central store for uploaded inputs and module exports. Output of one module can be reused as input to another.", actions: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "inline-flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", multiple: true, accept: ".xlsx,.xls,.csv", className: "sr-only", onChange: (e) => handleUpload(e.target.files) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "mr-2 h-4 w-4" }),
        busy ? "Adding…" : "Add workbook"
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 sm:p-6 lg:p-8", children: workbooks.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border-2 border-dashed border-border bg-card p-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { className: "mx-auto h-8 w-8 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-sm font-semibold", children: "No workbooks yet" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Upload an Excel file or run an export from any module — it will appear here." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: workbooks.map((w) => {
      const open = openId === w.id;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("grid h-9 w-9 shrink-0 place-items-center rounded-md", w.source === "exported" ? "bg-success/10 text-success" : "bg-foreground text-background"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-sm font-semibold", children: w.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-mono uppercase tracking-wider text-muted-foreground", children: [
                w.source,
                w.module ? ` · from ${w.module}` : "",
                " · ",
                w.sheets.length,
                " sheet",
                w.sheets.length === 1 ? "" : "s",
                " ·",
                " ",
                new Date(w.createdAt).toLocaleString()
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: () => setOpenId(open ? null : w.id), children: [
              open ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "mr-1.5 h-3.5 w-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "mr-1.5 h-3.5 w-3.5" }),
              open ? "Hide" : "Preview"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => remove(w.id), title: "Delete from library", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5 text-destructive" }) })
          ] })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border p-3 sm:p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SheetPreviewTable, { sheets: w.sheets }) })
      ] }, w.id);
    }) }) })
  ] });
}
export {
  LibraryPage as component
};

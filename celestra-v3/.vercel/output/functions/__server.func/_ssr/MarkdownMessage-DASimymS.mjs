import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-BF2ZJpgr.mjs";
import { M as Markdown } from "../_libs/react-markdown.mjs";
import { r as remarkGfm } from "../_libs/remark-gfm.mjs";
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
function MarkdownMessage({ content, streaming }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        "prose-sm w-full text-sm leading-relaxed",
        streaming && "after:ml-0.5 after:animate-pulse after:content-['▌']"
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Markdown,
        {
          remarkPlugins: [remarkGfm],
          components: {
            // ── Headings ────────────────────────────────────────────────────
            h1: ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 mb-2 text-base font-bold text-foreground border-b border-border pb-1.5", children }),
            h2: ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 mb-2 text-[15px] font-bold text-foreground border-b border-border pb-1", children }),
            h3: ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 mb-1.5 text-sm font-semibold text-foreground", children }),
            h4: ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-3 mb-1 text-sm font-medium text-foreground", children }),
            // ── Paragraphs ───────────────────────────────────────────────────
            p: ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 last:mb-0 leading-relaxed text-foreground/90", children }),
            // ── Inline text ──────────────────────────────────────────────────
            strong: ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-semibold text-foreground", children }),
            em: ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-foreground/80", children }),
            // ── Code ─────────────────────────────────────────────────────────
            pre: ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-3 overflow-x-auto rounded-md border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "bg-slate-900 text-slate-100 px-4 py-3 text-[11px] font-mono leading-relaxed", children }) }),
            code: ({ className, children }) => {
              const isBlock = Boolean(className) || String(children).includes("\n");
              if (isBlock) {
                return /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: cn("font-mono", className), children });
              }
              return /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "bg-muted/80 text-foreground px-1.5 py-0.5 rounded text-[11px] font-mono", children });
            },
            // ── Lists ────────────────────────────────────────────────────────
            ul: ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "my-2 space-y-0.5 list-disc list-outside pl-5", children }),
            ol: ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "my-2 space-y-0.5 list-decimal list-outside pl-5", children }),
            li: ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-sm leading-relaxed text-foreground/90", children }),
            // ── Tables ───────────────────────────────────────────────────────
            table: ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-4 overflow-x-auto rounded-md border border-border shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "w-full border-collapse text-xs", children }) }),
            thead: ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/70 text-foreground", children }),
            tbody: ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border bg-background", children }),
            tr: ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "transition-colors hover:bg-muted/40", children }),
            th: ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border-b border-border px-3 py-2 text-left text-[10px] font-semibold uppercase tracking-wider text-muted-foreground", children }),
            td: ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-foreground/90 align-top", children }),
            // ── Dividers ─────────────────────────────────────────────────────
            hr: () => /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "my-5 border-border" }),
            // ── Blockquote ───────────────────────────────────────────────────
            blockquote: ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "my-3 border-l-[3px] border-primary/50 pl-4 text-sm italic text-muted-foreground", children })
          },
          children: content
        }
      )
    }
  );
}
export {
  MarkdownMessage as M,
  Textarea as T
};

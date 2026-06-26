import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";

interface MarkdownMessageProps {
  content: string;
  streaming?: boolean;
}

export function MarkdownMessage({ content, streaming }: MarkdownMessageProps) {
  return (
    <div
      className={cn(
        "prose-sm w-full text-sm leading-relaxed",
        streaming && "after:ml-0.5 after:animate-pulse after:content-['▌']",
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // ── Headings ────────────────────────────────────────────────────
          h1: ({ children }) => (
            <h1 className="mt-5 mb-2 text-base font-bold text-foreground border-b border-border pb-1.5">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="mt-5 mb-2 text-[15px] font-bold text-foreground border-b border-border pb-1">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-4 mb-1.5 text-sm font-semibold text-foreground">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="mt-3 mb-1 text-sm font-medium text-foreground">{children}</h4>
          ),

          // ── Paragraphs ───────────────────────────────────────────────────
          p: ({ children }) => (
            <p className="mb-2 last:mb-0 leading-relaxed text-foreground/90">{children}</p>
          ),

          // ── Inline text ──────────────────────────────────────────────────
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
          em: ({ children }) => <em className="italic text-foreground/80">{children}</em>,

          // ── Code ─────────────────────────────────────────────────────────
          pre: ({ children }) => (
            <div className="my-3 overflow-x-auto rounded-md border border-border">
              <pre className="bg-slate-900 text-slate-100 px-4 py-3 text-[11px] font-mono leading-relaxed">
                {children}
              </pre>
            </div>
          ),
          code: ({ className, children }) => {
            const isBlock = Boolean(className) || String(children).includes("\n");
            if (isBlock) {
              return <code className={cn("font-mono", className)}>{children}</code>;
            }
            return (
              <code className="bg-muted/80 text-foreground px-1.5 py-0.5 rounded text-[11px] font-mono">
                {children}
              </code>
            );
          },

          // ── Lists ────────────────────────────────────────────────────────
          ul: ({ children }) => (
            <ul className="my-2 space-y-0.5 list-disc list-outside pl-5">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="my-2 space-y-0.5 list-decimal list-outside pl-5">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-sm leading-relaxed text-foreground/90">{children}</li>
          ),

          // ── Tables ───────────────────────────────────────────────────────
          table: ({ children }) => (
            <div className="my-4 overflow-x-auto rounded-md border border-border shadow-sm">
              <table className="w-full border-collapse text-xs">{children}</table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-muted/70 text-foreground">{children}</thead>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-border bg-background">{children}</tbody>
          ),
          tr: ({ children }) => (
            <tr className="transition-colors hover:bg-muted/40">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="border-b border-border px-3 py-2 text-left text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-3 py-2 text-foreground/90 align-top">{children}</td>
          ),

          // ── Dividers ─────────────────────────────────────────────────────
          hr: () => <hr className="my-5 border-border" />,

          // ── Blockquote ───────────────────────────────────────────────────
          blockquote: ({ children }) => (
            <blockquote className="my-3 border-l-[3px] border-primary/50 pl-4 text-sm italic text-muted-foreground">
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

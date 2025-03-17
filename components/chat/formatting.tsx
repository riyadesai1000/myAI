import { DisplayMessage } from "@/types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CitationCircle } from "@/components/chat/citation"; // Ensure this path is correct

// Updated renderCitations function that prevents duplicate citation tooltips.
export function renderCitations(content: React.ReactNode, citations?: any[]) {
  if (!citations || citations.length === 0) return content;

  // Create a set to track processed citation indexes
  const processed = new Set<number>();

  if (typeof content === "string") {
    return content.split(/(\[\d+\])/g).map((part, index) => {
      const match = part.match(/\[(\d+)\]/);
      if (match) {
        const citationIndex = parseInt(match[1], 10) - 1;
        // If already processed, render citation number in bold without tooltip
        if (processed.has(citationIndex)) {
          return (
            <span key={index} className="font-bold">
              [{citationIndex + 1}]
            </span>
          );
        }
        processed.add(citationIndex);
        const citation = citations[citationIndex];
        return (
          <CitationCircle
            key={index}
            number={citationIndex + 1}
            citation={citation}
          />
        );
      }
      return part;
    });
  }
  return content;
}

export function Formatting({ message }: { message: DisplayMessage }) {
  const processedContent = message.content;

  const components = {
    code: ({ children, className, node, ...rest }: any) => {
      const match = /language-(\w+)/.exec(className || "");
      return match ? (
        <SyntaxHighlighter
          {...rest}
          PreTag="div"
          className="rounded-xl"
          children={String(children).replace(/\n$/, "")}
          language={match[1]}
        />
      ) : (
        <code {...rest} className={className}>
          {children}
        </code>
      );
    },
    p: ({ children }: { children: React.ReactNode }) => {
      return <p>{renderCitations(children, message.citations)}</p>;
    },
    strong: ({ children }: { children: React.ReactNode }) => {
      return <strong>{renderCitations(children, message.citations)}</strong>;
    },
    li: ({ children }: { children: React.ReactNode }) => {
      return <li>{renderCitations(children, message.citations)}</li>;
    },
  };

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={components as any}
      className="gap-3 flex flex-col"
    >
      {processedContent}
    </ReactMarkdown>
  );
}



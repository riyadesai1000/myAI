import { DisplayMessage } from "@/types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CitationCircle } from "@/components/chat/citation"; // adjust path as needed

// Updated renderCitations function that replaces markers like [1] with CitationCircle components
export function renderCitations(content: React.ReactNode, citations?: any[]) {
  if (!citations || citations.length === 0) return content;

  if (typeof content === "string") {
    return content.split(/(\[\d+\])/g).map((part, index) => {
      const match = part.match(/\[(\d+)\]/);
      if (match) {
        const citationIndex = parseInt(match[1], 10) - 1;
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
  // Optionally, you can preprocess LaTeX if needed:
  const processedContent = message.content;

  const components = {
    code: ({ children, className, ...rest }: any) => {
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



"use client";

import { useState, useEffect } from "react";
import ChatInput from "@/components/chat/input";
import ChatMessages from "@/components/chat/messages";
import useApp from "@/hooks/use-app";
import ChatHeader from "@/components/chat/header";
import { getFrameLink } from "@/lib/frameUtils";

export default function Chat() {
  const {
    messages,
    handleInputChange,
    handleSubmit,
    input,
    isLoading,
    indicatorState,
    clearMessages,
  } = useApp();

  // State for the query that detects frame references
  const [query, setQuery] = useState("");
  // State to store frame links based on detected frame names
  const [frameLinks, setFrameLinks] = useState<Array<{ frame: string; link: string }>>([]);

  // List of valid frame names (must match the keys in getFrameLink)
  const validFrames = [
    "Gillian",
    "Daisy",
    "Durand",
    "Bodie",
    "Crane",
    "Percey",
    "Esme",
    "Chamberlain",
    "Hayden",
  ];

  // Update frameLinks when the query changes
  useEffect(() => {
    const lowerCaseQuery = query.toLowerCase();
    const matches = validFrames.filter((frame) =>
      lowerCaseQuery.includes(frame.toLowerCase())
    );
    const links = matches.map((frame) => ({
      frame,
      link: getFrameLink(frame),
    }));
    setFrameLinks(links);
  }, [query]);

  return (
    <>
      <ChatHeader clearMessages={clearMessages} />
      <div className="min-h-screen w-full bg-gradient-to-b from-blue-50 via-blue-300 to-blue-50 text-gray-900">
        <div className="flex flex-col justify-center items-center min-h-screen pt-16 px-5">
          <ChatMessages messages={messages} indicatorState={indicatorState} />
          
          {/* Input to type a query that might reference a frame */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask about a frame..."
            className="w-full max-w-md p-2 border border-gray-300 rounded mb-4"
          />

          {/* Display clickable links for any detected frame names */}
          {frameLinks.length > 0 &&
            frameLinks.map(({ frame, link }) => (
              <div key={frame} className="mt-4">
                <h3 className="text-xl font-bold">{frame}</h3>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  View {frame} on Warby Parker
                </a>
              </div>
            ))}
        </div>
      </div>
      <ChatInput
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        input={input}
        isLoading={isLoading}
      />
    </>
  );
}

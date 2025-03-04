"use client";

import { useState, useEffect } from "react";
import ChatInput from "@/components/chat/input";
import ChatMessages from "@/components/chat/messages";
import useApp from "@/hooks/use-app";
import ChatHeader from "@/components/chat/header";
import { getFrameImage } from "@/lib/frameUtils";

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

  // New state for frame query functionality
  const [query, setQuery] = useState("");
  const [frameImages, setFrameImages] = useState<Array<{ frame: string; url: string }>>([]);

  // List of valid frame names
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

  // useEffect to detect frame names in the query and update the images
  useEffect(() => {
    const lowerCaseQuery = query.toLowerCase();
    const matches = validFrames.filter((frame) =>
      lowerCaseQuery.includes(frame.toLowerCase())
    );
    const images = matches.map((frame) => ({
      frame,
      url: getFrameImage(frame),
    }));
    setFrameImages(images);
  }, [query]);

  return (
    <>
      <ChatHeader clearMessages={clearMessages} />
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col max-w-screen-lg w-full h-full p-5">
          <ChatMessages messages={messages} indicatorState={indicatorState} />
          
          {/* Insert the Frame Query Section */}
          <div style={{ marginTop: "2rem" }}>
            <h2>Ask About a Warby Parker Frame</h2>
            <p>
              Type a question that references a frame. For example, try:
              <br />
              <em>"Can you show me what Durand and Daisy look like?"</em>
            </p>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask about a frame..."
              style={{
                padding: "0.5rem",
                fontSize: "1rem",
                width: "100%",
                maxWidth: "600px",
                marginBottom: "1rem",
              }}
            />
            {frameImages.length > 0 &&
              frameImages.map(({ frame, url }) => (
                <div key={frame} style={{ marginTop: "1rem" }}>
                  <h3>{frame}</h3>
                  <img src={url} alt={`Preview of ${frame}`} style={{ maxWidth: "400px" }} />
                </div>
              ))}
          </div>
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

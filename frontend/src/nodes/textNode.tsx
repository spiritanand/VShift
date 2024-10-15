// textNode.js

import { useState, useEffect, useRef, useMemo } from "react";
import { Label } from "../components/ui/Label";
import { Textarea } from "../components/ui/Textarea";
import { BlockNode } from "./BlockNode";

const variableRegex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

export const TextNode = ({ id, data }: { id: string; data: { id: string; text: string } }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const hiddenTextRef = useRef<HTMLSpanElement>(null);

  // Adjust textarea size
  useEffect(() => {
    if (textareaRef.current && hiddenTextRef.current) {
      // Adjust height
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;

      // Adjust width (max 400px, min 200px to make it readable)
      hiddenTextRef.current.textContent = currText;
      const width = Math.min(400, Math.max(200, hiddenTextRef.current.offsetWidth + 20));
      textareaRef.current.style.width = `${width}px`;
    }
  }, [currText]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrText(e.target.value);
  };

  const targetHandles = useMemo(() => {
    const matches = currText.match(variableRegex);
    return matches ? Array.from(new Set(matches.map((match) => match.slice(2, -2).trim()))) : [];
  }, [currText]);

  return (
    <BlockNode label="Text" id={id} sourceHandles={["source"]} targetHandles={targetHandles}>
      <div className="relative">
        <Label htmlFor={`text-input-${id}`} className="sr-only">
          Enter Text:
        </Label>
        <Textarea
          id={`text-input-${id}`}
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          className="resize-none overflow-hidden min-h-[60px] min-w-[200px] max-w-[400px]"
          rows={1}
        />
        <span
          ref={hiddenTextRef}
          className="absolute opacity-0 pointer-events-none whitespace-pre"
          style={{
            font: "inherit",
            padding: "inherit",
            border: "inherit",
            position: "absolute",
            left: "-9999px",
          }}
        />
      </div>
    </BlockNode>
  );
};

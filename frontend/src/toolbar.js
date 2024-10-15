// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="note" label="Note" />
        <DraggableNode type="transform" label="Transform" />
        <DraggableNode type="save" label="Save" />
        <DraggableNode type="summarizer" label="Summarize" />
        <DraggableNode type="megaInput" label="Mega Input" />
      </div>
    </div>
  );
};

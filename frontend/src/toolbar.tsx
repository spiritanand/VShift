import {
  Brain,
  ChevronsLeftRightEllipsis,
  FileInput,
  LogOut,
  NotebookPen,
  Save,
  Scale3d,
  TextCursorInput,
  Volleyball,
} from "lucide-react";
import { DraggableNode } from "./draggableNode";

interface ToolbarItem {
  type: string;
  label: string;
  icon: React.ReactNode;
  description: string;
}

const toolbarItems: ToolbarItem[] = [
  { type: "customInput", label: "Input", icon: <FileInput />, description: "Input text or a file" },
  { type: "customOutput", label: "Output", icon: <LogOut />, description: "Render output" },
  { type: "llm", label: "LLM", icon: <Brain />, description: "Connect to an LLM" },
  { type: "text", label: "Text", icon: <TextCursorInput />, description: "Add text" },
  { type: "note", label: "Note", icon: <NotebookPen />, description: "Add a note" },
  { type: "transform", label: "Transform", icon: <Scale3d />, description: "Transform data" },
  { type: "save", label: "Save", icon: <Save />, description: "Save pipeline" },
  {
    type: "summarizer",
    label: "Summarize",
    icon: <Volleyball />,
    description: "Summarize pipeline from multiple inputs",
  },
  {
    type: "megaInput",
    label: "Mega Input",
    icon: <ChevronsLeftRightEllipsis />,
    description: "Mega Input DAMN!",
  },
];

export function PipelineToolbar() {
  return (
    <div className="mt-5 flex flex-wrap gap-2.5 container items-center justify-center">
      {toolbarItems.map((item) => (
        <DraggableNode
          key={item.type}
          type={item.type}
          label={item.label}
          icon={item.icon}
          description={item.description}
        />
      ))}
    </div>
  );
}

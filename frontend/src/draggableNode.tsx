// draggableNode.js

import { TooltipContent, TooltipTrigger } from "./components/ui/Tooltip";
import { Tooltip } from "./components/ui/Tooltip";
import { TooltipProvider } from "./components/ui/Tooltip";

interface DraggableNodeProps {
  type: string;
  label: string;
  icon: React.ReactNode;
  description: string;
}

export function DraggableNode({ type, label, icon, description }: DraggableNodeProps) {
  function onDragStart(event, nodeType: string) {
    const appData = { nodeType };
    event.currentTarget.style.cursor = "grabbing";
    event.dataTransfer.setData("application/reactflow", JSON.stringify(appData));
    event.dataTransfer.effectAllowed = "move";
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={`flex flex-col items-center justify-center p-2 rounded-lg bg-gray-800 cursor-grab hover:bg-gray-700 transition-colors duration-200 w-20 h-20`}
            onDragStart={(event) => onDragStart(event, type)}
            onDragEnd={(event) => (event.currentTarget.style.cursor = "grab")}
            draggable
          >
            <div className="text-3xl mb-1 text-white">{icon}</div>
            <span className="text-xs text-white text-center">{label}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

// BlockNode.js

import { Handle, Position } from "reactflow";

export const BlockNode = ({
  id,
  label,
  children,
  targetHandles = [],
  sourceHandles = [],
}: {
  id: string;
  label: string;
  children: React.ReactNode;
  targetHandles?: string[];
  sourceHandles?: string[];
}) => {
  const calculateHandlePosition = (index: number, total: number) => {
    // Calculate the percentage for each handle
    const step = 100 / (total + 1);
    return `${step * (index + 1)}%`;
  };

  return (
    <div style={{ width: 200, height: 80, border: "1px solid black" }}>
      {targetHandles.map((handle, index) => (
        <Handle
          key={handle}
          type="target"
          position={Position.Left}
          id={`${id}-${handle}`}
          style={{ top: calculateHandlePosition(index, targetHandles.length) }}
        />
      ))}
      <div>
        <span>{label}</span>
      </div>
      <div>{children}</div>
      {sourceHandles.map((handle, index) => (
        <Handle
          key={handle}
          type="source"
          position={Position.Right}
          id={`${id}-${handle}`}
          style={{ top: calculateHandlePosition(index, sourceHandles.length) }}
        />
      ))}
    </div>
  );
};

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
    <div className="bg-white border border-gray-300 rounded-md p-4 hover:border-gray-400 active:bg-gray-100 transition-colors duration-150 hover:shadow-md">
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
        <h5 className="text-sm font-medium text-gray-900">{label}</h5>
      </div>
      <div className=" text-gray-700">{children}</div>
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

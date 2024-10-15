// Save pipeline

import { BlockNode } from "./BlockNode";

export const SaveNode = ({ id }: { id: string }) => {
  const handleSave = () => {
    console.log("Save");
  };

  return (
    <BlockNode label="Save" id={id}>
      <button onClick={handleSave}>Save</button>
    </BlockNode>
  );
};

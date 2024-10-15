// Save pipeline

import { Button } from "../components/ui/Button";
import { BlockNode } from "./BlockNode";

export const SaveNode = ({ id }: { id: string }) => {
  const handleSave = () => {
    console.log("Save");
  };

  return (
    <BlockNode label="Save" id={id}>
      <Button variant="action" onClick={handleSave}>
        Save
      </Button>
    </BlockNode>
  );
};

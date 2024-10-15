// outputNode.js

import { useState } from "react";
import { BlockNode } from "./BlockNode";
import { Input } from "../components/ui/Input";
import { Label } from "../components/ui/Label";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BlockNode label="Output" id={id} targetHandles={["target"]}>
      <div className="flex flex-col gap-2">
        <Label className="flex flex-row items-center gap-2">
          Name:
          <Input type="text" value={currName} onChange={handleNameChange} />
        </Label>
        <Label>
          Type:
          <select value={outputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </Label>
      </div>
    </BlockNode>
  );
};

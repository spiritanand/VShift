// inputNode.js

import { useState } from "react";
import { Label } from "../components/ui/Label";
import { BlockNode } from "./BlockNode";
import { Input } from "../components/ui/Input";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace("customInput-", "input_"));
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BlockNode label="Input" id={id} sourceHandles={["source"]}>
      <div className="flex flex-col gap-2 mt-4">
        <Label className="flex flex-row items-center gap-2">
          Name:
          <Input type="text" value={currName} onChange={handleNameChange} />
        </Label>
        <Label>
          Type:
          <select value={inputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </Label>
      </div>
    </BlockNode>
  );
};

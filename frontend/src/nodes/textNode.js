// textNode.js

import { useState } from "react";
import { Label } from "../components/ui/Label";
import { Input } from "../components/ui/Input";
import { BlockNode } from "./BlockNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BlockNode label="Text" id={id} sourceHandles={["source"]}>
      <div>
        <Label>
          Text:
          <Input value={currText} onChange={handleTextChange} />
        </Label>
      </div>
    </BlockNode>
  );
};

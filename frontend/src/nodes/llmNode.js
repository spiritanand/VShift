// llmNode.js

import { BlockNode } from "./BlockNode";

export const LLMNode = ({ id }) => {
  return (
    <BlockNode
      label="LLM"
      id={id}
      sourceHandles={["source"]}
      targetHandles={["target1", "target2"]}
    >
      <p>This is a LLM.</p>
    </BlockNode>
  );
};

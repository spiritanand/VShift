// Summarize data from multiple sources

import { BlockNode } from "./BlockNode";

export const SummarizerNode = ({ id }: { id: string }) => {
  return (
    <BlockNode
      label="Summarize"
      id={id}
      targetHandles={["target1", "target2", "target3"]}
      sourceHandles={["source"]}
    >
      <p>Summarize data from multiple sources</p>
    </BlockNode>
  );
};

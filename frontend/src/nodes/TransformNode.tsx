// Transform data

import { BlockNode } from "./BlockNode";

export const TransformNode = ({ id }) => {
  return (
    <BlockNode label="Transform" id={id} targetHandles={["target"]} sourceHandles={["source"]}>
      <p>Function to TRANSFORM ⬛️</p>
    </BlockNode>
  );
};

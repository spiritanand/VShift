import { useState } from "react";
import { BlockNode } from "./BlockNode";
import { Input } from "../components/ui/Input";

export const MegaInput = ({ id }: { id: string }) => {
  const [value, setValue] = useState("");

  return (
    <BlockNode label="Mega Input" id={id} sourceHandles={["source"]}>
      <Input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    </BlockNode>
  );
};

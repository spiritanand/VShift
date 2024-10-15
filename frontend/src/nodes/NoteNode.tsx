// Simple node to add notes to the pipeline

import { useState } from "react";
import { BlockNode } from "./BlockNode";
import { Textarea } from "../components/ui/Textarea";

export const NoteNode = ({ id }: { id: string }) => {
  const [note, setNote] = useState("");

  return (
    <BlockNode label="Note" id={id}>
      <Textarea value={note} onChange={(e) => setNote(e.target.value)} />
    </BlockNode>
  );
};

// submit.js

import { useState } from "react";
import { Button } from "./components/ui/Button";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import { Loader2 } from "lucide-react";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { nodes, edges } = useStore(selector, shallow);
  console.log({ nodes, edges });

  async function handleSubmit() {
    try {
      setIsSubmitting(true);
      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const result = await response.json();
      const message = `Number of nodes: ${result.num_nodes}\nNumber of edges: ${result.num_edges}\nIs DAG: ${result.is_dag}`;
      alert(message);
    } catch (error) {
      console.error("Error submitting pipeline:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex justify-center items-center">
      <Button variant="action" type="submit" onClick={handleSubmit} disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            Submitting <Loader2 className="animate-spin ml-2" />
          </>
        ) : (
          "Submit"
        )}
      </Button>
    </div>
  );
};

// submit.js

import { Button } from "./components/ui/Button";

export const SubmitButton = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Button variant="action" type="submit">
        Submit
      </Button>
    </div>
  );
};

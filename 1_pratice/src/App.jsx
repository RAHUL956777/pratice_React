import { useState } from "react";
import "./index.css"
import Counter from "./Counter.jsx";

function App() {
  const [state, setState] = useState(true);

  return (
    <>
      <button style={{ margin: "15px" }} onClick={(e) => setState(!state)}>
        Toggel
      </button>
      {state ? <Counter /> : ""}
    </>
  );
}

export default App;

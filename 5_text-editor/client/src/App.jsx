import React from "react";
import TextEditor from "./TextEditor";
import "./styles.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={`/documents/${uuidv4()}`} />} />
        <Route path="/documents/:id" element={<TextEditor />} />
      </Routes>
    </Router>
  );
};

export default App;

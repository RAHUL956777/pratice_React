import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Internatinal from "./pages/International.jsx";
import India from "./pages/India.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route exact path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/international-holiday" element={<Internatinal />} />
      <Route path="/hotel" element={<India />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

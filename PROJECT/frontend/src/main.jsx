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
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route exact path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route
            exact
            path="/international-holiday"
            element={<Internatinal />}
          />
          <Route exact path="/hotel" element={<India />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

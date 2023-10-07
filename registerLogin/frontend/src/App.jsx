import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  const [user, setLoginUser] = useState({});

  return (
    <>
      <Routes>
        <Route exact path="/">
          {user && user._id ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/" element={<Login setLoginUser={setLoginUser} />} />
          )}
        </Route>
        <Route path="/login" element={<Login />} setLoginUser={setLoginUser} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

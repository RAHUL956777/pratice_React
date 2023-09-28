import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import {Header,Footer} from "./components";
// import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispacth = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispacth(login({ userData }));
        } else {
          dispacth(logout());
        }
      })
      .finally(() => setLoading(false));
  });

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : (null)
}

export default App;

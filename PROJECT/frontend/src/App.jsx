import "./App.css";
import Nav from "./pages/Nav.jsx";
import Navicon from "./pages/Navicon.jsx";
import Footer from "./pages/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Navicon />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

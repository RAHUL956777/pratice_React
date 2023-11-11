import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Offers from "./components/Offers";
import data from  "./data/data.json";
import Heading from "./components/Heading";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer}/>
      <Heading text="STAR PRODUCTS"/>
    </Router>
  );
}

export default App;

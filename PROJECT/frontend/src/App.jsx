import "./App.css";
import Header from "./components/Header";
// import Home from "./pages/Home";
import Card from "./components/Card";
import img1 from "./assets/images/img1.jpg";

function App() {
  const cardsData = [
          {
            img: img1,
            savings: "Save INR 30,000",
            destanition: "GOA",
            details:"starting price",
            price: " ₹22500"
          },
        ]
  
  return (
    <>
    <Header />
      {/* <Home /> */}
      <Card {...cardsData[0]} />
    </>
  );
}

export default App;

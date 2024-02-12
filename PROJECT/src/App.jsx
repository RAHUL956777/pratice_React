import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Card
        img={
          "https://images.unsplash.com/photo-1648881974371-e481ca83dc57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFrc2hhZHdlZXB8ZW58MHx8MHx8fDA%3D"
        }
        description="LAKSHADWEEP"
        price="₹30,000"
        btntext="Explore"
      />
    </>
  );
}

export default App;

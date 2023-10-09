import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/products");
        console.log(res.data);
        setProducts(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    })();
    
  }, []);

  if (error) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <>
      <h1>React App</h1>
      <h2>Number of Products are: {products.length}</h2>
    </>
  );
}

export default App;

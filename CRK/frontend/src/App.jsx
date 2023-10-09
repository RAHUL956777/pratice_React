import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  // const [products,error,loading] = customReactQuery("/api/products");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search,setSearch] = useState("")

  useEffect(() => {
    const controller = new AbortController();//it is used to delete the previous request;
    (async () => {
      try {
        setLoading(true);
        const res = await axios.get('/api/products?search='+search,{
          signal:controller.signal,
        });
        console.log(res.data);
        setProducts(res.data);
        setLoading(false);
      } catch (error) {
        if(axios.isCancel(error)){
          console.log('Request canceled',error.message);
          return ;
        }
        console.log(error);
        setError(true);
        setLoading(false);
      }
    })();

    // cleenup code
    return()=>{
      controller.abort();
    }
  }, [search]);

  // if (error) {
  //   return <h1>Something went wrong</h1>;
  // }

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }



  return (
    <>
      <h1>React App</h1>

      <input type="text" 
      placeholder="Search"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}

      />

      {loading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong</h1>}
      <h2>Number of Products are: {products.length}</h2>
    </>
  );
}

export default App;

// custom rtk
// const customReactQuery = (urlPath) => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     (async () => {
//       try {
//         setLoading(true);
//         const res = await axios.get(urlPath);
//         console.log(res.data);
//         setProducts(res.data);
//         setLoading(false);
//       } catch (error) {
//         console.log(error);
//         setError(true);
//         setLoading(false);
//       }
//     })();
//   }, []);
//   return [products, error, loading];
// };

import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/data").then((res) => {
      setData(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  });


  return <>
      <h1>Learning how to fecth data</h1>
      {
        data.map((item)=>(
          <div key={item.id}>
              <h1>{item.name}</h1>
              <h2>{item.address}</h2>
          </div>
        ))
      }
  </>;
}

export default App;

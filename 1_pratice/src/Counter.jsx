import React,{useState,useEffect} from 'react'
import "./index.css"

const Counter = () => {


    const [number, setNumber] = useState(0);

  // this useEffect will coll when component is mounting
  useEffect(() => {
    console.log("component mounting");


    // this function will run when the component is unmounting
    return function(){
        console.log("unmounting sucessfully")
    }
  }, []);

  // this useEffect hook will call when component is in updating state

  useEffect(() => {
    console.log("useEffect is calling sucessfully while updating of number");
  }, [number]);

  const handleIncr = () => {
    setNumber(number + 1);
  };

  const handleDecr = () => {
    setNumber(number - 1);
  };


  return (
    <div className="wrapper">
        <p>Example of UseEffect</p>
        <button onClick={handleIncr}>Increment</button>
        <p>{number}</p>
        <button onClick={handleDecr}>Decrement</button>
      </div>
  )
}

export default Counter

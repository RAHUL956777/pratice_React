import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx'
// import "./index.css";

function MyApp() {
  return (
    <div>
      <h1>Custom react</h1>
    </div>
  );
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   children: "click me to visit google",
// }

const anotherElement = (
  <a href="https://google.com" target="_blank" rel="noreferrer">
    Visit google
  </a>
);

// this is custom react function that is used to render react element in behanind the scene (bable)react this is for a tag.
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank", rel: "noreferrer" },
  "Visit goole"
);
 

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);

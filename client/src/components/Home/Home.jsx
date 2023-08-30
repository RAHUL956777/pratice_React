import React from "react";
import "./Home.css";
import Card from "../card/card";

const Home = () => {
  return (
    <div className="main">
      <Card
        imageUrl="https://images.unsplash.com/photo-1682686581312-506a8b53190e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        description="
      Water, the elixir of life, flows with an eternal rhythm that sustains our world. Its tranquil surface reflects the boundless sky, a mirror for the heavens above."
      />
      <Card
        imageUrl="https://images.unsplash.com/photo-1683057983275-cd724cf11a92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
        description="Nature, the canvas upon which life unfolds, is a masterpiece of intricate design and boundless creativity. "
      />
      <Card
        imageUrl="https://images.unsplash.com/photo-1693287528551-b3c3a6b28843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        description="Nature is not merely a backdrop; it's a teacher, a healer, and a source of wonder"
      />
      <Card
        imageUrl="https://images.unsplash.com/photo-1693245601085-5271ed3261e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        description="with every blooming flower and every star-studded night sky, nature beckons us to appreciate its grandeur and tread lightly upon its sacred ground."
      />
    </div>
  );
};

export default Home;

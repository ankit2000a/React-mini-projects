import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

import Data from "./Data.js";
import "../src/App.css";

export default function App() {
  const card = Data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.img}
        rating={item.rating}
        reviewCount={item.reviewCount}
        country={item.country}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    );
  });

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section>{card}</section>
    </div>
  );
}

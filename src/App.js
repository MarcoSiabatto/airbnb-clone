import React from "react";
// COMPONENTS
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

// DATA
import dataArray from "./data";

export default function App() {
  const cards = dataArray.map((data) => {
    return <Card key={data.id} {...data} />;
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

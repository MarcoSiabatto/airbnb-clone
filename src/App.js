import React from "react";
// COMPONENTS
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
//import Contact from "./components/Contact";
// IMAGES
//import Whiskers from "./images/cats/mr-whiskerson.png";
//import Fluffy from "./images/cats/fluffykins.png";
//import Felix from "./images/cats/felix.png";
//import Pumpkin from "./images/cats/pumpkin.png";
// DATA
import dataArray from "./data";

export default function App() {
  const cards = dataArray.map((data) => {
    return (
      <Card
        key={data.id}
        title={data.title}
        description={data.description}
        price={data.price}
        coverImg={data.coverImg}
        rating={data.stats.rating}
        reviewCount={data.stats.reviewCount}
        location={data.location}
        openSpots={data.openSpots}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

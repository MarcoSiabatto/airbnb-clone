import React from "react";
// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Contact from "./components/Contact";
// Images
import Katie from "./images/katie-zaferes.png";
import Whiskers from "./images/cats/mr-whiskerson.png";
import Fluffy from "./images/cats/fluffykins.png";
import Felix from "./images/cats/felix.png";
import Pumpkin from "./images/cats/pumpkin.png";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card
        img={Katie}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
      <Contact
        img={Whiskers}
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img={Fluffy}
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img={Felix}
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        img={Pumpkin}
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  );
}

import React from "react";
import Grid from "../images/photo-grid.png";

export default function Hero() {
  return (
    <section className="hero">
      <img src={Grid} alt="photoGrid" />
      <h2>
        <b>Online Experiences</b>
      </h2>
      <p>
        Join unique activities led by one-of-a-kind hosts--all without leaving
        home.
      </p>
    </section>
  );
}

import React from "react";
import Katie from "../images/katie-zaferes.png";
import Star from "../images/star.png";

const Card = () => {
  return (
    <div className="card border-0">
      <img src={Katie} alt="Katie-zaferes" className="card--image" />
      <div className="card--stats">
        <img src={Star} alt="star" className="card--star" />
        <span>5.0</span>
        <span className="gray">(6) * </span>
        <span className="gray">USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
};

export default Card;

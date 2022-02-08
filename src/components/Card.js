import React from "react";
import Star from "../images/star.png";

const Card = (props) => {
  return (
    <div className="card border-0">
      <img src={props.coverImg} alt="cover-img" className="card--image" />
      <div className="card--stats">
        <img src={Star} alt="star" className="card--star" />
        &nbsp;
        <span>{props.rating}&nbsp;</span>
        <span className="gray">({props.reviewCount}) * &nbsp;</span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p>
        <span className="bold card--price">From ${props.price}</span> / person
      </p>
    </div>
  );
};

export default Card;

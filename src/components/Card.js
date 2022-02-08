import React from "react";
import Star from "../images/star.png";

const Card = (props) => {
  let badgeTxt;
  if (props.openSpots === 0) {
    badgeTxt = "Sold Out";
  } else if (props.location === "Online") {
    badgeTxt = "Online";
  }

  return (
    <div className="card border-0">
      {badgeTxt && <div className="card--badge">{badgeTxt}</div>}
      <img src={props.coverImg} alt="cover-img" className="card--image" />
      <div className="card--stats">
        <img src={Star} alt="star" className="card--star" />
        &nbsp;
        <span>{props.stats.rating}&nbsp;</span>
        <span className="gray">({props.stats.reviewCount}) &bull; &nbsp;</span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p>
        <span className="bold card--price">From ${props.price}</span> /
        person
      </p>
    </div>
  );
};

export default Card;

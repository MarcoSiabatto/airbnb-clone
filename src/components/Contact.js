import React from "react";
import PhoneIcon from "../images/cats/phone-icon.png";
import MailIcon from "../images/cats/mail-icon.png";

const Contact = (props) => {
  return (
    <div className="contact-card card border-0">
      <img src={props.img} alt="profilePic" className="card--image" />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src={PhoneIcon} alt="phone-icon" />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src={MailIcon} alt="mail-icon" />
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import { SocialIcon } from "react-social-icons";
import Logo from "../images/airbnb-logo.png";

const Navbar = () => {
  return (
    <nav>
      <img src={Logo} alt="airbnb" />
      <SocialIcon url="https://github.com/MarcoSiabatto/airbnb-clone" />
    </nav>
  );
};

export default Navbar;

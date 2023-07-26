import React from "react";
import "./Header.css";
// import logo from "./icon_assets/Logo.svg"; // Replace with the path to your logo file
import logo from "./icons_assets/Logo.svg";

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" />
    </header>
  );
}

export default Header;

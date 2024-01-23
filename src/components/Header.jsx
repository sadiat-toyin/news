import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import openIcon from "../assets/images/icon-menu.svg";
import menuCloseIcon from "../assets/images/icon-menu-close.svg";

export default function Header() {
  const [navDisplay, setNavDisplay] = useState(false);
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const openNav = () => {
    setNavDisplay(true);
  };
  const closeNav = () => {
    setNavDisplay(false);
  };
  //window.onresize = () =>
  return (
    <header className="flex">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>

      <nav className={deviceWidth < 600 && navDisplay ? "open" : ""}>
        <img
          src={menuCloseIcon}
          alt="close-menu"
          id="menuCloseIcon"
          onClick={closeNav}
        />
        <ul>
          <li>
            <a href="/">Home</a>{" "}
          </li>
          <li>
            <a href="/">News</a>
          </li>
          <li>
            <a href="/">Popular</a>
          </li>
          <li>
            {" "}
            <a href="/">Trending</a>{" "}
          </li>
          <li>
            {" "}
            <a href="/">Categories</a>{" "}
          </li>
        </ul>
      </nav>
      <img src={openIcon} alt="menu" onClick={openNav} id="menuIcon" />
    </header>
  );
}

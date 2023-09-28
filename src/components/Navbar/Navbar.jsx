/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Navbar.css";
import background from "./background.png";
import logo from "./logo.png";
import menuIcon from "./menuIcon.png";
import closeIcon from "./closeIcon.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="w-screen z-1000 mt-8 lg:mt-12 h-[60px] navbar relative flex justify-around items-center">
      <img src={background} className="h-full w-full absolute " alt="" />
      <div className="z-10 ms-20 hidden lg:block">
        <a className="link" href="/">
          Events
        </a>
        <a className="link" href="/">
          Sponsors
        </a>
        <a className="link" href="/">
          Schedule
        </a>
      </div>
      <div
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
        className="menu-btn block lg:hidden z-20 me-12"
      >
        <img src={menuOpen ? closeIcon : menuIcon} alt="" />
      </div>

      {/* LOGO */}
      <img src={logo} className="z-10 w-[180px] lg:w-[220px]" alt="" />
      <div className="z-10 me-20 hidden lg:flex">
        <a className="link" href="/">
          Team
        </a>
        <a className="link" href="/">
          FAQs
        </a>
        <a className="link" href="/">
          T&C
        </a>
        <a href="/" className="frame-wrapper">
          <div className="sign-in-wrapper">
            <div className="sign-in">SIGN IN</div>
          </div>
        </a>
      </div>
      <a href="/" className="frame-wrapper block lg:hidden me-5">
        <div className="sign-in-wrapper">
          <div className="sign-in">SIGN IN</div>
        </div>
      </a>
    </div>
  );
}

export default Navbar;

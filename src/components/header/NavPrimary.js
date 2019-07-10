import React from "react";

const NavPrimary = () => {
  return (
    <nav aria-labelledby="primary-navigation" className="nav-primary">
      <ul>
        <li>
          <a href="#home">home</a>
        </li>
        <li>
          <a href="#service">service</a>
        </li>
        <li className="dropdown">
          <a className="dropbtn">works</a>
          <div className="dropdown-content">
            <a href="#">all</a>
            <a href="#">graphic</a>
            <a href="#">design</a>
            <a href="#">logo</a>
            <a href="#">website</a>
          </div>
        </li>
        <li>
          <a href="#about">about me</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavPrimary;

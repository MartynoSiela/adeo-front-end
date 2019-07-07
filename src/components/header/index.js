import React from "react";

import "../../styles/elements/header.scss";

import NavPrimary from "./NavPrimary";
import NavMenu from "./NavMenu";
import Logo from "./Logo";

const index = () => {
  return (
    <header className="header-main">
      <NavMenu />
      <Logo />
      <NavPrimary />
    </header>
  );
};

export default index;

import React from "react";

import "../../styles/elements/footer.scss";

import Logo from "../global/Logo";
import Nav from "./Nav";

const index = () => {
  return (
    <footer className="footer-main">
      <div className="footer-main__content">
        <p>
          Ad in cillum nisi ex amet sint ex nulla. Adipisicing nisi consequat
          anim id consectetur incididunt cillum ea. Quis exercitation ullamco
          qui labore et mollit do pariatur labore pariatur consequat eiusmod.
        </p>
      </div>
      <Nav />
      <div className="footer-main__copyright">
        <span>© </span>
        <Logo />
        <span> All rights reserved</span>
      </div>
    </footer>
  );
};

export default index;

import React from "react";

import "../../styles/elements/footer.scss";

import NavPrimary from "./NavPrimary";

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
      <NavPrimary />
      <div className="footer-main__copyright">
        <span>©</span>
        <span> LOGO </span>
        <span>All rights reserved</span>
      </div>
    </footer>
  );
};

export default index;

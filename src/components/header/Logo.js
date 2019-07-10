import React from "react";

const Logo = () => {
  const styleBold = { fontWeight: "bold" };
  const styleSlim = { fontWeight: "lighter" };
  const style = {
    textTransform: "uppercase",
    padding: "0.5rem 0rem"
  };
  return (
    <a className="logo" style={style}>
      <span className="logo__text--bold" style={styleBold}>
        demo
      </span>
      <span className="logo__text--regular" style={styleSlim}>
        site
      </span>
    </a>
  );
};

export default Logo;

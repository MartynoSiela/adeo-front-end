import React from "react";

const ArticleTitleH1 = ({ classname, text }) => {
  return (
    <div className={classname}>
      <h1 className={classname + "-text"}>{text}</h1>
      <div className={classname + "-mark"}>-</div>
    </div>
  );
};

export default ArticleTitleH1;

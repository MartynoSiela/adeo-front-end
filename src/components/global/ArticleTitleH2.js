import React from "react";

const ArticleTitleH2 = ({ classname, text }) => {
  return (
    <div className={classname}>
      <h2 className={classname + "-text"}>{text}</h2>
    </div>
  );
};

export default ArticleTitleH2;

import React from "react";

const ArticleButton = ({ classname, text }) => {
  return (
    <a className={classname} href="#">
      {text}
    </a>
  );
};

export default ArticleButton;

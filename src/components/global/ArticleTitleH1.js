import React from "react";

const ArticleTitleH1 = ({ classname, text, textColor }) => {
  const styleText = { color: textColor };
  const styleMark = { backgroundColor: textColor };

  return (
    <div className={classname}>
      <h1 className={classname + "-text"} style={styleText}>
        {text}
      </h1>
      <div className={classname + "-mark"} style={styleMark}>
        -
      </div>
    </div>
  );
};

export default ArticleTitleH1;

import React from "react";

const TitleH1 = ({ classname, text, textColor }) => {
  const styleText = {
    color: textColor,
    paddingBottom: "1.5rem",
    textTransform: "uppercase",
    fontSize: "3rem"
  };
  const styleMark = {
    backgroundColor: textColor,
    marginBottom: "1.5rem",
    width: "5rem",
    height: "0.5rem"
  };

  return (
    <div className={classname}>
      <h1 className={classname + "-text"} style={styleText}>
        {text}
      </h1>
      <div className={classname + "-mark"} style={styleMark} />
    </div>
  );
};

export default TitleH1;

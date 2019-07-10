import React from "react";

const TitleH2 = ({ classname, text }) => {
  const style = { textTransform: "uppercase", paddingBottom: "1rem" };
  return (
    <div className={classname}>
      <h2 className={classname + "-text"} style={style}>
        {text}
      </h2>
    </div>
  );
};

export default TitleH2;

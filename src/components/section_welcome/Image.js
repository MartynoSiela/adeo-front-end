import React, { lazy, Suspense } from "react";
import Img from "../../assets/bender_w800px.jpg";

const loading = () => {
  <p>Loading</p>;
};

const Image = () => {
  return (
    <Suspense fallback={loading()}>
      <img
        className="article-right__background-image"
        src={Img}
        alt="Background Image"
      />
    </Suspense>
  );
};

export default Image;

import React from "react";

import "../../styles/elements/section_webdev.scss";

import ArticleLeft from "./ArticleLeft";
import ArticleRight from "./ArticleRight";

const Section = () => {
  return (
    <section className="section-webdev">
      <ArticleLeft />
      <ArticleRight />
    </section>
  );
};

export default Section;

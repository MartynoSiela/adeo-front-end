import React from "react";

import "../../styles/elements/section_welcome.scss";

import ArticleLeft from "./ArticleLeft";
import ArticleRight from "./ArticleRight";

const Section = () => {
  return (
    <section className="section-welcome">
      <ArticleLeft />
      <ArticleRight />
    </section>
  );
};

export default Section;

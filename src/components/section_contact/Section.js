import React from "react";

import "../../styles/elements/section_contact.scss";

import ArticleLeft from "./ArticleLeft";
import ArticleRight from "./ArticleRight";

const Section = () => {
  return (
    <section className="section-contact">
      <ArticleLeft />
      <ArticleRight />
    </section>
  );
};

export default Section;

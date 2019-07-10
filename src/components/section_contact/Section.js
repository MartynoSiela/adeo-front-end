import React from "react";

import "../../styles/elements/section_contact.scss";

import Title from "../global/TitleH1";
import ArticleLeft from "./ArticleLeft";
import ArticleRight from "./ArticleRight";

const Section = () => {
  return (
    <section className="section-contact">
      <Title
        classname="section-contact__title"
        text="contact"
        textColor="black"
      />

      <ArticleLeft />
      <ArticleRight />
    </section>
  );
};

export default Section;

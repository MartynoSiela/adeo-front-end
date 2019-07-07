import React from "react";

import Title from "../global/ArticleTitleH1";
import Button from "../global/ArticleButton";

const ArticleLeft = () => {
  return (
    <article className="article-left">
      <Title classname="article-left__title" text="welcome" textColor="white" />
      <p className="article-left__content">
        Voluptate quis voluptate est ad exercitation excepteur consequat officia
        consectetur mollit consequat proident nulla. Magna fugiat fugiat dolore
        ad eu pariatur occaecat et commodo voluptate sit ut id.
      </p>
      <Button classname="article-left__button" text="learn more" />
    </article>
  );
};

export default ArticleLeft;

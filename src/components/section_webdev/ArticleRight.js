import React from "react";

import Title from "../global/TitleH2";
import Fetch from "./Fetch";

const ArticleRight = () => {
  return (
    <article className="article-right">
      <div className="article-right__intro-content">
        <Title classname="article-right__title" text="wireframe" />
        <p>
          Non ea magna laboris laboris labore quis qui id ullamco nostrud cillum
          et.
        </p>
      </div>
      <div className="article-right__main-content">
        <div className="article-right__main-content--left">
          <Fetch />
        </div>
        <div className="article-right__main-content--right">
          <h3>Web Development</h3>
          <p>
            Aute ad occaecat Lorem incididunt nisi sit veniam sunt labore aliqua
            fugiat dolore. Id Lorem dolor ex sunt irure eu dolore eiusmod irure
            consequat do deserunt.
          </p>
        </div>
      </div>
    </article>
  );
};

export default ArticleRight;

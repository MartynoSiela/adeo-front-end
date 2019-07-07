import React from "react";

import Title from "../global/ArticleTitleH2";
import Image from "../../assets/bender_original.jpg";

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
          <h3>Customer List</h3>
          <h4>Some heading</h4>
          <ul>
            <li>
              <span>item1</span>
            </li>
            <li>
              <span>item2</span>
            </li>
            <li>
              <span>item3</span>
            </li>
            <li>
              <span>item4</span>
            </li>
          </ul>
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

import React from "react";

import Image from "./Image";
import Title from "../global/TitleH2";

const ArticleRight = () => {
  return (
    <article className="article-right">
      <Image />
      <div className="article-right__content">
        <Title classname="article-right__title" text="ui/ux design" />
        <p>
          Dolore tempor enim et cillum esse reprehenderit pariatur consequat ex
          reprehenderit eu incididunt. Reprehenderit ad consequat deserunt
          excepteur dolore ipsum.
        </p>
        <p>
          Cillum duis do tempor velit eu adipisicing ea commodo. Qui et tempor
          minim irure nisi cillum excepteur laborum.
        </p>
      </div>
    </article>
  );
};

export default ArticleRight;

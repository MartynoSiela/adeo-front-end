import React from "react";

import Button from "../global/Button";

const ArticleRight = () => {
  return (
    <article className="article-right">
      <form className="article-right__form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="user_name" />
        </div>
        <div>
          <label htmlFor="mail">E-mail:</label>
          <input
            type="email"
            id="mail"
            name="user_mail"
            placeholder="bendebeni@plan"
          />
        </div>
        <div>
          <label htmlFor="msg">Message:</label>
          <textarea id="msg" name="user_message" />
        </div>
        <Button
          colorDefault="white"
          colorClicked="lightgrey"
          colorText="var(--colorBlue)"
          text="send"
        />
      </form>
    </article>
  );
};

export default ArticleRight;

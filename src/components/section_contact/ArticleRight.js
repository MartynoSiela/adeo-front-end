import React from "react";

const ArticleRight = () => {
  return (
    <article className="article-right">
      <form className="article-right__form">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" name="user_name" />
        </div>
        <div>
          <label for="mail">E-mail:</label>
          <input
            type="email"
            id="mail"
            name="user_mail"
            placeholder="bendebeni@plan"
          />
        </div>
        <div>
          <label for="msg">Message:</label>
          <textarea id="msg" name="user_message" />
        </div>
        <div class="button">
          <button type="button">Send your message</button>
        </div>
      </form>
    </article>
  );
};

export default ArticleRight;

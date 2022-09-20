import React from "react";

function Article({ promo }) {
  const {
    name,
    description,
    heroImageUrl,
    termsAndConditionsButtonText,
    joinNowButtonText,
  } = promo;

  function clicked(str) {
    console.log("Clicked " + str);
  }

  return (
    <article className="article_flexbox">
      <div className="article_name">{name}</div>

      <img src={heroImageUrl} alt="Promo Hero"></img>
      <div className="article_description">{description}</div>

      <div className="article_flexbox_buttons">
        <button className="article_toc" onClick={() => clicked("toc")}>
          {termsAndConditionsButtonText}
        </button>
        <button className="article_join" onClick={() => clicked("join")}>
          {joinNowButtonText}
        </button>
      </div>
    </article>
  );
}

export default Article;

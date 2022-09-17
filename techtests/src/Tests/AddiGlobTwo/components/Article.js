import React from "react";

function Article({ promo }) {
  const {
    name,
    description,
    heroImageUrl,
    termsAndConditionsButtonText,
    joinNowButtonText,
  } = promo;
  return (
    <article className="article_flexbox">
      <div className="article_name">{name}</div>

      <img src={heroImageUrl} alt="Promo Hero"></img>
      <div className="article_description">{description}</div>

      <div className="article_flexbox-buttons">
        <button>{termsAndConditionsButtonText}</button>
        <button>{joinNowButtonText}</button>
      </div>
    </article>
  );
}

export default Article;

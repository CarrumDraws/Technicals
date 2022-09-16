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
    <article>
      {name}
      <img src={heroImageUrl} alt="Promo Hero"></img>
      {description}
      <br />
      <button>{termsAndConditionsButtonText}</button>
      <button>{joinNowButtonText}</button>
    </article>
  );
}

export default Article;

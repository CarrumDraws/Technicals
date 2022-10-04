import React from "react";

function SkeletonArticle() {
  return (
    <article className="skele_article_flexbox">
      <div className="skele_article_name" />

      <div className="skele_img" />
      <div className="skele_article_description" />
      <div className="skele_article_description" />
      <div className="skele_article_description" />

      <div className="article_flexbox_buttons">
        <div className="skele_article_toc" />
        <div className="skele_article_join" />
      </div>
    </article>
  );
}

export default SkeletonArticle;

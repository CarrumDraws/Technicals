import React from "react";
import Article from "./Article";
import SkeletonArticle from "./SkeletonArticle";

function Body({ currPromos }) {
  console.log(currPromos.length);
  return (
    <div className="body_flexbox_promo">
      {currPromos.length > 0
        ? currPromos.map((promo) => <Article key={promo.id} promo={promo} />)
        : [...Array(4)].map((e, i) => <SkeletonArticle />)}
    </div>
  );
}

export default Body;

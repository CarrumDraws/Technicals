import React from "react";
import Article from "./Article";

function Body({ currPromos }) {
  return (
    <div className="body_flexbox_promo">
      {currPromos.map((promo) => (
        <Article key={promo.id} promo={promo} />
      ))}
    </div>
  );
}

export default Body;

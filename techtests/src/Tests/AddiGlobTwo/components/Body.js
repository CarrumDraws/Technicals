import React from "react";
import Article from "./Article";

function Body({ currPromos, toggleStatus }) {
  return (
    <div>
      <div className="body_flexbox_status">
        <button onClick={() => toggleStatus("all")}> All Promotions </button>
        <button onClick={() => toggleStatus("new")}> New Customers </button>
      </div>

      <div className="body_flexbox_promo">
        {currPromos.map((promo) => (
          <Article key={promo.id} promo={promo} />
        ))}
      </div>
    </div>
  );
}

export default Body;

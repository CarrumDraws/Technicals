import React from "react";

function PromoToggle({ toggleStatus }) {
  return (
    <>
      <div className="toggle_sticky">
        <div className="toggle_flexbox_status">
          <button onClick={() => toggleStatus("all")}> All Promotions </button>
          <button onClick={() => toggleStatus("new")}> New Customers </button>
        </div>
        <div className="toggle_grad" />
      </div>
    </>
  );
}

export default PromoToggle;

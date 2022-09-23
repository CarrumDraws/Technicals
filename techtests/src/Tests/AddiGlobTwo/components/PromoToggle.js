import React from "react";

function PromoToggle({ status, toggleStatus }) {
  return (
    <>
      <div className="toggle_sticky">
        <div className="toggle_flexbox_status">
          <a
            onClick={() => toggleStatus("all")}
            className={status === "all" ? "underline" : ""}
          >
            {" "}
            All Promotions{" "}
          </a>
          <a
            onClick={() => toggleStatus("new")}
            className={status === "new" ? "underline" : ""}
          >
            {" "}
            New Customers{" "}
          </a>
        </div>
        <div className="toggle_grad" />
      </div>
    </>
  );
}

export default PromoToggle;

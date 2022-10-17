import React, { useState, useEffect } from "react";
import "./B.css";

function B() {
  const [eleA, setEleA] = useState();
  const [anchorA, setAnchorA] = useState();

  // 1. Get Elements
  useEffect(() => {
    console.log("Getting Element A");
    setEleA(document.getElementById("A"));
    setAnchorA(document.getElementById("A_anchor"));
  }, []);

  // 2. Attach Listeners
  useEffect(() => {
    var clientX = 0;
    var clientY = 0;
    if (eleA && anchorA) {
      window.addEventListener("mousemove", (event) => {
        moveEle(eleA, anchorA, event.clientX, event.clientY);
        clientX = event.clientX;
        clientY = event.clientY;
      });

      window.addEventListener("scroll", () => {
        moveEle(eleA, anchorA, clientX, clientY);
      });
    }
  }, [eleA, anchorA]);

  // 3. Calculate and Return Bounds of Element
  function calcBounds(element) {
    if (element) {
      let bounds = element.getBoundingClientRect();
      return bounds;
    }
  }

  // Takes in a Mover, Anchor, clientMouseX, clientMouseY
  // Translates Mover's position based on clientMouse's position in relation to Anchor
  function moveEle(mover, anchor, clientMouseX, clientMouseY) {
    if (mover && anchor && clientMouseX && clientMouseY) {
      let a_bounds = calcBounds(anchor); // Calculate Bounds based on Anchor...

      let moverY = a_bounds.top + window.scrollY + mover.scrollHeight / 2;
      let mouseY = clientMouseY + window.scrollY;
      let diffY = moverY - mouseY;
      diffY = diffY * -1;

      let moverX = a_bounds.left + window.scrollX + mover.scrollWidth / 2;
      let mouseX = clientMouseX + window.scrollX;
      let diffX = moverX - mouseX;
      diffX = diffX * -1;

      mover.style.transform = `translate(${diffX}px, ${diffY}px)`; // ...but move Mover.
    }
  }

  return (
    <div>
      <div className="buffer" />
      <div className="buffer" />
      <div id="A_anchor" className="boxA Aghost">
        <div id="A" className="boxA" />
      </div>
      <div className="buffer" />
      <div className="buffer" />
      <div className="buffer" />
    </div>
  );
}

export default B;

import React, { useState, useEffect, useRef } from "react";
import "./C.css";

function C() {
  const [eleA, setEleA] = useState();
  const [anchorA, setAnchorA] = useState();

  const [active, setActive] = useState(false);
  const refActive = React.useRef(active); // Use Ref for listener, NOT state.

  // 1. Get Elements
  useEffect(() => {
    console.log("Getting Element A");
    setEleA(document.getElementById("A"));
    setAnchorA(document.getElementById("A_anchor"));
  }, []);

  // 2. Attach Listeners
  useEffect(() => {
    if (eleA && anchorA) {
      window.addEventListener("scroll", (event) => {
        // Use Ref for listener, NOT state.
        if (refActive.current == true) {
          eleA.classList.toggle("Opened");
          moveEle(eleA, anchorA);
          //
        }
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

  // Takes in a Mover, Anchor
  // Translates Mover's position to center of screen in relation to Anchor
  function moveEle(mover, anchor) {
    if (mover && anchor) {
      mover.style.width = `80vw`;
      mover.style.height = `80vh`;

      refActive.current = true;
      setActive(true);
      let a_bounds = calcBounds(anchor);

      // mover.scrollHeight/2 -> window.innerHeight * 0.4 (aka 80vh/2)
      let moverY = a_bounds.top + window.scrollY + window.innerHeight * 0.4;
      let windowY = window.scrollY + window.innerHeight / 2;
      let diffY = moverY - windowY;
      diffY = diffY * -1;

      // mover.scrollWidth/2 -> window.innerWidth * 0.4 (aka 80vw/2)
      let moverX = a_bounds.left + window.scrollX + window.innerWidth * 0.4;
      let mouseX = window.scrollX + window.innerWidth / 2;
      let diffX = moverX - mouseX;
      diffX = diffX * -1;

      mover.style.transform = `translate(${diffX}px, ${diffY}px)`;
    }
  }

  return (
    <div>
      <div className="buffer" />
      <div className="buffer" />
      <div id="A_anchor" className="boxA Aghost">
        <div
          onClick={() => {
            eleA.classList.toggle("Opened");
            moveEle(eleA, anchorA);
            //
          }}
          id="A"
          className="boxA"
        />
      </div>
      <div className="buffer" />
      <div className="buffer" />
      <div className="buffer" />
    </div>
  );
}

export default C;

import React, { useState, useEffect } from "react";
import "./A.css";

function A() {
  const [eleA, setEleA] = useState();
  const [eleB, setEleB] = useState();
  const [boundsA, setBoundsA] = useState({});
  const [boundsB, setBoundsB] = useState({});

  // 1. Get Elements
  useEffect(() => {
    setEleA(document.getElementById("A"));
    setEleB(document.getElementById("B"));
  }, []);

  // 2. Calulate Bounds after initial setState
  useEffect(() => {
    if (eleA && eleB) {
      setBoundsA(calcBounds(eleA));
      setBoundsB(calcBounds(eleB));
    }
  }, [eleA, eleB]);

  // 3. Calculate and Return Bounds of Element
  function calcBounds(element) {
    if (element) {
      let bounds = element.getBoundingClientRect();
      return bounds;
    }
  }

  // Takes in a Mover and Target Element
  // Translates Mover to Target position
  function moveEle(mover, target) {
    if (mover && target) {
      let m_bounds = calcBounds(mover);
      let t_bounds = calcBounds(target);

      // m_bounds.top : Top of element to top of viewport (px)
      // window.scrollY : Distance Scrolled Vertically (px)
      // m_bounds.top + window.scrollY : Distance between top of element and top of page
      // mover.scrollHeight : Height of element itself
      let moverY = m_bounds.top + window.scrollY + mover.scrollHeight / 2;
      let targetY = t_bounds.top + window.scrollY + target.scrollHeight / 2;
      let diffY = moverY - targetY;
      diffY = diffY * -1;

      let moverX = m_bounds.left + window.scrollX + mover.scrollWidth / 2;
      let targetX = t_bounds.left + window.scrollX + target.scrollWidth / 2;
      let diffX = moverX - targetX;
      diffX = diffX * -1;

      mover.style.transform = `translate(${diffX}px, ${diffY}px)`;
    }
  }

  return (
    <div>
      <div className="buffer" />

      <div className="boxA Aghost">
        <div id="A" className="boxA" />
      </div>
      <div className="Ainfo">
        Top:{Math.floor(boundsA.top)} | ScrollY:
        {Math.floor(window.scrollY)} | Add:
        {Math.floor(boundsA.top) + Math.floor(window.scrollY)}
      </div>
      <div className="Binfo">
        Left:{Math.floor(boundsB.left)}| ScrollX:
        {Math.floor(window.scrollX)} | Add:
        {Math.floor(boundsB.left) + Math.floor(window.scrollX)}
      </div>

      <button
        onClick={() => {
          moveEle(eleB, eleA);
        }}
      >
        B Targets A
      </button>

      <div className="buffer" />
      <div className="buffer" />
      <div className="buffer" />

      <div className="boxB Bghost">
        <div id="B" className="boxB" />
      </div>

      <div className="buffer" />
    </div>
  );
}

export default A;

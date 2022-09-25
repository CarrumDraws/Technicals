import React, { useContext, useRef, useEffect, useState } from "react";
import { Context } from "../../context/PromoContext";
import "./NightButton.css";

function NightButton() {
  const { theme, changeTheme } = useContext(Context); // Used for toggling between night/day
  const [click, setClick] = useState(false); // Blocks initial animation
  const buttRef = useRef(null);
  const circleRef = useRef(null);
  const rayRefOne = useRef(null);
  const rayRefTwo = useRef(null);
  const rayRefThree = useRef(null);
  const rayRefFour = useRef(null);
  const rayRefFive = useRef(null);
  const rayRefSix = useRef(null);
  const rayRefSeven = useRef(null);
  const rayRefEight = useRef(null);

  function setTheme() {
    setClick(true);
    changeTheme(!theme);
  }
  useEffect(() => {
    if (click) {
      // Remove animation block on first click
      circleRef.current.classList.remove("noani");
      rayRefOne.current.classList.remove("noani");
      rayRefTwo.current.classList.remove("noani");
      rayRefThree.current.classList.remove("noani");
      rayRefFour.current.classList.remove("noani");
      rayRefFive.current.classList.remove("noani");
      rayRefSix.current.classList.remove("noani");
      rayRefSeven.current.classList.remove("noani");
      rayRefEight.current.classList.remove("noani");
    }
    if (theme) {
      buttRef.current.classList.remove("close");
    } else {
      buttRef.current.classList.add("close");
    }
  }, [click, theme]);

  return (
    <div className="nightbutton" onClick={() => setTheme()} ref={buttRef}>
      <div className="circle noani" ref={circleRef} />
      <div className="ray noani" ref={rayRefOne} />
      <div className="ray noani" ref={rayRefTwo} />
      <div className="ray noani" ref={rayRefThree} />
      <div className="ray noani" ref={rayRefFour} />
      <div className="ray noani" ref={rayRefFive} />
      <div className="ray noani" ref={rayRefSix} />
      <div className="ray noani" ref={rayRefSeven} />
      <div className="ray noani" ref={rayRefEight} />
    </div>
  );
}

export default NightButton;

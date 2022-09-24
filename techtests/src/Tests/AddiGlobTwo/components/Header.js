import React, { useContext, useRef, useEffect, useState } from "react";
import { ReactComponent as LogoSVG } from "../assets/AG_02.svg";
import { Context } from "../context/PromoContext";

function Header({ menuState, toggleMenu }) {
  const { theme, user, changeTheme, changeUser } = useContext(Context);
  const [click, setClick] = useState(false);
  const hamRef = useRef(null);
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

  function trigMenu() {
    if (!menuState) {
      hamRef.current.classList.add("open");
      toggleMenu(true);
    }
  }
  function trigMenuClose(a) {
    if (!a) {
      hamRef.current.classList.remove("open");
    }
  }

  useEffect(() => {
    trigMenuClose(menuState);
  }, [menuState]);

  function setUser(newUser) {
    changeUser(newUser);
  }
  function setTheme() {
    setClick(true);
    changeTheme(!theme);
  }
  useEffect(() => {
    if (click) {
      console.log(circleRef);
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
  }, [click]);
  useEffect(() => {
    trigNight();
  }, [theme]);
  function trigNight() {
    if (theme) {
      buttRef.current.classList.remove("close");
    } else {
      buttRef.current.classList.add("close");
    }
  }

  return (
    <header className="header_flexbox">
      <div className="header_flexbox-left">
        <div className="menu_btn" onClick={() => trigMenu()}>
          <div className="menu_btn_burger" ref={hamRef}></div>
        </div>
      </div>

      <LogoSVG className="header_logo" />

      <div className="header_flexbox-right">
        <div className="header_night" onClick={() => setTheme()} ref={buttRef}>
          <div className="header_circle noani" ref={circleRef} />
          <div className="header_ray noani" ref={rayRefOne} />
          <div className="header_ray noani" ref={rayRefTwo} />
          <div className="header_ray noani" ref={rayRefThree} />
          <div className="header_ray noani" ref={rayRefFour} />
          <div className="header_ray noani" ref={rayRefFive} />
          <div className="header_ray noani" ref={rayRefSix} />
          <div className="header_ray noani" ref={rayRefSeven} />
          <div className="header_ray noani" ref={rayRefEight} />
        </div>
        <button className="header_signin" onClick={() => setUser("Calum")}>
          Sign In
        </button>
      </div>
    </header>
  );
}

export default Header;

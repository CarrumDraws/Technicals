import React, { useContext, useRef, useEffect } from "react";
import { ReactComponent as LogoSVG } from "../assets/AG_02.svg";
import { Context } from "../context/PromoContext";
import NightButton from "./Buttons/NightButton";

function Header({ menuState, toggleMenu }) {
  const { user, changeUser } = useContext(Context);
  const hamRef = useRef(null);

  function setUser(newUser) {
    changeUser(newUser);
  }
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

  return (
    <header className="header_flexbox">
      <div className="header_flexbox-left">
        <div className="menu_btn" onClick={() => trigMenu()}>
          <div className="menu_btn_burger" ref={hamRef}></div>
        </div>
      </div>

      <LogoSVG className="header_logo" />

      <div className="header_flexbox-right">
        <NightButton />
        <button className="header_signin" onClick={() => setUser("Calum")}>
          Sign In
        </button>
      </div>
    </header>
  );
}

export default Header;

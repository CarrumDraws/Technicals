import React, { useContext, useRef, useEffect } from "react";
import { ReactComponent as LogoSVG } from "../assets/AG_02.svg";
import { Context } from "../context/PromoContext";

function Header({ menuState, toggleMenu }) {
  const { theme, user, changeTheme, changeUser } = useContext(Context);
  const hamRef = useRef(null);

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
    console.log("Changing User");
    changeUser(newUser);
  }
  function setTheme(newTheme) {
    console.log("Changing Theme");
    changeTheme(newTheme);
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
        <button className="header_night" onClick={() => setTheme("night")}>
          N
        </button>
        <button className="header_signin" onClick={() => setUser("Calum")}>
          Sign In
        </button>
      </div>
    </header>
  );
}

export default Header;

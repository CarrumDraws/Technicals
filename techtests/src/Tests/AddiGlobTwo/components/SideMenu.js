import React, { useContext, useEffect, useRef } from "react";
import { ReactComponent as LogoSVG } from "../assets/AG_02.svg";
import { Context } from "../context/PromoContext";

function SideMenu({ menuState, toggleMenu }) {
  const { theme, user, changeTheme, changeUser } = useContext(Context);
  const hamRef = useRef(null);
  const maskRef = useRef(null);
  function trigMenu() {
    if (menuState) {
      hamRef.current.classList.remove("open");
      maskRef.current.classList.remove("open");
      trigMenuOpen(false);
      toggleMenu(false);
    }
  }
  function trigMenuOpen(a) {
    if (a) {
      hamRef.current.classList.add("open");
      maskRef.current.classList.add("open");
    }
  }

  useEffect(() => {
    trigMenuOpen(menuState);
  }, [menuState]);

  function newUser(newUser) {
    console.log("New User");
  }
  function setUser(newUser) {
    console.log("Changing User");
    changeUser(newUser);
  }
  function setTheme(newTheme) {
    console.log("Changing Theme");
    changeTheme(newTheme);
  }

  return (
    <div className="side_main" ref={maskRef}>
      <header className="side_header_flexbox">
        <div className="header_flexbox-left">
          <div className="menu_btn" onClick={() => trigMenu()}>
            <div className="side_btn_burger" ref={hamRef}></div>
          </div>
        </div>

        <LogoSVG className="side_header_logo" />

        <div className="header_flexbox-right"></div>
      </header>
    </div>
  );
}

export default SideMenu;

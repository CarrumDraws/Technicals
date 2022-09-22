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
    <header className="header_flexbox">
      <div className="header_flexbox-left">
        <div className="menu_btn" onClick={() => trigMenu()}>
          <div className="menu_btn_burger" ref={hamRef}></div>
        </div>
      </div>

      <LogoSVG className="header_logo" />
      {/* <object type="image/svg+xml" data={LogoSVG} className="header_logo">
        Logo
      </object> */}

      <div className="header_flexbox-right">
        {/* <button onClick={() => setTheme("dark")}> Dark Mode </button> */}
        <button className="header_newuser" onClick={() => newUser("Calum")}>
          Night
        </button>
        <button className="header_signin" onClick={() => setUser("Calum")}>
          Sign In
        </button>
      </div>
    </header>
  );
}

export default Header;

import React, { useContext, useState, useRef, useEffect } from "react";
import LogoSVG from "../assets/AG_02.svg";
import { Context } from "../context/PromoContext";

function Header() {
  const { theme, user, changeTheme, changeUser } = useContext(Context);
  const [menuUp, setMenuUp] = useState(false);
  const hamRef = useRef(null);

  function trigMenu() {
    console.log("Hamburger Menu Triggered");
    if (!menuUp) {
      hamRef.current.classList.add("open");
      setMenuUp(true);
    } else {
      hamRef.current.classList.remove("open");
      setMenuUp(false);
    }
  }
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

      <object type="image/svg+xml" data={LogoSVG} className="header_logo">
        Logo
      </object>

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

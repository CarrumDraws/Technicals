import React, { useContext } from "react";
import LogoSVG from "../assets/AG01.svg";
import { Context } from "../context/PromoContext";

function Header() {
  const { theme, user, changeTheme, changeUser } = useContext(Context);

  function trigMenu() {
    console.log("Hamburger Menu Triggered");
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
      <button onClick={() => trigMenu()}> HamMenu </button>
      [LOGO HERE]
      {/* <object type="image/svg+xml" data={LogoSVG} className="logo">
        Logo
      </object> */}
      <button onClick={() => setTheme("dark")}> Dark Mode </button>
      <button onClick={() => newUser("Calum")}> New User </button>
      <button onClick={() => setUser("Calum")}> Sign In </button>
    </header>
  );
}

export default Header;

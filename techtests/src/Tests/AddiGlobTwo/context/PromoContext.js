import React, { useEffect, useState } from "react";

export const Context = React.createContext();

export function PromoProvider({ children }) {
  const [theme, setTheme] = useState(true);
  const [user, setUser] = useState("newUser");

  const rootstyle = document.querySelector(":root").style;
  useEffect(() => {
    if (theme) {
      // true = light
      rootstyle.setProperty("--primary", "rgb(69, 160, 209)");
      rootstyle.setProperty("--primary-fade", "rgb(69, 160, 209, 0)");
      rootstyle.setProperty("--primary-text", "rgb(255, 255, 255)");

      rootstyle.setProperty("--secondary", "rgb(8, 54, 64)");

      rootstyle.setProperty("--body", "rgb(69, 209, 202)");
      rootstyle.setProperty("--body-card", "rgb(188, 240, 237)");

      rootstyle.setProperty("--menu", "rgb(8, 54, 64)");
      rootstyle.setProperty("--menu-text", "rgb(69, 209, 202)");

      rootstyle.setProperty("--skele", "rgb(184, 221, 219)");
    } else {
      // false = dark
      rootstyle.setProperty("--primary", "rgb(8, 54, 64)");
      rootstyle.setProperty("--primary-fade", "rgb(8, 54, 64, 0)");
      rootstyle.setProperty("--primary-text", "rgb(69, 160, 209)");

      rootstyle.setProperty("--secondary", "rgb(69, 209, 202)");

      rootstyle.setProperty("--body", "rgb(8, 27, 32)");
      rootstyle.setProperty("--body-card", "rgb(8, 54, 64)");

      rootstyle.setProperty("--menu", "rgb(8, 27, 32)");
      rootstyle.setProperty("--menu-text", "rgb(69, 209, 202)");

      rootstyle.setProperty("--skele", "rgb(15, 44, 52)");
    }
  }, [theme]);

  function changeTheme(newTheme) {
    setTheme(newTheme);
  }
  function changeUser(newUser) {
    setUser(newUser);
  }
  return (
    <Context.Provider
      value={{
        theme: theme,
        user: user,
        changeTheme: changeTheme,
        changeUser: changeUser,
      }}
    >
      {children}
    </Context.Provider>
  );
}

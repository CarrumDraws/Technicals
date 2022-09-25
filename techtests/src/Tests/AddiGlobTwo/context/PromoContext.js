import React, { useEffect, useState } from "react";

export const Context = React.createContext();

export function PromoProvider({ children }) {
  const [theme, setTheme] = useState(true);
  const [user, setUser] = useState("newUser");

  const rootstyle = document.querySelector(":root").style;
  useEffect(() => {
    if (theme) {
      // true = light
      console.log("Light");
      rootstyle.setProperty("--body", "rgb(69, 209, 202)");
    } else {
      // false = dark
      console.log("Dark");
      rootstyle.setProperty("--body", "rgb(8, 54, 64)");
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

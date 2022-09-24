import React, { useState } from "react";

export const Context = React.createContext();

export function PromoProvider({ children }) {
  const [theme, setTheme] = useState(true);
  const [user, setUser] = useState("newUser");

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

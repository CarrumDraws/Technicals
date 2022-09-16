import React from "react";

const theme = {
  foreground: "#000000",
  background: "#eeeeee",
};

let user = "newUser";

const changeTheme = (theme) => {
  console.log(`New Theme: ${theme}`);
  switch (theme) {
    case "light":
      theme = { foreground: "#000000", background: "#eeeeee" };
      break;
    case "dark":
      theme = { foreground: "#ffffff", background: "#222222" };
      break;
    default:
      theme = { foreground: "#000000", background: "#eeeeee" };
      break;
  }
};

const changeUser = (newUser) => {
  console.log(`New User: ${newUser}`);
  user = newUser;
};

export const Context = React.createContext();

export function PromoProvider({ children }) {
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

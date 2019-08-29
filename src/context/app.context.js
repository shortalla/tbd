import React from "react"
import makeTheme from "../variables/theme";

export const app = {
  title: "Wishlist",
  ...makeTheme()
};

export const AppContext = React.createContext(app);

import React from "react";
import Home from "./pages/home";

export function AppRende() {
  return <Home />;
}

export const App = React.memo(AppRende);

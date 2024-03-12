import React from "react";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <h4>RootLayout <i>(Add navigation here)</i></h4>
      <Outlet />
    </>
  );
}

export default RootLayout;

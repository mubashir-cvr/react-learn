import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function ProductRootLayout() {
  return (
    <>
      <h3>ProductRootLayout</h3>
      <nav>
        <ul>
          <li>
            <NavLink
              to=""
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="new"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              New Product
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default ProductRootLayout;

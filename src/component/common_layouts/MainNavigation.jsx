import React from "react";
import { NavLink } from "react-router-dom";
function MainNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="" className={({isActive})=> isActive? 'active':undefined} end>Home</NavLink>
        </li>
        <li>
          <NavLink to="products" className={({isActive})=> isActive? 'active': undefined}>Products</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;

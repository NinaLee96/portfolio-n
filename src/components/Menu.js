import React from "react";
import * as MenuStyles from "../styles/menu.module.scss";

const Menu = () => {
  return (
    <div>
      <ul className={MenuStyles.menu}>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Menu;

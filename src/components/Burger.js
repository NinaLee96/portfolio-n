import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import * as burgerStyles from "../styles/burger.module.scss";

const Burger = () => {
  const [open, setOpen] = useState(false);

  // fix burger button menu

  return (
    <React.Fragment>
      <div className={burgerStyles["burger-button"]}>
        <div />
        <div />
        <div />
      </div>
      <Menu className={burgerStyles.burger}>
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contacts">Contact</a>
      </Menu>
    </React.Fragment>
  );
};

export default Burger;

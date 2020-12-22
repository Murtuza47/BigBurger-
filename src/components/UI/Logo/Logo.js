import React from "react";
import BurgerLogo from "../../../assets/images/burger-logo.png";
import classes from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={classes.Logo}>
      <img src={BurgerLogo} />
    </div>
  );
}

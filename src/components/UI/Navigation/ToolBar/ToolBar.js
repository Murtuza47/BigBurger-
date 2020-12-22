import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./ToolBar.module.css";

export default function ToolBar(props) {
  return (
    <header className={classes.ToolBar}>
      <div onClick={props.clickedMenu} className={classes.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
}

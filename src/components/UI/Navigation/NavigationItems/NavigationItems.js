import classes from "./NavigationItems.module.css";
import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";

export default function NavigationItems() {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/burger" exact>
        Burger
      </NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
  );
}

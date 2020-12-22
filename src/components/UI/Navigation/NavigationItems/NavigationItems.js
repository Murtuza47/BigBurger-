import classes from "./NavigationItems.module.css";
import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";

export default function NavigationItems() {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active>
        Burger
      </NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
  );
}

import React from "react";
import Aux from "../../../../hoc/Auxillary";
import BackDrop from "../../BackDrop/BackDrop";
import Logo from "../../Logo/Logo";
import NavigationItem from "../NavigationItem/NavigationItem";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDraw.module.css";

export default function SideDraw(props) {
  let addingClasses = [classes.SideDraw, classes.Close];
  if (props.show) {
    addingClasses = [classes.SideDraw, classes.Open];
  }
  return (
    <Aux>
      <BackDrop show={props.show} notToShow={props.backDropClicked} />
      <div className={addingClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
}

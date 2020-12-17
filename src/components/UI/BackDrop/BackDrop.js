import React from "react";
import classes from "./BackDrop.module.css";

const BackDrop = (props) =>
  props.show ? (
    <div className={classes.BackDrop} onClick={props.notToShow}></div>
  ) : null;

export default BackDrop;

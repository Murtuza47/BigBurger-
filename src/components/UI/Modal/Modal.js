import React from "react";
import Aux from "../../../hoc/Auxillary";
import BackDrop from "../BackDrop/BackDrop";
import classes from "./Modal.module.css";

export default function Modal(props) {
  return (
    <Aux>
      <BackDrop show={props.orderClick} notToShow={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.orderClick ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.orderClick ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
}

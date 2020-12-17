import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meart", type: "meat" },
];
export default function BuildControls(props) {
  return (
    <div className={classes.BuildControls}>
      <p>Price: {props.price}</p>
      {controls.map((ctrl, i) => (
        <BuildControl
          key={ctrl + i}
          label={ctrl.label}
          addclick={() => props.aI(ctrl.type)}
          removeclick={() => props.rI(ctrl.type)}
          disabled={props.disabledKeys[ctrl.type]}
        />
      ))}
      <button
        className={classes.OrderButton}
        disabled={!props.purchaseable}
        onClick={props.purchasing}
      >
        ORDER NOW
      </button>
    </div>
  );
}

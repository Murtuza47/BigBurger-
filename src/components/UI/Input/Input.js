import classes from "./Input.module.css";
import React from "react";

export default function Input(props) {
  let inputElement = null;
  let classess = [classes.InputElement];
  if (props.invalid && props.touched) {
    classess = [classes.Invalid];
  }
  switch (props.inputtype) {
    case "input":
      inputElement = (
        <input
          className={classess.join(" ")}
          {...props.elementconfig}
          onChange={props.onChanged}
          value={props.value}
        />
      );
      break;
    case "textArea":
      inputElement = (
        <textarea
          className={classess.join(" ")}
          {...props.elementconfig}
          onChange={props.onChanged}
          value={props.value}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={classess.join(" ")}
          onChange={props.onChanged}
          value={props.value}
        >
          {props.elementconfig.options.map((obj) => {
            return <option value={obj.value}>{obj.displayValue}</option>;
          })}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={classess.join(" ")}
          {...props.elementconfig}
          value={props.value}
          onChange={props.onChanged}
        />
      );
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
}

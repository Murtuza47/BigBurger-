import classes from "./CheckOutSummary.module.css";
import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

export default function CheckOutSummary(props) {
  return (
    <div className={classes.CheckOutSummary}>
      <h1>We hope it tastes Gooooood!!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingridients={props.ingridients} />
      </div>
      <Button type="Danger" clicked={props.cancel}>
        CANCEL
      </Button>
      <Button type="Success" clicked={props.order}>
        ORDER
      </Button>
    </div>
  );
}

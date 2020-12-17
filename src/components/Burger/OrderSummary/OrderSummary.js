import React from "react";
import Aux from "../../../hoc/Auxillary";
import Button from "../../UI/Button/Button";

export default function OrderSummary(props) {
  const ingridients = Object.keys(props.ingridients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        <strong>{props.ingridients[igKey]}</strong>
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A Delicious burger with a folloeing ingridient: </p>
      <ul>{ingridients}</ul>
      <p>Continue to Checkout!</p>
      <Button type="Danger" clicked={props.modalClosed}>
        CANCEL
      </Button>
      <Button type="Success" clicked={props.continueClicked}>
        CONTINUE
      </Button>
    </Aux>
  );
}

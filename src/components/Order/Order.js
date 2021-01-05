import classes from "./Order.module.css";
import React, { Component } from "react";

export default class Order extends Component {
  render() {
    let ingridient = [];
    for (let key in this.props.ingridients) {
      ingridient.push({
        name: key,
        amount: this.props.ingridients[key],
      });
    }
    let span = ingridient.map((key, i) => {
      return (
        <span key={i}>
          {key.name}({key.amount})
        </span>
      );
    });
    return (
      <div className={classes.Order}>
        <p>Ingridients: {span}</p>
        <p>
          Price: <strong>PKR{this.props.price}</strong>
        </p>
      </div>
    );
  }
}

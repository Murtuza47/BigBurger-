import React, { Component } from "react";
import classes from "./Burger.module.css";
import BurgerIngridient from "./BurgerIngridient/BurgerIngridient";

export default class Burger extends Component {
  render() {
    let transfromIngridient = Object.keys(this.props.ingridients)
      .map((key, index) => {
        return [...Array(this.props.ingridients[key])].map((_, i) => {
          return <BurgerIngridient key={key + i} type={key} />;
        });
      })
      .reduce((preval, currval) => {
        return preval.concat(currval);
      }, []);

    if (transfromIngridient.length === 0) {
      transfromIngridient = <p>Please add some Ingrideint</p>;
    }
    return (
      <div className={classes.Burger}>
        <BurgerIngridient type="bread-top" />
        {transfromIngridient}
        <BurgerIngridient type="bread-bottom" />
      </div>
    );
  }
}

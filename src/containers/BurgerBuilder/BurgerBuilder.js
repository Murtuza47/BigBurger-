import React, { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../../hoc/Auxillary";

const INGRIDIENT_PRICE = {
  meat: 35,
  bacon: 25,
  cheese: 55,
  salad: 10,
};

export default class BurgerBuilder extends Component {
  state = {
    ingridients: {
      meat: 0,
      bacon: 0,
      cheese: 0,
      salad: 0,
    },
    price: 10,
    purchaseable: false,
    purchasing: false,
  };

  disabledOrderButton = () => {
    let ingridients = { ...this.state.ingridients };
    let sum = Object.keys(ingridients)
      .map((igKey) => {
        return ingridients[igKey];
      })
      .reduce((prevval, currval) => {
        return currval + prevval;
      });
    this.setState({ purchaseable: sum > 0 });
  };

  addIngridients = (type) => {
    let oldCount = this.state.ingridients[type];
    let updatedIngridient = { ...this.state.ingridients };
    updatedIngridient[type] = oldCount + 1;
    let newPrice = INGRIDIENT_PRICE[type] + this.state.price;
    this.setState({ ingridients: updatedIngridient, price: newPrice }, () => {
      this.disabledOrderButton();
    });
  };

  removeIngridients = (type) => {
    let oldCount = this.state.ingridients[type];
    let updatedIngridient = { ...this.state.ingridients };
    updatedIngridient[type] = oldCount - 1;
    let newPrice = this.state.price - INGRIDIENT_PRICE[type];
    this.setState({ ingridients: updatedIngridient, price: newPrice }, () => {
      this.disabledOrderButton();
    });
  };

  showingModal = () => {
    this.setState({ purchasing: true });
  };

  onContinue = () => {
    alert("You have continue");
  };

  closingModal = () => {
    this.setState({ purchasing: false });
  };
  render() {
    let disabledKey = { ...this.state.ingridients };
    for (let key in disabledKey) {
      disabledKey[key] = disabledKey[key] <= 0;
    }
    return (
      <Aux>
        <Modal
          orderClick={this.state.purchasing}
          modalClosed={this.closingModal}
        >
          <OrderSummary
            ingridients={this.state.ingridients}
            modalClosed={this.closingModal}
            continueClicked={this.onContinue}
          ></OrderSummary>
        </Modal>
        <Burger ingridients={this.state.ingridients} />
        <BuildControls
          rI={this.removeIngridients}
          aI={this.addIngridients}
          disabledKeys={disabledKey}
          price={this.state.price}
          purchaseable={this.state.purchaseable}
          purchasing={this.showingModal}
        />
      </Aux>
    );
  }
}

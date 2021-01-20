import React, { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../../hoc/Auxillary";
import axios from "../../axios";
import Spinner from "../../components/UI/Spinner/Spinner";
import ErrorHandler from "../../hoc/errorHandler/ErrorHandler";
import { connect } from "react-redux";

const INGRIDIENT_PRICE = {
  meat: 35,
  bacon: 25,
  cheese: 55,
  salad: 10,
};

class BurgerBuilder extends Component {
  state = {
    ingridients: {
      meat: 0,
      bacon: 0,
      cheese: 0,
      salad: 0,
    },
    purchaseable: false,
    purchasing: false,
    loader: false,
    price: 10,
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
    // this.setState({
    //   loader: true,
    // });
    let queryParams = [];
    for (let i in this.state.ingridients) {
      queryParams.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.ingridients[i])
      );
    }
    const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: queryString,
    });
  };

  closingModal = () => {
    this.setState({ purchasing: false });
  };
  render() {
    console.log("props", this.props.ingridients);
    let disabledKey = { ...this.props.ingridients };
    for (let key in disabledKey) {
      disabledKey[key] = disabledKey[key] <= 0;
    }
    let orderSummary = (
      <OrderSummary
        ingridients={this.props.ingridients}
        modalClosed={this.closingModal}
        continueClicked={this.onContinue}
      ></OrderSummary>
    );
    if (this.state.loader) {
      orderSummary = <Spinner />;
    }
    return (
      <Aux>
        <Modal
          orderClick={this.state.purchasing}
          modalClosed={this.closingModal}
        >
          {orderSummary}
        </Modal>
        <Burger ingridients={this.props.ingridients} />
        <BuildControls
          // rI={() => this.removeIngridients}
          // aI={this.addIngridients}
          rI={(type) => this.props.removeIngridient(type)}
          aI={(type) => this.props.addIngridient(type)}
          disabledKeys={disabledKey}
          price={this.state.price}
          purchaseable={this.state.purchaseable}
          purchasing={this.showingModal}
        />
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return { ingridients: state.ingridients };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addIngridient: (addingr) =>
      dispatch({ type: "ADDINGRIDIENT", value: addingr }),
    removeIngridient: (remingr) =>
      dispatch({ type: "REMOVEINGRIDIENT", value: remingr }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorHandler(BurgerBuilder, axios));

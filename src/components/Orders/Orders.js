import React, { Component } from "react";
import Order from "../Order/Order";
import axios from "../../axios";
import Spinner from "../UI/Spinner/Spinner";
import ErrorHandler from "../../hoc/errorHandler/ErrorHandler";

class Orders extends Component {
  state = {
    orders: null,
  };
  componentDidMount() {
    let order = [];
    axios
      .get("/order.json")
      .then((res) => {
        console.log(res);
        for (let key in res.data) {
          order.push({
            ...res.data[key],
            id: key,
          });
        }
        console.log(order);
        this.setState({ orders: order });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    let orders = <Spinner />;
    if (this.state.orders) {
      orders = this.state.orders.map((key, index) => {
        return (
          <Order key={key.id} ingridients={key.ingridients} price={key.price} />
        );
      });
    }
    return <div>{orders}</div>;
  }
}

export default ErrorHandler(Orders, axios);

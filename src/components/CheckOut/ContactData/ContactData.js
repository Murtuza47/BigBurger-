import axios from "../../../axios";
import React, { Component } from "react";
import Button from "../../UI/Button/Button";
import withErrorHandler from "../../../hoc/errorHandler/ErrorHandler";
import Spinner from "../../UI/Spinner/Spinner";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    ingridients: null,
    loader: false,
  };

  //   constructor(props) {
  //     super(props);
  //     debugger;
  //     this.setState({
  //       ingridients: props.ingridients,
  //     });
  //   }
  componentDidMount() {
    this.setState({
      ingridients: this.props.ingridients,
    });
  }
  onOrderClicked = (event) => {
    this.setState({ loader: true });
    console.log(this.state);
    debugger;
    let data = {
      ingridients: this.state.ingridients,
      price: 100,
      customer: {
        name: "Ali",
        address: {
          street: "Street No1",
          zipCode: "0789",
          country: "Pakistan",
        },
      },
    };
    axios
      .post("/order.json", data)
      .then((response) => {
        console.log(response);
        this.setState({
          loader: false,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          loader: false,
        });
      });
  };
  render() {
    let form = (
      <form>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your Email" />
        <input type="text" name="street" placeholder="Street" />
        <input type="text" name="postalCode" placeholder="Postal Code" />
        <Button type="Success" clicked={this.onOrderClicked}>
          Order
        </Button>
      </form>
    );
    if (this.state.loader) {
      form = <Spinner />;
    }
    return (
      <div>
        <h1>Enter Your Contact</h1>
        {form}
      </div>
    );
  }
}

export default withErrorHandler(ContactData, axios);

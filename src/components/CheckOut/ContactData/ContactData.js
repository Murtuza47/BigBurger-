import axios from "../../../axios";
import React, { Component } from "react";
import Button from "../../UI/Button/Button";
import withErrorHandler from "../../../hoc/errorHandler/ErrorHandler";
import Spinner from "../../UI/Spinner/Spinner";
import Input from "../../UI/Input/Input";
import classes from "./ContactData.module.css";
import { connect } from "react-redux";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementtype: "input",
        elementconfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementtype: "input",
        elementconfig: {
          type: "email",
          placeholder: "Your Email",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      address: {
        elementtype: "input",
        elementconfig: {
          type: "text",
          placeholder: "Your Address",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      street: {
        elementtype: "input",
        elementconfig: {
          type: "text",
          placeholder: "Street",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      postalCode: {
        elementtype: "input",
        elementconfig: {
          type: "text",
          placeholder: "ZipCode",
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 6,
        },
        valid: false,
        touched: false,
      },
      delievery: {
        elementtype: "select",
        elementconfig: {
          options: [
            {
              value: "fastest",
              displayValue: "Fastest",
            },
            {
              value: "cheapest",
              displayValue: "Cheapest",
            },
          ],
        },
        value: "fastest",
        validation: {},
        valid: true,
      },
    },
    // ingridients: null,
    loader: false,
    formValidation: false,
  };

  //   constructor(props) {
  //     super(props);
  //     debugger;
  //     this.setState({
  //       ingridients: props.ingridients,
  //     });
  //   }
  // componentDidMount() {
  //   this.setState({
  //     ingridients: this.props.ingridients,
  //   });
  // }

  checkValidity(value, validation) {
    let validity = true;

    if (validation.required) {
      validity = value.trim() != "" && validity;
    }
    if (validation.minLength) {
      validity = value.length >= validation.minLength && validity;
    }
    if (validation.maxLength) {
      validity = value.length <= validation.maxLength && validity;
    }
    return validity;
  }

  onOrderClicked = (event) => {
    this.setState({ loader: true });
    // console.log(this.state);
    let customerInfo = {
      name: this.state.orderForm.name.value,
      email: this.state.orderForm.email.value,
      address: this.state.orderForm.address.value,
      street: this.state.orderForm.street.value,
      postalCode: this.state.orderForm.postalCode.value,
      street: this.state.orderForm.street.value,
    };
    let data = {
      ingridients: this.props.ingridients,
      price: this.props.price,
      customer: customerInfo,
    };
    axios
      .post("/order.json", data)
      .then((response) => {
        console.log(response);
        this.setState({
          loader: false,
        });
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          loader: false,
        });
      });
  };

  valueChanged = (event, nameIdentifier) => {
    const orderForm = { ...this.state.orderForm };
    const targetedValue = { ...orderForm[nameIdentifier] };
    targetedValue.value = event.target.value;
    targetedValue.valid = this.checkValidity(
      targetedValue.value,
      targetedValue.validation
    );
    targetedValue.touched = true;
    // console.log(targetedValue);
    orderForm[nameIdentifier] = targetedValue;
    let formIsValid = true;
    // debugger;
    for (let nameIdentifier in orderForm) {
      formIsValid = orderForm[nameIdentifier].valid && formIsValid;
    }
    console.log(formIsValid);
    this.setState(
      {
        orderForm: orderForm,
        formValidation: formIsValid,
      },
      () => {
        console.log(this.state.orderForm);
      }
    );
  };

  valueChangedafterSubmit = () => {
    this.setState({});
  };
  render() {
    let orderFormTag = [];
    for (let key in this.state.orderForm) {
      orderFormTag.push({
        id: key,
        inputtype: this.state.orderForm[key].elementtype,
        elementconfig: this.state.orderForm[key].elementconfig,
        value: this.state.orderForm[key].value,
        valid: this.state.orderForm[key].valid,
        touched: this.state.orderForm[key].touched,
      });
    }

    let form = (
      <form>
        {orderFormTag.map((orderForm) => {
          // console.log(orderForm);
          return (
            <Input
              inputtype={orderForm.inputtype}
              elementconfig={orderForm.elementconfig}
              onChanged={(event) => this.valueChanged(event, orderForm.id)}
              value={orderForm.value}
              invalid={!orderForm.valid}
              touched={orderForm.touched}
            />
          );
        })}
        <Button
          type="Success"
          clicked={this.onOrderClicked}
          disabled={!this.state.formValidation}
        >
          Order
        </Button>
      </form>
    );
    if (this.state.loader) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h1>Enter Your Contact</h1>
        {form}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingridients: state.ingridients,
    price: state.price,
  };
};

export default connect(mapStateToProps)(withErrorHandler(ContactData, axios));

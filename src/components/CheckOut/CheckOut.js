import React, { Component } from "react";
import { Route } from "react-router-dom";
import CheckOutSummary from "../Order/CheckOutSummary/CheckOutSummary";
import ContactData from "./ContactData/ContactData";
import { connect } from "react-redux";

class CheckOut extends Component {
  // state = {
  //   ingridients: {
  //     meat: 0,
  //     bacon: 0,
  //     cheese: 0,
  //     salad: 0,
  //   },
  // };

  componentDidMount() {
    // const query = new URLSearchParams(this.props.history.location.search);
    // console.log(this.props);
    // console.log(query.entries());
    // let ingridients = {};
    // for (let param of query.entries()) {
    //   ingridients[param[0]] = +param[1];
    // }
    // this.setState({
    //   ingridients: ingridients,
    // });
    // console.log(ingridients);
  }

  onClickOrder = () => {
    this.props.history.push(this.props.match.url + "/contact-data");
  };
  onClickCancel = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div>
        <CheckOutSummary
          ingridients={this.props.ingridients}
          cancel={this.onClickCancel}
          order={this.onClickOrder}
        />
        <Route
          path={this.props.match.url + "/contact-data"}
          exact
          component={ContactData}
          // render={(props) => (
          //   <ContactData ingridients={this.state.ingridients} />
          // )}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingridients: state.ingridients,
  };
};

export default connect(mapStateToProps)(CheckOut);

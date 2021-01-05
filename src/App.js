import logo from "./logo.svg";
import React, { Component } from "react";
import Layout from "./components/layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import CheckOut from "./components/CheckOut/CheckOut";
import { Route, Redirect, Switch } from "react-router-dom";
import Orders from "./components/Orders/Orders";

export default class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/orders" component={Orders} />
            <Route path="/burger" exact component={BurgerBuilder} />
            <Redirect from="/" to="/burger" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

import React, { Component } from "react";
import Aux from "../../hoc/Auxillary";
import SideDraw from "../UI/Navigation/SideDraw/SideDraw";
import ToolBar from "../UI/Navigation/ToolBar/ToolBar";

export default class Layout extends Component {
  state = {
    showSideBar: false,
  };

  showSiderbarMenuHandler = () => {
    this.setState((prevState) => {
      return { showSideBar: !prevState.showSideBar };
    });
  };

  render() {
    return (
      <Aux>
        <ToolBar clickedMenu={this.showSiderbarMenuHandler}></ToolBar>
        <SideDraw
          show={this.state.showSideBar}
          backDropClicked={this.showSiderbarMenuHandler}
        />
        <main style={{ marginTop: "72px" }}>{this.props.children}</main>
      </Aux>
    );
  }
}

import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Auxillary";

const ErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };
    componentDidMount() {
      axios.interceptors.request.use(
        (request) => request,
        (error) => {
          this.setState({
            error: null,
          });
        }
      );

      axios.interceptors.response.use(
        (response) => response,
        (error) => {
          this.setState({
            error: error,
          });
        }
      );
    }

    render() {
      return (
        <Aux>
          <Modal
            orderClick={this.state.error}
            modalClosed={() => this.setState({ error: null })}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent />
        </Aux>
      );
    }
  };
};

export default ErrorHandler;

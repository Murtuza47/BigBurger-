import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Auxillary";

const ErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };

    componentDidMount() {
      console.log(this.props);
      const request_interceptors = axios.interceptors.request.use(
        (request) => request,
        (error) => {
          this.setState({
            error: null,
          });
        }
      );

      const response_interceptors = axios.interceptors.response.use(
        (response) => response,
        (error) => {
          this.setState({
            error: error,
          });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.response_interceptors);
      axios.interceptors.request.eject(this.request_interceptors);
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
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default ErrorHandler;

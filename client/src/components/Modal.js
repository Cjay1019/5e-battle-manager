import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBInput,
  MDBAlert,
  MDBSpinner,
  MDBRow,
  MDBAnimation
} from "mdbreact";
import auth from "../utils/firebase";
import "../style.css";

class SignIn extends Component {
  state = {
    modal: false,
    email: "",
    password: "",
    error: null,
    loggingIn: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  };

  alertClose = () => {
    this.setState({ error: null });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.signIn();
    this.setState({ password: "" });
  };

  signIn = () => {
    this.setState({ loggingIn: true });
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        this.setState({
          error: null,
          loggingIn: false
        });
        console.log(res);
      })
      .catch(error => {
        this.setState({ loggingIn: false });
        switch (error.code) {
          case "auth/wrong-password":
            this.setState({
              error: "Incorrect password."
            });
            break;
          case "auth/invalid-email":
            this.setState({
              error: "Please enter a valid email address."
            });
            break;
          case "auth/user-not-found":
            this.setState({
              error: "Couldn't find your account."
            });
            break;
          default:
            this.setState({
              error: "Something went wrong. Please try again."
            });
        }
      });
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn outline color="white" onClick={this.toggle}>
          Sign In
        </MDBBtn>
        <MDBModal
          animation="right"
          fullHeight
          position="right"
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <MDBModalHeader toggle={this.toggle}>Sign In</MDBModalHeader>
          <MDBModalBody>
            {this.state.error && (
              <MDBAnimation type="fadeInDown">
                <MDBAlert
                  className="mb-5"
                  onClose={this.alertClose}
                  dismiss
                  color="danger"
                >
                  {this.state.error}
                </MDBAlert>
              </MDBAnimation>
            )}
            <form className="mx-3">
              <MDBAnimation type="slideInRight" delay="250ms" duration="1s">
                <MDBInput
                  className="testing"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  label="Your email"
                  type="text"
                />
              </MDBAnimation>
              <MDBAnimation type="slideInRight" delay="250ms" duration="1250ms">
                <MDBInput
                  className="testing"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  label="Your password"
                  type="password"
                />
              </MDBAnimation>
              <MDBAnimation type="slideInRight" delay="250ms" duration="1500ms">
                <MDBBtn
                  color="primary"
                  type="submit"
                  onClick={this.handleFormSubmit}
                >
                  Sign In
                </MDBBtn>
              </MDBAnimation>
              {this.state.loggingIn && (
                <MDBRow className="mt-5">
                  <MDBSpinner big className="mx-auto" />
                </MDBRow>
              )}
            </form>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default SignIn;

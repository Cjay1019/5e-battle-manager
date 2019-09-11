import React, { Component } from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBBtn,
  MDBInput,
  MDBAlert
} from "mdbreact";
import auth from "../utils/firebase";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: null
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.signIn();
    this.setState({ password: "" });
  };

  signIn = () => {
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        this.setState({
          error: null
        });
        console.log(res);
      })
      .catch(error => {
        switch (error.code) {
          case "auth/wrong-password":
            this.setState({
              error:
                "Wrong password. Try again or click Forgot password to reset it."
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
      <MDBDropdown>
        <MDBDropdownToggle nav>
          <MDBBtn outline color="white">
            Sign In
          </MDBBtn>
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBInput
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            label="Your email"
            type="text"
          />
          <MDBInput
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            label="Your password"
            type="password"
          />
          <MDBBtn
            color="secondary"
            type="submit"
            size="sm"
            onClick={this.handleFormSubmit}
          >
            Sign In
          </MDBBtn>
          {this.state.error && (
            <MDBAlert color="danger">{this.state.error}</MDBAlert>
          )}
        </MDBDropdownMenu>
      </MDBDropdown>
    );
  }
}

export default SignIn;

import React, { Component } from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBBtn,
  MDBInput
} from "mdbreact";
import auth from "../utils/firebase";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  signIn = () => {
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        console.log(res);
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
            onChange={this.handleInputChange}
            label="Your email"
            group
            type="text"
          />
          <MDBInput
            name="password"
            onChange={this.handleInputChange}
            label="Your password"
            type="password"
          />
          <MDBBtn color="secondary" size="sm" onClick={this.signIn}>
            Sign In
          </MDBBtn>
        </MDBDropdownMenu>
      </MDBDropdown>
    );
  }
}

export default SignIn;

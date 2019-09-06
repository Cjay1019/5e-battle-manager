import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBContainer
} from "mdbreact";
import SignIn from "./SignIn";
import ProfileDropdown from "./ProfileDropdown";
import { connect } from "react-redux";

class Navbar extends Component {
  userChange = user => {
    this.props.dispatch({ type: "USER_CHANGE", payload: { user: user } });
  };

  render() {
    return (
      <MDBNavbar color="primary-color" dark expand="md">
        <MDBContainer>
          <MDBNavbarBrand>
            <strong className="white-text">Battle Manager</strong>
          </MDBNavbarBrand>
          <MDBNavbarNav right>
            <MDBNavItem>
              {this.props.user ? <ProfileDropdown /> : <SignIn />}
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Navbar);

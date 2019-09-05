import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBContainer,
  MDBBtn
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import auth from "../utils/firebase";

class Navbar extends Component {
  state = {
    isOpen: false
  };

  userChange = user => {
    this.props.dispatch({ type: "USER_CHANGE", payload: { user: user } });
  };

  signIn = () => {
    auth.signInWithEmailAndPassword("test@test.com", "test123").then(res => {
      console.log(res);
    });
  };

  signOut = () => {
    auth.signOut();
  };

  render() {
    return (
      <Router>
        <MDBNavbar color="primary-color" dark expand="md">
          <MDBContainer>
            <MDBNavbarBrand>
              <strong className="white-text">Battle Manager</strong>
            </MDBNavbarBrand>
            <MDBNavbarNav right>
              <MDBNavItem>
                {this.props.user ? (
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <MDBIcon icon="user" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                      <MDBDropdownItem href="#!">
                        Another Action
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#!">
                        Something else here
                      </MDBDropdownItem>
                      <MDBDropdownItem onClick={this.signOut} href="#!">
                        Sign Out
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                ) : (
                  <MDBBtn outline color="white" onClick={this.signIn}>
                    Sign In
                  </MDBBtn>
                )}
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBContainer>
        </MDBNavbar>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Navbar);

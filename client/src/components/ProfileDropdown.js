import React, { Component } from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBIcon,
  MDBDropdownItem
} from "mdbreact";
import auth from "../utils/firebase";

class ProfileDropdown extends Component {
  signOut = () => {
    auth.signOut();
  };

  render() {
    return (
      <MDBDropdown>
        <MDBDropdownToggle nav caret>
          <MDBIcon icon="user" />
        </MDBDropdownToggle>
        <MDBDropdownMenu className="dropdown-default">
          <MDBDropdownItem href="#!">Action</MDBDropdownItem>
          <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
          <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
          <MDBDropdownItem onClick={this.signOut} href="#!">
            Sign Out
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    );
  }
}

export default ProfileDropdown;

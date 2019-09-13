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
  state = {
    width: window.innerWidth
  };

  updateWidth = currWidth => {
    this.setState({ width: currWidth });
    console.log(this.state.width);
  };

  componentDidMount() {
    window.addEventListener("resize", () =>
      this.updateWidth(window.innerWidth)
    );
  }

  signOut = () => {
    auth.signOut();
  };

  render() {
    return this.state.width < 1350 ? (
      <MDBDropdown dropleft>
        <MDBDropdownToggle nav caret>
          <MDBIcon icon="user" />
        </MDBDropdownToggle>
        <MDBDropdownMenu className="dropdown-default">
          <MDBDropdownItem href="#!"></MDBDropdownItem>
          <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
          <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
          <MDBDropdownItem onClick={this.signOut} href="#!">
            Sign Out
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    ) : (
      <MDBDropdown>
        <MDBDropdownToggle nav caret>
          <MDBIcon icon="user" />
        </MDBDropdownToggle>
        <MDBDropdownMenu className="dropdown-default">
          <MDBDropdownItem href="#!"></MDBDropdownItem>
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

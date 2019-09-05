import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import Navbar from "./components/Navbar";
import auth from "./utils/firebase";
import "./index.css";

class App extends Component {
  userChange = user => {
    this.props.dispatch({ type: "USER_CHANGE", payload: { data: user } });
  };

  componentDidMount() {
    auth.onAuthStateChanged(firebaseUser => {
      this.userChange(firebaseUser);
      if (firebaseUser) {
        console.log("Signed-in");
        console.log(this.props.user);
      } else {
        console.log("Signed-out");
        console.log(this.props.user);
      }
    });
  }

  render() {
    return (
      <>
        <Navbar />
        <MDBContainer>
          <MDBRow center style={{ height: "100vh" }}>
            <MDBCol middle="true" sm="8" className="text-center">
              <h1>Welcome to Your MDB React App</h1>
              <p className="mb-2">
                The application is configured and ready to import our
                components.
              </p>
              <MDBBtn
                href="https://mdbootstrap.com/docs/react/"
                target="blank"
                color="primary"
              >
                <strong>Check out our docs!</strong>
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(App);

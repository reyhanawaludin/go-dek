import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: "#4a148c" }} color="faded" light>
          <NavbarBrand style={{ color: "white" }} href="/" className="mr-auto">
            {this.props.name}
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

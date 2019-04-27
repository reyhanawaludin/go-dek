import React, { Component } from "react";
import Navbar from "../../components/navbar";
import List from "../../components/card-resto";
export default class home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <List />
      </div>
    );
  }
}

import React, { Component } from "react";
import Navbar from "../../components/navbar";
import Jumbo from "../../components/jumbotron";

export default class home extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Jumbo title="GO-DEK" judul="Pesan Makanan Sekarang" />
      </div>
    );
  }
}

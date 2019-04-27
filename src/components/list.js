import React, { Component } from "react";
import Counter from "./counter";
import { Row, Col, Button, Card } from "reactstrap";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

class List extends Component {
  state = {
    listmakanan: [
      {
        id: 1,
        number: 0,
        price: 10000,
        nama: "Nasi Goreng Telor",
        gambar:
          "https://mk0foodfornetcoviwv0.kinstacdn.com/wp-content/uploads/Nasi-Goreng-Final-1.jpg"
      },
      {
        id: 2,
        price: 15000,
        number: 0,
        nama: "Nasi Goreng Telor",
        gambar:
          "http://www.weightloss.com.au/assets/Uploads/Recipes/nasi-goring-lge.jpg"
      },
      {
        id: 1,
        number: 0,
        price: 10000,
        nama: "Nasi Goreng Telor",
        gambar:
          "https://mk0foodfornetcoviwv0.kinstacdn.com/wp-content/uploads/Nasi-Goreng-Final-1.jpg"
      },
      {
        id: 2,
        price: 15000,
        number: 0,
        nama: "Nasi Goreng Telor",
        gambar:
          "http://www.weightloss.com.au/assets/Uploads/Recipes/nasi-goring-lge.jpg"
      },
      {
        id: 3,
        price: 11000,
        number: 0,
        nama: "Nasi Goreng Babat",
        gambar:
          "https://mk0foodfornetcoviwv0.kinstacdn.com/wp-content/uploads/Nasi-Goreng-Final-1.jpg"
      },
      {
        id: 4,
        price: 20000,
        number: 0,
        nama: "Nasi Goreng Udang",
        gambar:
          "http://www.weightloss.com.au/assets/Uploads/Recipes/nasi-goring-lge.jpg"
      },

      ,
      {
        id: 3,
        price: 11000,
        number: 0,
        nama: "Nasi Goreng Babat",
        gambar:
          "https://mk0foodfornetcoviwv0.kinstacdn.com/wp-content/uploads/Nasi-Goreng-Final-1.jpg"
      },
      {
        id: 4,
        price: 20000,
        number: 0,
        nama: "Nasi Goreng Udang",
        gambar:
          "http://www.weightloss.com.au/assets/Uploads/Recipes/nasi-goring-lge.jpg"
      },

      ,
      {
        id: 1,
        number: 0,
        price: 10000,
        nama: "Nasi Goreng Telor",
        gambar:
          "https://mk0foodfornetcoviwv0.kinstacdn.com/wp-content/uploads/Nasi-Goreng-Final-1.jpg"
      },
      {
        id: 2,
        price: 15000,
        number: 0,
        nama: "Nasi Goreng Telor",
        gambar:
          "http://www.weightloss.com.au/assets/Uploads/Recipes/nasi-goring-lge.jpg"
      },
      {
        id: 3,
        price: 11000,
        number: 0,
        nama: "Nasi Goreng Babat",
        gambar:
          "https://mk0foodfornetcoviwv0.kinstacdn.com/wp-content/uploads/Nasi-Goreng-Final-1.jpg"
      },
      {
        id: 4,
        price: 20000,
        number: 0,
        nama: "Nasi Goreng Udang",
        gambar:
          "http://www.weightloss.com.au/assets/Uploads/Recipes/nasi-goring-lge.jpg"
      }
    ],
    total: 0
  };

  tambahkan = harga => {
    this.setState({
      total: this.state.total + harga
    });
    sessionStorage.total = this.state.total + harga;
  };

  hapus = harga => {
    this.setState({
      total: this.state.total - harga
    });
    sessionStorage.total = this.state.total - harga;
  };

  render() {
    return (
      <div>
        <Navbar />
        <Row>
          {this.state.listmakanan.map((item, index) => (
            <Col xs="3">
              <Counter
                nomor={item.number}
                tambahTotalHarga={this.tambahkan}
                kurangTotalHarga={this.hapus}
                gambar={item.gambar}
                indexMakanan={index}
                name={item.nama}
                harga={item.price}
                // number={this.state.number}
              />
            </Col>
          ))}
        </Row>
        <br />
        <br />
        <br />
        <Card style={{ textAlign: "center" }}>
          <p style={{ fontWeight: "bold" }}>Total Pembayaran</p>
          <h1>{this.state.total}</h1>
          <Button outline color="danger" tag={Link} to="/login">
            BAYAR
          </Button>
        </Card>
      </div>
    );
  }
}

export default List;

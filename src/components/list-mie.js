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
        nama: "Mie Ayam Telor",
        gambar: "https://i.ytimg.com/vi/O_SO1a8Kw8k/maxresdefault.jpg"
      },
      {
        id: 2,
        price: 15000,
        number: 0,
        nama: "Mie Ayam Telor",
        gambar: "https://i.ytimg.com/vi/LWkz5DxHa7s/maxresdefault.jpg"
      },
      {
        id: 3,
        price: 11000,
        number: 0,
        nama: "Mie Ayam Babat",
        gambar: "https://i.ytimg.com/vi/ckGQ1JJsG5o/maxresdefault.jpg"
      },
      {
        id: 4,
        price: 20000,
        number: 0,
        nama: "Mie ayam Udang",
        gambar: "https://i.ytimg.com/vi/DqN6nJjmMwQ/maxresdefault.jpg"
      },

      {
        id: 5,
        number: 0,
        price: 17500,
        nama: "Mie ayam bakar",
        gambar: "https://i.ytimg.com/vi/VYv1uy5DHrw/maxresdefault.jpg"
      },
      {
        id: 6,
        number: 0,
        price: 15000,
        nama: "Mie Ayam Pilus",
        gambar: "https://i.ytimg.com/vi/e_CDZDCvthM/maxresdefault.jpg"
      },
      {
        id: 3,
        price: 11000,
        number: 0,
        nama: "Mie Ayam Babat",
        gambar: "https://i.ytimg.com/vi/ckGQ1JJsG5o/maxresdefault.jpg"
      },
      {
        id: 4,
        price: 20000,
        number: 0,
        nama: "Mie ayam Udang",
        gambar: "https://i.ytimg.com/vi/DqN6nJjmMwQ/maxresdefault.jpg"
      },
      {
        id: 3,
        price: 11000,
        number: 0,
        nama: "Mie Ayam Babat",
        gambar: "https://i.ytimg.com/vi/ckGQ1JJsG5o/maxresdefault.jpg"
      },
      {
        id: 4,
        price: 20000,
        number: 0,
        nama: "Mie ayam Udang",
        gambar: "https://i.ytimg.com/vi/DqN6nJjmMwQ/maxresdefault.jpg"
      },

      {
        id: 5,
        number: 0,
        price: 17500,
        nama: "Mie ayam bakar",
        gambar: "https://i.ytimg.com/vi/VYv1uy5DHrw/maxresdefault.jpg"
      },
      {
        id: 6,
        number: 0,
        price: 15000,
        nama: "Mie Ayam Pilus",
        gambar: "https://i.ytimg.com/vi/e_CDZDCvthM/maxresdefault.jpg"
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
          <Button outline color="danger" tag={Link} to="/payment">
            BAYAR
          </Button>
        </Card>
      </div>
    );
  }
}

export default List;

import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, Button, Row } from "reactstrap";

export default class Counter extends Component {
  state = {
    qty: 0
  };

  tambah = () => {
    this.setState({
      qty: this.state.qty + 1
    });
    this.props.tambahTotalHarga(this.props.harga);
  };

  kurang = () => {
    if (this.state.qty === 0) {
      return;
    }
    this.setState({
      qty: this.state.qty - 1
    });
    this.props.kurangTotalHarga(this.props.harga);
  };

  render() {
    console.log(this.props);
    return (
      <Row>
        <div class="card mb-3" style={{ padding: "10px" }}>
          <div class="col-md-4">
            <img top width="375%" src={this.props.gambar} alt="Card" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title" style={{ fontWeight: "bold" }}>
                {this.props.name}
              </h5>
              <p>Harga :Rp{this.props.harga}</p>
              <p>Jumlah Pesanan :{this.state.qty}</p>{" "}
              <Button outline onClick={this.tambah} size="xm" color="warning">
                Tambahkan{" "}
              </Button>{" "}
              <br />
              <br />
              <Button
                outline
                onClick={this.kurang}
                size="xm"
                // className="btn btn-danger m-2"
                color="danger m-2x`"
              >
                Hapus
              </Button>
            </div>
          </div>
        </div>
      </Row>

      // <div style={{ padding: "10px" }}>
      //   <Card>
      //     <CardImg top width="100%" src={this.props.gambar} alt="Card" />
      //     <CardBody>
      //       <CardTitle style={{ fontWeight: "bold" }}>
      //         {this.props.name}
      //       </CardTitle>
      //       <p>Harga :Rp{this.props.harga}</p>
      //       <p>Jumlah Pesanan :{this.state.qty}</p>
      //       <Button onClick={this.tambah} size="lg" color="warning">
      //         Tambahkan
      //       </Button>{" "}
      //       <Button
      //         onClick={this.kurang}
      //         size="lg"
      //         className="btn btn-danger m-2"
      //       >
      //         Hapus
      //       </Button>
      //     </CardBody>
      //   </Card>
      // </div>
    );
  }
}

import React from "react";
import { Link } from "react-router-dom";
import List from "./list";
import {
  Card,
  Button,
  CardImg,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody
} from "reactstrap";

const Example = props => {
  return (
    <CardGroup>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://www.ahstatic.com/photos/6155_rsr002_00_p_1024x768.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardSubtitle style={{ fontWeight: "bold" }}>
            Nasi Goreng Pak Ndul
          </CardSubtitle>
          <CardText>kota semarang jl.bulustalan 1 no 27</CardText>
          <Link to="/listmakanan">
            <Button>Lihat</Button>
          </Link>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://imageresizer.arch.software/neohotels/v1/imgs/NeoSamadikunCirebon/Gallery/samadikun_resto1.jpg?d=640x480&location=center"
          alt="Card image cap"
        />
        <CardBody>
          <CardSubtitle style={{ fontWeight: "bold" }}>
            Kebab Resto
          </CardSubtitle>
          <CardText>kota surabaya jl.merpati putih no 29</CardText>
          <Link to="/kebab">
            <Button>Lihat</Button>
          </Link>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://www.ahstatic.com/photos/6155_rsr001_00_p_1024x768.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardSubtitle style={{ fontWeight: "bold" }}>Mie Ayam</CardSubtitle>
          <CardText>kota jakarta jl.brebes banjir no 27</CardText>
          <Link to="/mieayam">
            <Button>Lihat</Button>
          </Link>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default Example;

import React from "react";
import { Jumbotron, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Jumbo = props => {
  console.log(props);
  return (
    <div class="card bg-dark text-white">
      <img
        height="20%"
        width="20%"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm_d4HzLBzoltIsbEm8_VI8p_92GQeOkz0AbAt5tjFjk0cnIbr"
        class="card-img"
        alt="..."
      />
      <div class="card-img-overlay" style={{ position: "inherit" }}>
        <h1 class="card-title">{props.title}</h1>
        <p class="card-text">{props.judul}</p>
        <hr className="my-2" />
        <p className="lead">
          {" "}
          <Link to="/dashboard">
            <Button color="primary">Pesan Sekarang</Button>{" "}
          </Link>{" "}
        </p>
      </div>
    </div>
    // <div>
    //   <Jumbotron>
    //     <h1 className="display-3">{props.title}</h1>
    //     <p className="lead">{props.judul}</p>
    //     <hr className="my-2" />

    //     <p className="lead">
    //       <Link to="/dashboard">
    //         <Button color="primary">Pesan Sekarang</Button>
    //       </Link>
    //     </p>
    //   </Jumbotron>
    // </div>
  );
};

export default Jumbo;

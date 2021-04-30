import React from "react";
import "./Details.css";
import Row from "./DetailRow/DetailRow";

function Details() {
  return (
    <div className="details">
      <div className="header">
        <p>PLASMA</p>
        <form action="">
          <input type="text" id="input" placeholder="Search.." />
        </form>
      </div>
      <div className="details-body">
        <Row shop="3rd Medicals" address="Thana Road" date="24th April, 2021" />
        <Row shop="3rd Medicals" address="Thana Road" date="24th April, 2021" />
        <Row shop="3rd Medicals" address="Thana Road" date="24th April, 2021" />
        <Row shop="3rd Medicals" address="Thana Road" date="24th April, 2021" />
        <Row shop="3rd Medicals" address="Thana Road" date="24th April, 2021" />
        <Row shop="3rd Medicals" address="Thana Road" date="24th April, 2021" />
      </div>
    </div>
  );
}

export default Details;

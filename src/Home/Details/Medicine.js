import React from "react";
import "./Details.css";
import Row from "./DetailRow/DetailRow";

function Details() {
  return (
    <div className="details">
      <div className="header">
        <p>MEDICINE</p>
        <form action="">
          <input type="text" id="input" placeholder="Search.." />
        </form>
      </div>
      <div className="details-body">
        <Row
          shop="4rth Medicals"
          address="Thana Road"
          number="24th April, 2021"
        />
      </div>
    </div>
  );
}

export default Details;

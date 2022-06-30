import React from "react";
import "./Details.css";
import Row from "./DetailRow/DetailRow";
import VaccineData from "../../Data/VaccineData.json";

function Details() {
  return (
    <div className="details">
      <div className="header">
        <p>VACCINE CENTERS</p>
        <p>
          Vaccine is just a prevention to prevent the spread of coronavirus. It
          is not a permanent solution.
        </p>
        <p>
          All these details are retrieved from -{" "}
          <a
            href="https://dashboard.cowin.gov.in/"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
        </p>
      </div>
      <div className="details-body">
        {VaccineData.map(item => (
          <Row key={item.shop} shop={item.shop} address={item.address} number={item.number} />
        ))}
      </div>
    </div>
  );
}

export default Details;

import React from "react";
import "./Details.css";
import Row from "./DetailRow/DetailRow";
import CovidTestCenterData from "../../Data/CovidTestCenterData.json";

function Details() {
  return (
    <div className="details">
      <div className="header">
        <p>COVID TEST CENTER</p>
        <form action="">
          <input type="text" id="input" placeholder="Search.." />
        </form>
      </div>
      <div className="details-body">
        {CovidTestCenterData.map(item => (
          <Row key={item.shop} shop={item.shop} address={item.address} number={item.number} />
        ))}
      </div>
    </div>
  );
}

export default Details;

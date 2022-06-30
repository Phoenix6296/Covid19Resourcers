import React, { useState } from "react";
import "./Details.css";
import Row from "./DetailRow/DetailRow";
import CovidTestCenterData from "../../Data/CovidTestCenterData.json";

function Details() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="details">
      <div className="header">
        <p>COVID TEST CENTER</p>
        <form action="">
          <input type="text" id="input" placeholder="Search.." onChange={(e) => setSearchTerm(e.target.value)} />
        </form>
      </div>
      <div className="details-body">
        {CovidTestCenterData.filter((item) => {
          if (searchTerm === "") {
            return item;
          } else {
            return item.shop.toLowerCase().includes(searchTerm.toLowerCase());
          }
        }).map(item => (
          <Row key={item.shop} shop={item.shop} address={item.address} number={item.number} />
        ))}
      </div>
    </div>
  );
}

export default Details;

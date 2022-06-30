import React, { useState } from "react";
import "./Details.css";
import Row from "./DetailRow/DetailRow";
import VaccineData from "../../Data/VaccineData.json";

function Details() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="details">
      <div className="header">
        <p>VACCINE CENTERS</p>
        <form action="">
          <input type="text" id="input" placeholder="Search.." onChange={(e) => setSearchTerm(e.target.value)} />
        </form>
      </div>
      <div className="details-body">
        <p className="precautions">
          Vaccine is just a prevention to prevent the spread of coronavirus. It
          is not a permanent solution.
          All these details are retrieved from - &nbsp;
          <a
            href="https://dashboard.cowin.gov.in/"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
        </p>

        {VaccineData.filter((item) => {
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

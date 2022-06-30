import React, { useState } from "react";
import "./Details.css";
import Row from "./DetailRow/DetailRow";
import AmbulanceData from "../../Data/AmbulanceData.json";

function Details() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="details">
      <div className="header">
        <p>AMBULANCE</p>
        <form action="">
          <input type="text" id="input" placeholder="Search.." onChange={(e) => setSearchTerm(e.target.value)} />
        </form>
      </div>
      <div className="details-body">
        {AmbulanceData.filter((item) => {
          if (searchTerm === "") {
            return item;
          } else {
            return item.shop.toLowerCase().includes(searchTerm.toLowerCase());
          }
        }).map((item, index) => {
          return <Row key={index} shop={item.shop}
            address={item.address}
            number={item.number}
          />;
        })}
      </div>
    </div>
  );
}

export default Details;

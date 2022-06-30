import React, { useState } from "react";
import "./Details.css";
import Row from "./DetailRow/DetailRow";
import OxygenData from "../../Data/OxygenData.json"

function Details() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="details">
      <div className="header">
        <p>OXYGEN</p>
        <form action="">
          <input type="text" id="input" placeholder="Search.." onChange={(e) => setSearchTerm(e.target.value)} />
        </form>
      </div>
      <div className="details-body">

        {OxygenData.filter((item) => {
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

import React from "react";
import "./Details.css";
import Row from "./DetailRow/DetailRow";
import AmbulanceData from "../../Data/AmbulanceData.json";

function Details() {
  return (
    <div className="details">
      <div className="header">
        <p>AMBULANCE</p>
        <form action="">
          <input type="text" id="input" placeholder="Search.." />
        </form>
      </div>
      <div className="details-body">
        {AmbulanceData.map((item, index) => {
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

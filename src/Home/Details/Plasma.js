import React from "react";
import "./Details.css";

function Details() {
  return (
    <div className="details">
      <div className="header">
        <p>PLASMA</p>
        <form action="">
          <input type="text" id="input" placeholder="Search.." />
        </form>
      </div>
      <div className="details-body no-data">
        <p>!! SORRY NO DETAILS AVAILABLE !!</p>
      </div>
    </div>
  );
}

export default Details;

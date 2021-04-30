import React from "react";
import "./Details.css";
import Row from "./DetailRow/DetailRow";

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
        <Row
          shop="Sanaka Hospital"
          address="Malandighi, Kanksha, Durgapur"
          number="9817877877"
        />
        <Row
          shop="Mission Hospital"
          address="Immon Kalyan, Saptarshi Sarani, Sector IIC, Bidhannagar, Durgapur,"
          number="8687500500"
        />
        <Row
          shop="IQ City Medical College and Hospital"
          address="Sovapur, Bijra Road, Durgapur"
          number="3432608000"
        />
        <Row
          shop="Gouri Devi Institute of Medical Sciences and Hospital"
          address="GT Road, National Highway 2, Rajbandh, Durgapur"
          number="8001002222"
        />
        <Row
          shop="Parashmani Medical Centre"
          address="Gandhi More, Benachity, Durgapur"
          number="7710268463"
        />
        <Row
          shop="Shri Ramkrishna Institute of Medical Sciences"
          address="Kanksha, Malandighi, Durgapur"
          number="7676750000"
        />
        <Row
          shop="Asansol District Hospital"
          address="SB Gorai Rd, Hamid Nagar, Asansol"
          number="3412304040"
        />
        <Row
          shop="Bankura Sammilani Medical College And Hospital"
          address="Bankura Sammilani Medical College Rd, Kenduadihi, Bankura"
          number="3242244700"
        />
        <Row
          shop="Swastik Clinic And Seva Sadan Pvt. Ltd."
          address="Puratan Line, Dangal Para, Suri"
          number="3462259550"
        />
        <Row
          shop="Burdwan Medical College"
          address="Bardhaman University, Bardhaman"
          number="3422658646"
        />
        <Row
          shop="Purulia Government Medical College and Hospital"
          address="Hatuara"
          number="325244400"
        />
        <Row
          shop="Rampurhat Government Medical College & Hospital"
          address="Hospital More, Rampurhat"
          number="346125502"
        />
      </div>
    </div>
  );
}

export default Details;

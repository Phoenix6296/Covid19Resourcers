import React from "react";
import "./Details.css";
import Row from "./DetailRow/DetailRow";

function Details() {
  return (
    <div className="details">
      <div className="header">
        <p>OXYGEN</p>
        <form action="">
          <input type="text" id="input" placeholder="Search.." />
        </form>
      </div>
      <div className="details-body">
        <Row
          shop="Maa Vaishnavi Acetylene Gas Pvt. Ltd."
          address="Khatgari Ananda Gopal Mukherjee Sarani Road, Durgapur"
          number="8145262626"
        />
        <Row
          shop="Joy Bajrang Enterprise"
          address="Suravi Cinema Hall More, (Beside NH-2), Andal Airport Main Gate, Andal"
          number="8045805115"
        />
        <Row
          shop="PharmaCo"
          address="Ambagan,Gopinathpur Behind Canara Bank, opposite Dairy More, Durgapur"
          number="NA"
        />
        <Row
          shop="Praxair"
          address="Praxair Oxygen Plant, Main Gate, Durgapur"
          number="NA"
        />
        <Row
          shop="Bablu Gas Supply"
          address="Palashdiha, Industrial Area, Durgapur"
          number="NA"
        />
        <Row
          shop="Desai Healthcare"
          address="122, GT Rd, Opposite Axis Bank Murgasol branch, Murgasol, Asansol"
          number="9732004000"
        />
        <Row
          shop="Agarwal Traders"
          address="28 GT Road Ushagram, Asansol"
          number="9434577037"
        />
        <Row
          shop="SuperGas Franchisee - N B Gas Agency"
          address="Bagan Dhowra P.O. Taltore, Taluka Near Hot Bricks Amuria Asansol"
          number="7001174164"
        />
        <Row
          shop="Sanjeevani Health Care"
          address="Near MRF Tyre Showroom, Kalyanpur Housing, Shristinagar, Asansol"
          number="NA"
        />
        <Row
          shop="Bengal Oxygen and Company"
          address="Jharkhand Road, Rupnarayanpur, Rupnarayanpur, Asansol"
          number="NA"
        />
        <Row
          shop="Oxygen Hub Health Care"
          address="Hutton Rd, near Kalibari Bazar, Master Para, Pathak Bari, Asansol,"
          number="NA"
        />
      </div>
    </div>
  );
}

export default Details;

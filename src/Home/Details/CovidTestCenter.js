import React from "react";
import "./Details.css";
import Row from "./DetailRow/DetailRow";

const data = [
  {
    "shop": "Sanaka Hospital",
    "address": "Malandighi, Kanksha, Durgapur",
    "number": "9817877877"
  },
  {
    "shop": "Mission Hospital",
    "address": "Immon Kalyan, Saptarshi Sarani, Sector IIC, Bidhannagar, Durgapur,",
    "number": "8687500500"
  },
  {
    "shop": "IQ City Medical College and Hospital",
    "address": "Sovapur, Bijra Road, Durgapur",
    "number": "3432608000"
  },
  {
    "shop": "Gouri Devi Institute of Medical Sciences and Hospital",
    "address": "GT Road, National Highway 2, Rajbandh, Durgapur",
    "number": "8001002222"
  },
  {
    "shop": "Parashmani Medical Centre",
    "address": "Gandhi More, Benachity, Durgapur",
    "number": "7710268463"
  },
  {
    "shop": "Shri Ramkrishna Institute of Medical Sciences",
    "address": "Kanksha, Malandighi, Durgapur",
    "number": "7676750000"
  },
  {
    "shop": "Asansol District Hospital",
    "address": "SB Gorai Rd, Hamid Nagar, Asansol",
    "number": "3412304040"
  },
  {
    "shop": "Bankura Sammilani Medical College And Hospital",
    "address": "Bankura Sammilani Medical College Rd, Kenduadihi, Bankura",
    "number": "3242244700"
  },
  {
    "shop": "Swastik Clinic And Seva Sadan Pvt. Ltd.",
    "address": "Puratan Line, Dangal Para, Suri",
    "number": "3462259550"
  },
  {
    "shop": "Burdwan Medical College",
    "address": "Bardhaman University, Bardhaman",
    "number": "3422658646"
  },
  {
    "shop": "Purulia Government Medical College and Hospital",
    "address": "Hatuara",
    "number": "325244400"
  },
  {
    "shop": "Rampurhat Government Medical College & Hospital",
    "address": "Hospital More, Rampurhat",
    "number": "346125502"
  }
];
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
        {data.map(item => (
          <Row key={item.shop} shop={item.shop} address={item.address} number={item.number} />
        ))}
      </div>
    </div>
  );
}

export default Details;

import React from "react";
import "./Details.css";
import Row from "./DetailRow/DetailRow";

const data = [
  {
    "shop": "Rekha Ambulance Service",
    "address": "C 36, Asha Bari Sarani, Sec, 2C St, Durgapur,",
    "number": "9333360820"
  },
  {
    "shop": "Durga Ambulance Service",
    "address": "Sampur, Durgapur",
    "number": "9232690512"
  },
  {
    "shop": "Medilift Air Ambulance Services In Durgapur",
    "address": "Mamra, Durgapur",
    "number": "7367020595"
  },
  {
    "shop": "Air Ambulance",
    "address": "Maulana Azad Medical College Hospital-Mamra Market Rd, Durgapur",
    "number": "NA"
  },
  {
    "shop": "ICU Ventilation Ambulance Service",
    "address": "Near Health World Hospital, Gandhi More, Durgapur,",
    "number": "NA"
  },
  {
    "shop": "Sumi Ambulance Service",
    "address": "District Hospital, SB Gorai Rd, Hamid Nagar, Asansol",
    "number": "7368088573"
  },
  {
    "shop": "Alock Mala Ambulance Service",
    "address": "District Hospital, Hamid Nagar, Asansol",
    "number": "6297670089"
  },
  {
    "shop": "Maa Ambey Ambulance",
    "address": "AS-7/35, Scheme-2, Kalyanpur Housing, Estate, Asansol",
    "number": "9775555543"
  },
  {
    "shop": "King Air Ambulance Services",
    "address": "Chelidanga, Asansol",
    "number": "7091360310"
  },
  {
    "shop": "Bharat Ambulance Service",
    "address": "Chelidanga Main Rd, Asansol",
    "number": "9434678387"
  },
  {
    "shop": "Ridhima Ambulance Service",
    "address": "Rental Housing Estate No 52, Kalyanpur Housing, Asansol",
    "number": "9002970429"
  },
  {
    "shop": "Ambuzone",
    "address": "Near Talpukuria, Ashram More, G.T Road, Asansol",
    "number": "9163553552"
  },
  {
    "shop": "Mukul Biswas Ambulance",
    "address": "Sail ISP hospital, Burnpur, Asansol",
    "number": "NA"
  },
  {
    "shop": "Prasanta Ambulance Service",
    "address": "Unnamed Road, Hamid Nagar, Asansol",
    "number": "NA"
  },
  {
    "shop": "Ridhima Mother Ambulance",
    "address": "Rental Housing Estate No 52, Kalyanpur Housing, Asansol",
    "number": "NA"
  }
];

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
        {data.map((item, index) => {
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

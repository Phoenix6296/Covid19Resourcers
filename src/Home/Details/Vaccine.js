import React from "react";
import "./Details.css";
import Row from "./DetailRow/DetailRow";

const data = [
  {
    "shop": "Andal PHC Covishield",
    "address": "Health Centre, Andal Gram",
    "number": "NA"
  },
  {
    "shop": "Baska SSK",
    "address": "Baska, Andal",
    "number": "NA"
  },
  {
    "shop": "Kajora East SSK",
    "address": "Sri Sri Bengal Ashram, Kajora, Andal",
    "number": "NA"
  },
  {
    "shop": "Khandra RH",
    "address": "Khandra Ukhra BPHC, Ukhra",
    "number": "NA"
  },
  {
    "shop": "Baktarnagar PHC",
    "address": "Baktarnagar PHC, Baktarnagar",
    "number": "NA"
  },
  {
    "shop": "Ballavpur RH",
    "address": "Ballavpur Rural Hospital, Ballavpur",
    "number": "NA"
  },
  {
    "shop": "Pandaveswar PHC",
    "address": "Pandaveswar PHC, Pandaveswar",
    "number": "NA"
  },
  {
    "shop": "UPHC Gopalmath",
    "address": "NYCLD, Gopalmath Branch, Gopalmath, Durgapur",
    "number": "NA"
  },
  {
    "shop": "Sanaka MCH",
    "address": "Sanaka Hospital, Malandighi, Kanksha, Durgapur",
    "number": "NA"
  },
  {
    "shop": "Health World Hospital",
    "address": "Gandhi More, Durgapur",
    "number": "NA"
  },
  {
    "shop": "The Mission Hospital",
    "address": "Immon Kalyan, Saptarshi Sarani, Sector IIC, Bidhannagar",
    "number": "NA"
  },
  {
    "shop": "IQ City MCH",
    "address": "IQ City Medical College, IQ City Rd, Durgapur",
    "number": "NA"
  },
  {
    "shop": "Lions Club",
    "address": "4A/9, Tagore Avenue, Prantika, A-Zone, Durgapur",
    "number": "NA"
  },
  {
    "shop": "Durgapur Steel Plant Hospital",
    "address": "JM Sengupta Rd, B-Zone, Durgapur",
    "number": "NA"
  },
  {
    "shop": "Gouri Devi Hospital & Research Institute",
    "address": "GT Road, Rajbandh, Durgapur",
    "number": "NA"
  },
  {
    "shop": "NIT Durgapur",
    "address": "National Institute of Technology, Mahatma Gandhi Rd, A-Zone, Durgapur",
    "number": "NA"
  },
  {
    "shop": "Asansol Durgapur Development Authority Building",
    "address": "2nd Floor, Administrative Building, 1st St, City Center, Durgapur",
    "number": "NA"
  },
  {
    "shop": "The Nation Hospital",
    "address": "Arrah Kalinagar, Durgapur",
    "number": "NA"
  },
  {
    "shop": "Palashdiha UPHC",
    "address": "Palashdiha Urban Primary Health Center, Industrial Area, Durgapur",
    "number": "NA"
  },
  {
    "shop": "Vivekananda Hospital",
    "address": "Dr Zakir Hussain Ave, Bidhannagar, Durgapur",
    "number": "NA"
  },
  {
    "shop": "ESI Hospital",
    "address": "Dr Zakir Hussain Ave, Bidhannagar, Durgapur",
    "number": "NA"
  },
  {
    "shop": "Durgapur SDH",
    "address": "Durgapur Sub Divisional Hospital, Bidhannagar, Durgapur",
    "number": "NA"
  },
  {
    "shop": "Srijani Auditorium",
    "address": "Srijani Auditorium, City Center, Durgapur",
    "number": "NA"
  },
  {
    "shop": "Durgapur ACMOH",
    "address": "Durgapur Office of the Deputy Labour Commissioner, Red Cross Rd, PETS Colony, City Center, Durgapur",
    "number": "NA"
  },
  {
    "shop": "Shibpur PHC",
    "address": "Shibpur, Joydev Kenduli Khagra Road Malandigi, Durgapur",
    "number": "NA"
  },
  {
    "shop": "Anandalok Hospital",
    "address": "Bus Stoppage, NSB Rd, next to Searsole Rajbari, Searsole Rajbari, Raniganj",
    "number": "NA"
  },
  {
    "shop": "Raniganj UPHC Tewari Para",
    "address": "Raniganj TEWARE PARA, Raniganj",
    "number": "NA"
  },
  {
    "shop": "Raniganj BPHC",
    "address": "Rahul Sankrityayan Marg East College Para, Raniganj",
    "number": "NA"
  },
  {
    "shop": "Asansol ACMOH Covaxin",
    "address": "Asansol District Hospital, SB Gorai Rd, Hamid Nagar, Asansol",
    "number": "NA"
  },
  {
    "shop": "Asansol ACMOH Covishield",
    "address": "CMOH Office, Paschim Kalyanpur Satellite Township, DR.B.C.Roy Rd, Asansol",
    "number": "NA"
  },
  {
    "shop": "HLG Hospital Asansol",
    "address": "Sen Raliegh Road, Asansol",
    "number": "NA"
  },
  {
    "shop": "ESI Hospital Asansol",
    "address": "Sen Raliegh Rd, Gobindapur, Asansol",
    "number": "NA"
  },
  {
    "shop": "Asansol Mines Board of Health",
    "address": "New Upper Chelidanga, Near Shivmandir Football Ground, Asansol",
    "number": "NA"
  },
  {
    "shop": "Asansol DH",
    "address": "Asansol Sub Divisional Court, Court Rd, Asansol",
    "number": "NA"
  },
  {
    "shop": "Dakshin Dhadka PHC",
    "address": "Kalla More, Domohani Railway Colony, Asansol",
    "number": "NA"
  },
  {
    "shop": "C H Kalla Covishield",
    "address": "United Bank of India - CH Kalla, Asansol",
    "number": "NA"
  },
  {
    "shop": "Divisional Railway Hospital As",
    "address": "Divisional Hospital, Eastern Railway, Pathak Bari, Asansol",
    "number": "NA"
  },
  {
    "shop": "Kelejora RH",
    "address": "RH PUFFED RICE MILL, Tewari Danga Post Dang Mejia",
    "number": "NA"
  }
];
function Details() {
  return (
    <div className="details">
      <div className="header">
        <p>VACCINE CENTERS</p>
        <p>
          Vaccine is just a prevention to prevent the spread of coronavirus. It
          is not a permanent solution.
        </p>
        <p>
          All these details are retrieved from -{" "}
          <a
            href="https://dashboard.cowin.gov.in/"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
        </p>
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

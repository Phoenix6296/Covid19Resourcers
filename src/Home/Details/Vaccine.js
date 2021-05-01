import React from "react";
import "./Details.css";
import Row from "./DetailRow/DetailRow";

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
        {/* Andal, Kajra, Ukhra, Khandra */}
        <Row
          shop="Andal PHC Covishield"
          address="Health Centre, Andal Gram"
          number="NA"
        />
        <Row shop="Baska SSK" address="Baska, Andal" number="NA" />
        <Row
          shop="Kajora East SSK"
          address="Sri Sri Bengal Ashram, Kajora, Andal"
          number="NA"
        />
        <Row
          shop="Khandra RH"
          address="Khandra Ukhra BPHC, Ukhra"
          number="NA"
        />
        <Row
          shop="Baktarnagar PHC"
          address="Baktarnagar PHC, Baktarnagar"
          number="NA"
        />
        <Row
          shop="Ballavpur RH"
          address="Ballavpur Rural Hospital, Ballavpur"
          number="NA"
        />
        <Row
          shop="Pandaveswar PHC"
          address="Pandaveswar PHC, Pandaveswar"
          number="NA"
        />
        {/* Durgapur */}
        <Row
          shop="UPHC Gopalmath"
          address="NYCLD, Gopalmath Branch, Gopalmath, Durgapur"
          number="NA"
        />
        <Row
          shop="Sanaka MCH"
          address="Sanaka Hospital, Malandighi, Kanksha, Durgapur"
          number="NA"
        />
        <Row
          shop="Health World Hospital"
          address="Gandhi More, Durgapur"
          number="NA"
        />
        <Row
          shop="The Mission Hospital"
          address="Immon Kalyan, Saptarshi Sarani, Sector IIC, Bidhannagar"
          number="NA"
        />
        <Row
          shop="IQ City MCH"
          address="IQ City Medical College, IQ City Rd, Durgapur"
          number="NA"
        />
        <Row
          shop="Lions Club"
          address="4A/9, Tagore Avenue, Prantika, A-Zone, Durgapur"
          number="NA"
        />
        <Row
          shop="Durgapur Steel Plant Hospital"
          address="JM Sengupta Rd, B-Zone, Durgapur"
          number="NA"
        />
        <Row
          shop="Gouri Devi Hospital & Research Institute"
          address="GT Road, Rajbandh, Durgapur"
          number="NA"
        />
        <Row
          shop="NIT Durgapur"
          address="National Institute of Technology, Mahatma Gandhi Rd, A-Zone, Durgapur"
          number="NA"
        />
        <Row
          shop="Asansol Durgapur Development Authority Building"
          address="2nd Floor, Administrative Building, 1st St, City Center, Durgapur"
          number="NA"
        />
        <Row
          shop="The Nation Hospital"
          address="Arrah Kalinagar, Durgapur"
          number="NA"
        />
        <Row
          shop="Palashdiha UPHC"
          address="Palashdiha Urban Primary Health Center, Industrial Area, Durgapur"
          number="NA"
        />
        <Row
          shop="Vivekananda Hospital"
          address="Dr Zakir Hussain Ave, Bidhannagar, Durgapur"
          number="NA"
        />
        <Row
          shop="ESI Hospital"
          address="Dr Zakir Hussain Ave, Bidhannagar, Durgapur"
          number="NA"
        />
        <Row
          shop="Durgapur SDH"
          address="Durgapur Sub Divisional Hospital, Bidhannagar, Durgapur"
          number="NA"
        />
        <Row
          shop="Srijani Auditorium"
          address="Srijani Auditorium, City Center, Durgapur"
          number="NA"
        />
        <Row
          shop="Durgapur ACMOH"
          address="Durgapur Office of the Deputy Labour Commissioner, Red Cross Rd, PETS Colony, City Center, Durgapur"
          number="NA"
        />

        <Row
          shop="Shibpur PHC"
          address="Shibpur, Joydev Kenduli Khagra Road Malandigi, Durgapur"
          number="NA"
        />
        {/* Raniganj */}
        <Row
          shop="Anandalok Hospital"
          address="Bus Stoppage, NSB Rd, next to Searsole Rajbari, Searsole Rajbari, Raniganj"
          number="NA"
        />
        <Row
          shop="Raniganj UPHC Tewari Para"
          address="Raniganj TEWARE PARA, Raniganj"
          number="NA"
        />
        <Row
          shop="Raniganj BPHC"
          address="Rahul Sankrityayan Marg East College Para, Raniganj"
          number="NA"
        />
        {/* Asansol */}
        <Row
          shop="Asansol ACMOH Covaxin"
          address="Asansol District Hospital, SB Gorai Rd, Hamid Nagar, Asansol"
          number="NA"
        />
        <Row
          shop="Asansol ACMOH Covishield"
          address="CMOH Office, Paschim Kalyanpur Satellite Township, DR.B.C.Roy Rd, Asansol"
          number="NA"
        />
        <Row
          shop="HLG Hospital Asansol"
          address="Sen Raliegh Road, Asansol"
          number="NA"
        />
        <Row
          shop="ESI Hospital Asansol"
          address="Sen Raliegh Rd, Gobindapur, Asansol"
          number="NA"
        />
        <Row
          shop="Asansol Mines Board of Health"
          address="New Upper Chelidanga, Near Shivmandir Football Ground, Asansol"
          number="NA"
        />
        <Row
          shop="Asansol DH"
          address="Asansol Sub Divisional Court, Court Rd, Asansol"
          number="NA"
        />
        <Row
          shop="Dakshin Dhadka PHC"
          address="Kalla More, Domohani Railway Colony, Asansol"
          number="NA"
        />
        <Row
          shop="C H Kalla Covishield"
          address="United Bank of India - CH Kalla, Asansol"
          number="NA"
        />
        <Row
          shop="Divisional Railway Hospital As"
          address="Divisional Hospital, Eastern Railway, Pathak Bari, Asansol"
          number="NA"
        />
        {/* Mejia */}
        <Row
          shop="Kelejora RH"
          address="RH PUFFED RICE MILL, Tewari Danga Post Dang Mejia"
          number="NA"
        />
      </div>
    </div>
  );
}

export default Details;

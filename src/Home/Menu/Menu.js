import React from "react";
import "./Menu.css";
import MenuRow from "./MenuRow/MenuRow";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Oxygen from "../Details/Oxygen";
import Ambulance from "../Details/Ambulance";
import Plasma from "../Details/Plasma";
import Medicine from "../Details/Medicine";
import CovidTestCenter from "../Details/CovidTestCenter";
import HomeTreatment from "../Details/HomeTreatment";

function Menu() {
  return (
    <Router>
      <div className="menu">
        <div className="lhs-header">
          <div className="lhs-header-1">
            <div className="para">
              <p>Resources</p>
            </div>
          </div>
          <form action="">
            <input type="text" id="input" placeholder="Search.." />
          </form>
        </div>
        <div className="lhs-body">
          <Link to="/">
            <MenuRow
              imgsrc={require("./MenuRow/Images/oxygen.jpeg").default}
              title="OXYGEN"
              description="Find Resources that provide  Oxygen"
            />
            <Link to="/ambulance">
              <MenuRow
                imgsrc={require("./MenuRow/Images/ambulance.jpeg").default}
                title="AMBULANCE"
                description="Find Resources that provide Ambulance"
              />
            </Link>
          </Link>
          <Link to="/plasma">
            <MenuRow
              imgsrc={require("./MenuRow/Images/plasma.jpg").default}
              title="PLASMA"
              description="There is insufficient data to recommend either for or against the use of plasma treatment."
            />
          </Link>
          <Link to="/medicine">
            <MenuRow
              imgsrc={require("./MenuRow/Images/medicine.jpeg").default}
              title="MEDICINE"
              description="Drugs aren't permanent solution to COVID-19, it is to be administered by medical professionals."
            />
          </Link>
          <Link to="/covidtestcenter">
            <MenuRow
              imgsrc={require("./MenuRow/Images/covidtestcenter.jpeg").default}
              title="COVID TEST CENTER"
              description="Find Covid Test Center."
            />
          </Link>
          <Link to="/hometreatment">
            <MenuRow
              imgsrc={require("./MenuRow/Images/hometreatment.jpeg").default}
              title="HOME TREATMENT"
              description="Covid 19 Home Treatment Step by Step."
            />
          </Link>
        </div>
        <div className="visitors">
          <p>No. of Visitors</p>
          <img
            src="https://hitwebcounter.com/counter/counter.php?page=7806440&style=0024&nbdigits=6&type=page&initCount=0"
            alt=""
            id="counter-image"
          />
        </div>
      </div>
      <Route path="/" exact component={Oxygen} />
      <Route path="/ambulance" exact component={Ambulance} />
      <Route path="/plasma" exact component={Plasma} />
      <Route path="/medicine" exact component={Medicine} />
      <Route path="/covidtestcenter" exact component={CovidTestCenter} />
      <Route path="/hometreatment" exact component={HomeTreatment} />
    </Router>
  );
}

export default Menu;

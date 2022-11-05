import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import NavigBar from "./NavBar.js";
import SelectSite from "./SelectSite.js";
import InfoSite from "./InfoSite.js";
import InfoLines from "./InfoLines.js";

export default function Consult(props) {
  let [selectedSite, setSelectedSite] = useState("");
  return (
    <div>
      <NavigBar page="Consult" setPage={props.setPage} />
      <br></br>
      <Col md="2"></Col>
      <Col md="8">
        <h2>Consultation :</h2>
        <br></br>
        <SelectSite setSelectedSite={setSelectedSite} />
        <br></br>
        <InfoSite selectedSite={selectedSite} />
        <br></br>
        <InfoLines selectedSite={selectedSite} />
      </Col>
    </div>
  );
}

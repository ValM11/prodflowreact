import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import NavigBar from "./NavBar.js";
import AddSite from "./AddSite.js";
import SelectSite from "./SelectSite.js";
import AddNewLine from "./AddNewLine.js";
import UpdateLine from "./UpdateLine.js";

export default function Update(props) {
  let [selectedSite, setSelectedSite] = useState("");
  return (
    <div>
      <NavigBar page="Update" setPage={props.setPage} />
      <br></br>

      <h2>Adding and updating production sites information :</h2>
      <br></br>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Add new site</Accordion.Header>
          <Accordion.Body>
            <AddSite />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Add new production line to a site</Accordion.Header>
          <Accordion.Body>
            <SelectSite setSelectedSite={setSelectedSite} />
            <br></br>
            <AddNewLine selectedSite={selectedSite} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Update production line information
          </Accordion.Header>
          <Accordion.Body>
            <SelectSite setSelectedSite={setSelectedSite} />
            <br></br>
            <UpdateLine selectedSite={selectedSite} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

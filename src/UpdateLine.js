import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SelectLine from "./SelectLine";

export default function UpdateLine(props) {
  let [selectedLine, setSelectedLine] = useState("");
  let [nbUnitsPerMn, setNbUnitsPerMn] = useState(0);

  function fetchUpdateLine() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ "line-update": nbUnitsPerMn }),
    };
    let url =
      "http://localhost:3001/production-line/" +
      props.selectedSite +
      "/" +
      selectedLine +
      "/update";
    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((data) => console.log(data));
  }

  useEffect(fetchUpdateLine, [nbUnitsPerMn]);

  return (
    <div>
      <SelectLine
        selectedSite={props.selectedSite}
        setSelectedLine={setSelectedLine}
      />
      <br></br>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          setNbUnitsPerMn(event.target.nbUnitsPerMn.value);
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>
            Enter the updated number of units per mn for this line
          </Form.Label>
          <Form.Control type="text" name="nbUnitsPerMn" required={true} />
        </Form.Group>
        <Button variant="outline-success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

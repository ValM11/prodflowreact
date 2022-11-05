import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function AddSite(props) {
  let [newLine, setNewLine] = useState("");

  function fetchNewLine() {
    if (newLine !== "") {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "new-line": newLine }),
      };
      let url =
        "http://localhost:3001/new-production-line/" + props.selectedSite;
      fetch(url, requestOptions)
        .then((response) => response.text())
        .then((data) => console.log(data));
    }
  }

  useEffect(fetchNewLine, [newLine]);

  return (
    <div>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          setNewLine(event.target.lineId.value);
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Enter new line for this site</Form.Label>
          <Form.Control type="text" name="lineId" required={true} />
        </Form.Group>
        <Button variant="outline-success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

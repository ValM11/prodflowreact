import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function AddSite() {
  let [newSite, setNewSite] = useState({});
  console.log(newSite);

  function fetchNewSite() {
    if (Object.keys(newSite).length !== 0) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSite),
      };
      let url = "http://localhost:3001/new-site";
      fetch(url, requestOptions)
        .then((response) => response.text())
        .then((data) => console.log(data));
    }
  }

  useEffect(fetchNewSite, [newSite]);

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        let { sitename, sitestreet, sitecity } = event.target.elements;
        setNewSite({
          sitename: sitename.value,
          sitestreet: sitestreet.value,
          sitecity: sitecity.value,
        });
      }}
    >
      <Form.Group className="mb-3">
        <Form.Label>Site name</Form.Label>
        <Form.Control type="text" name="sitename" required={true} />
        <Form.Text className="text-danger">Required field</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" name="sitestreet" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" name="sitecity" />
      </Form.Group>
      <Button variant="outline-success" type="submit">
        Submit
      </Button>
    </Form>
  );
}

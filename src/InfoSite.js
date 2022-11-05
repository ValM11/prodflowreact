import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function InfoSite(props) {
  let [siteInfos, setSiteInfos] = useState({});

  function fetchSiteInfo() {
    if (props.selectedSite !== "") {
      let url = "http://localhost:3001/site-info/" + props.selectedSite;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setSiteInfos(data);
        });
    }
  }

  useEffect(fetchSiteInfo, [props.selectedSite]);

  if (Object.keys(siteInfos).length !== 0) {
    return (
      <div>
        <Card border="success" style={{ width: "60rem" }}>
          <Row>
            <Col md="4">
              <Card.Img
                variant="top"
                src="https://picsum.photos/id/101/2621/1747"
              />
            </Col>
            <Col md="6">
              <Card.Body>
                <Card.Text>
                  <Card.Title>Site information</Card.Title>
                  <br></br>
                  <Card.Text>
                    <p>Site: {siteInfos.name}</p>
                    <p>Address: {siteInfos.address.street}</p>
                    <p>City: {siteInfos.address.city}</p>
                  </Card.Text>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

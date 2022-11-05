import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

export default function InfoLines(props) {
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

  if (
    typeof siteInfos.prodLines !== "undefined" &&
    siteInfos.prodLines !== []
  ) {
    let prodLines = siteInfos.prodLines;
    return (
      <div>
        <h3>Production lines information</h3>
        <div>
          <Table striped bordered size="sm" variant="success">
            <thead>
              <tr>
                <th>Line ID</th>
                <th>Number of units / mn</th>
              </tr>
            </thead>
            <tbody>
              {prodLines.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.lineId}</td>
                    <td>{val.nbUnitPerMn}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

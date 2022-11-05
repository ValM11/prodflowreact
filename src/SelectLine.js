import React, { useEffect, useState } from "react";

export default function SelectLine(props) {
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

  useEffect(fetchSiteInfo);

  let prodLines = siteInfos.prodLines;
  if (typeof prodLines !== "undefined" && prodLines !== []) {
    const AllLines = prodLines.map((line) => (
      <option key={line.lineId} value={line.lineId}>
        {line.lineId}
      </option>
    ));
    return (
      <div>
        <label htmlFor="line-choice">Choose your line:</label>
        <select
          id="line-choice"
          defaultValue={"-- select a production line --"}
          onChange={(event) => props.setSelectedLine(event.target.value)}
        >
          <option disabled value="-- select a production line --">
            {" "}
            -- select a production line --{" "}
          </option>
          {AllLines}
        </select>
      </div>
    );
  }
}

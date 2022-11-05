import React, { useEffect, useState } from "react";

export default function SelectSite(props) {
  let [siteList, setSiteList] = useState([]);

  function fetchSites() {
    let url = "http://localhost:3001/site-names";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSiteList(data);
      });
  }

  useEffect(fetchSites);

  const AllSites = siteList.map((site) => (
    <option key={site} value={site}>
      {site}
    </option>
  ));

  return (
    <div>
      <label htmlFor="site-choice">Choose your site:</label>
      <select
        id="site-choice"
        defaultValue={"-- select a site --"}
        onChange={(event) => props.setSelectedSite(event.target.value)}
      >
        <option disabled value="-- select a site --">
          {" "}
          -- select a site --{" "}
        </option>
        {AllSites}
      </select>
    </div>
  );
}

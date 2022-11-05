import React from "react";
import NavigBar from "./NavBar.js";

export default function Homepage(props) {
  return (
    <div>
      <NavigBar page="Homepage" setPage={props.setPage} />
      <div className="text-center">
        <h1>
          Welcome<br></br>
          to
        </h1>
        <h1>
          <em>ProdFlow</em>
        </h1>
      </div>
    </div>
  );
}

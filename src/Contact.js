import React from "react";
import NavigBar from "./NavBar.js";

export default function Contact(props) {
  return (
    <div>
      <NavigBar page="Contact" setPage={props.setPage} />
      Contact
    </div>
  );
}

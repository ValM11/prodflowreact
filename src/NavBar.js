import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavigBar(props) {
  function onLinkClick(event, page) {
    event.preventDefault();
    props.setPage(page);
    console.log(page);
  }

  return (
    <Navbar bg="success" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/home">ProdFlow</Navbar.Brand>
        <Nav variant="tabs" className="me-auto">
          <Nav.Link
            href="/home"
            onClick={(event) => onLinkClick(event, "Homepage")}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="/consult"
            onClick={(event) => onLinkClick(event, "Consult")}
          >
            Consultation
          </Nav.Link>
          <Nav.Link
            href="/update"
            onClick={(event) => onLinkClick(event, "Update")}
          >
            Update
          </Nav.Link>
          <Nav.Link
            href="/contact"
            onClick={(event) => onLinkClick(event, "Contact")}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    // Penser a desactiver element de la page !!!
    // <ul>
    //     <li><a href="/home" onClick={(event)=> onLinkClick(event, "Homepage")}>Home</a></li>
    //     <li><a href="/consult" onClick={(event)=>onLinkClick(event, "Consult")}>Consultation</a></li>
    //     <li><a href="/update"  onClick={(event)=>onLinkClick(event, "Update")}>Update</a></li>
    //     <li><a href="/contact" onClick={(event)=>onLinkClick(event, "Contact")}>Contact</a></li>
    // </ul>
  );
}

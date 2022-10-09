import React from "react";
import Nav from 'react-bootstrap/Nav';

export function Navbar() {
  return (
    <Nav className="justify-content-end" defaultActiveKey="/home" as="ul">
    <Nav.Item as="li">
      <Nav.Link href="/home">Work</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link eventKey="link-1">About us</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link eventKey="link-2">Contact</Nav.Link>
    </Nav.Item>
  </Nav>
  )
}

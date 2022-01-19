import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Nav = () => {
  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand>
          Daily Stock Prices
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Nav;
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Nav = () => {
  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand>
          WSB Stock Sentiment
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Nav;
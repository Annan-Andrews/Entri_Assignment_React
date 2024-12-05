import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from "react-router-dom";

function Root(){
  return(
    <>
      <header>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Product List</Navbar.Brand>
            <Nav className="me-auto">
              {/* <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Features</Nav.Link>
              <Nav.Link href="#">Pricing</Nav.Link> */}
            </Nav>
          </Container>
        </Navbar>
      </header>

      <Outlet />

      <footer>
        <p>Footer</p>
      </footer>
    </>
  )
}


export default Root
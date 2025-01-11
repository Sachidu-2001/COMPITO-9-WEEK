import { Navbar, Nav, Container } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

import netflixLogo from "../assets/logo.png";
import { Component } from "react";

class NetNavBar extends Component {
  render() {
    return (
      <Navbar expand="lg" className="bg-black">
        <Container fluid>
          
            <Navbar.Brand href="#">
              <img
                src={netflixLogo}
                alt="NetFlixLogo"
                style={{ height: "55px" }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="text-white fw-bold">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="text-secondary fw-bold">
                TV Shows
              </Nav.Link>
              <Nav.Link href="#" className="text-secondary fw-bold">
                Movies
              </Nav.Link>
              <Nav.Link href="#" className="text-secondary fw-bold">
                Recently Added
              </Nav.Link>
              <Nav.Link href="#" className="text-secondary fw-bold">
                My List
              </Nav.Link>
            </Nav>
            <div className="me-2">
              <Icon.Search className="text-white mx-3" />
              <span className="text-white me-3 fw-bold">KIDS</span>
              <Icon.Bell className="text-white me-4" />
              <span>
                <Icon.PersonCircle className="text-white" />
              </span>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NetNavBar;

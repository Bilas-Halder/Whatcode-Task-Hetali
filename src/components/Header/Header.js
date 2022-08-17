import React from 'react';
import './Header.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../images/logoWithName.png';

const Header = () => {

    return (
        <Navbar className="custom-nav" fixed='top' expand="lg">
            <Container>
                <Navbar.Brand to="/">
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="logo-div">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav.Link className="text-center nav-btn">ABOUT US</Nav.Link>

                    <Nav.Link className="text-center nav-btn">PROJECTS</Nav.Link>

                    <Nav.Link className="text-center nav-btn">DIVERSIFICATION</Nav.Link>

                    <Nav.Link className="text-center nav-btn">OUR PROCESS</Nav.Link>

                    <Nav.Link className="text-center nav-btn">TESTIMONIALS</Nav.Link>

                    <Nav.Link className="text-center nav-btn">CAREERS</Nav.Link>
                    
                    <Nav.Link className="text-center nav-btn">CONTACT US</Nav.Link>

                    

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
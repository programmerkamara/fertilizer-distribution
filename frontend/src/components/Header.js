import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
    return (
        <Navbar bg="success" expand="lg">
            <Navbar.Brand href="/" className="text-white"><b>Agriculture Store and Inventory System</b></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="ml-auto">
                    <Nav.Link href="/" className="text-white"><b>Home</b></Nav.Link>
                    <Nav.Link href="/login" className="text-white"><b>Login</b></Nav.Link>
                    <Nav.Link href="/about" className="text-white"><b>About </b></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;

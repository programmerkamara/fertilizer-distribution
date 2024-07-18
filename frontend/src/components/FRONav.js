import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

const FRONav = () => {
    return (
        <Navbar bg="success" expand="lg">
            <Navbar.Brand href="/froDashboard" className="text-white"><b>Agriculture Store and Inventory System</b></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="mr-auto">
                    <Nav.Link href="#" className="text-white"><b>FRO</b></Nav.Link>
                </Nav>
                <Nav>
                    <Button variant="outline-light" href="/froDashboard"><b>Home</b></Button><br></br>
                </Nav>
                <Nav>
                    <Button variant="outline-light" href="/"><b>Logout</b></Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default FRONav;

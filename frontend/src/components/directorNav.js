import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

const DirectorNav = () => {
    return (
        <Navbar bg="success" expand="lg">
            <Navbar.Brand href="/directorDashboard" className="text-white"><b>Agriculture Store and Inventory System</b></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="mr-auto">
                    <Nav.Link href="#" className="text-white"><b>Director</b></Nav.Link>
                </Nav>
                <Nav>
                    <Button variant="outline-light" href="/directorDashboard"><b>Home</b></Button><br></br>
                </Nav>
                
                <Nav>
                    <Button variant="outline-light" href="/"><b>Logout</b></Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default DirectorNav;

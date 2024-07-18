import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

const LoginNav = () => {
    const [user, setUser] = useState(null); // State to hold user information

    useEffect(() => {
        // Fetch user info from localStorage on component mount
        const fetchUserInfo = () => {
            const userInfo = JSON.parse(localStorage.getItem("userInfo"));
            setUser(userInfo); // Set user state with fetched info
        };

        fetchUserInfo();
    }, []);

    const handleLogout = () => {
        // Clear local storage (or session storage) here
        localStorage.removeItem("token"); // Remove token
        localStorage.removeItem("userInfo"); // Remove user info

        // Redirect to login page or perform any other logout logic
        window.location.href = "/"; // Replace with actual login route
    };

    return (
        <Navbar bg="success" expand="lg">
            <Navbar.Brand href="/" className="text-white">
                <b>Agriculture Store and Inventory System</b>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="mr-auto">
                    {user && (
                        <Nav.Link href="/" className="text-white">
                            <b>{user.username}</b> ({user.user_type})
                        </Nav.Link>
                    )}
                </Nav>
                <Nav>
                    <Button variant="outline-light" onClick={handleLogout}>
                        <b>Home</b>
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default LoginNav;

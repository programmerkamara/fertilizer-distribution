import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

const AdminNav = () => {
  const [user, setUser] = useState(null); // State to hold user information

  useEffect(() => {
    // Mock fetch user info (replace with actual logic to fetch user info)
    const fetchUserInfo = async () => {
      try {
        // Example: fetch user info from localStorage or API
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        setUser(userInfo); // Set user state with fetched info
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleLogout = () => {
    
    localStorage.removeItem("token"); 
    localStorage.removeItem("userInfo"); 

    
    window.location.href = "/"; 
  };

  return (
    <Navbar bg="success" expand="lg">
      <Navbar.Brand href="/adminDashboard" className="text-white">
        <b>Agriculture Store and Inventory System</b>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="mr-auto">
          {user && (
            <Nav.Link href="/adminDashboard" className="text-white">
              <b>{user.first_name}</b> ({user.staff_type})
            </Nav.Link>
          )}
        </Nav>
        <Nav>
                    <Button variant="outline-light" href="/adminDashboard"><b>Home</b></Button><br></br>
                </Nav>
        <Nav>
          <Button variant="outline-light" onClick={handleLogout}>
            <b>Logout</b>
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AdminNav;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import image3 from "./images/Fr2.jpg";
import "../App.css";
import FRONav from "./FRONav";

const UpdateFarmer = () => {
  const { id } = useParams(); // Fetching farmer ID from URL params
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    password2: "",
    first_name: "",
    last_name: "",
    email: "",
    user_type: "3", // Default to "Farmer"
    is_staff: true,
    is_active: true,
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchFarmerDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/farm/${id}/`);
        const { username, first_name, last_name, email } = response.data;
        setFormData({
          username: username || "",
          first_name: first_name || "",
          last_name: last_name || "",
          email: email || "",
          user_type: "3", // Ensure user type remains "Farmer"
          is_staff: true,
          is_active: true,
        });
      } catch (error) {
        console.error("Error fetching Farmer details:", error);
      }
    };

    fetchFarmerDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.password2) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.put(`http://localhost:8000/farm/${id}/`, formData);
      setMessage(response.data?.message || "Farmer updated successfully");
    } catch (error) {
      setMessage(error.response?.data?.error || "An error occurred. Please try again.");
    }
  };

  return (
    <div style={{ backgroundImage: `url(${image3})`, backgroundSize: "cover", minHeight: "100vh" }}>
      <FRONav />
      <div className="container1 d-flex justify-content-center align-items-center" style={{ paddingTop: "10px", paddingBottom: "20px" }}>
        <Card className="mt-5 mb-5" style={{ width: "30rem", backgroundColor: "rgba(255, 255, 255, 0.8)", padding: "10px" }}>
          <Card.Body>
            <Card.Title className="text-center "><b>Update Farmer</b></Card.Title>
            {message && <p className="mt-3 text-center text-success">{message}</p>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label><b>Username</b></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label><b>Password</b></Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter new password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label><b>Confirm Password</b></Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm new password"
                  name="password2"
                  value={formData.password2}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label><b>First Name</b></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label><b>Last Name</b></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label><b>Email</b></Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label><b>User Type</b></Form.Label>
                <Form.Select
                  name="user_type"
                  value={formData.user_type}
                  onChange={handleChange}
                  disabled // Disable user type selection
                >
                  <option value="3">Farmer</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Is Staff"
                  name="is_staff"
                  checked={formData.is_staff}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Is Active"
                  name="is_active"
                  checked={formData.is_active}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="success" type="submit" className="w-100"><b>Update</b></Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default UpdateFarmer;

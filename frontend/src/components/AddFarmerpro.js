import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import image3 from "./images/bg2.jpg";
import "../App.css";
import FRONav from "./FRONav";

const AddFarmerpro = () => {
  const [formData, setFormData] = useState({
    farmer_type: null,
    phone: "",
    address: "",
    contact_details: "",
    farm_details: "",
    user: null,
  });
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from backend API
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/user/");
        setUsers(response.data); // Assuming response.data contains the list of users
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://127.0.0.1:8000/farmers/", formData);
      setMessage("Farmer Profile successful");
      setFormData({
        farmer_type: null,
        phone: "",
        address: "",
        contact_details: "",
        farm_details: "",
        user: null,
      });
    } catch (error) {
      setMessage(
        error.response?.data?.error || "An error occurred. Please try again."
      );
    }
  };

  // Filter users to include only those with user_type "farmer"
  const farmerUsers = users.filter((user) => user.user_type === 3);

  return (
    <div
      style={{
        backgroundImage: `url(${image3})`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <FRONav />
      <div
        className="container1 d-flex justify-content-center align-items-center"
        style={{ paddingTop: "10px", paddingBottom: "20px" }}
      >
        <Card
          className="mt-5 mb-5"
          style={{
            width: "30rem",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "10px",
          }}
        >
          <Card.Body>
            <Card.Title className="text-center text-success">
              <b>Farmer Profile</b>
            </Card.Title>
            {message && (
              <p className="mt-3 text-center text-success">{message}</p>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>
                  <b>User</b>
                </Form.Label>
                <Form.Select
                  name="user"
                  value={formData.user}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select User</option>
                  {farmerUsers.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.username}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  <b>Farmer Type</b>
                </Form.Label>
                <Form.Select
                  name="farmer_type"
                  value={formData.farmer_type}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Farmer Type</option>
                  <option value="Individual">Individual</option>
                  <option value="CBO">CBO</option>
                  <option value="NGO">NGO</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  <b>Phone</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  <b>Address</b>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={2}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  <b>Contact Details</b>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter contact details"
                  name="contact_details"
                  value={formData.contact_details}
                  onChange={handleChange}
                  rows={2}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  <b>Farm Details</b>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter farm details"
                  name="farm_details"
                  value={formData.farm_details}
                  onChange={handleChange}
                  rows={2}
                  required
                />
              </Form.Group>
              <Button variant="success" type="submit" className="w-100">
                <b>Update</b>
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AddFarmerpro;

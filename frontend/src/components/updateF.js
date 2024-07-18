import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import FRONav from "./FRONav";

const UpdateFarmerp = () => {
  const [formData, setFormData] = useState({
    user: {
      id: "",
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
    farmer_type: "",
    phone: "",
    address: "",
    contact_details: "",
    farm_details: "",
  });
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/farmers/${id}/`);
        const farmerData = response.data;
        setFormData({
          user: {
            id: farmerData.user.id,
            username: farmerData.user.username,
            first_name: farmerData.user.first_name,
            last_name: farmerData.user.last_name,
            email: farmerData.user.email,
            password: "", // Ensure the password field is initially empty for security
          },
          farmer_type: farmerData.farmer_type,
          phone: farmerData.phone,
          address: farmerData.address,
          contact_details: farmerData.contact_details,
          farm_details: farmerData.farm_details,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      if (name in prevFormData.user) {
        return {
          ...prevFormData,
          user: {
            ...prevFormData.user,
            [name]: value,
          },
        };
      } else {
        return {
          ...prevFormData,
          [name]: value,
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://127.0.0.1:8000/farmers/${id}/`, formData);
      setMessage("Profile updated successfully");
      setTimeout(() => {
        navigate("/fro/viewFarmerp");
      }, 1500);
    } catch (error) {
      setMessage(
        error.response?.data?.error || "An error occurred. Please try again."
      );
    }
  };

  
  return (
    <div>
      <FRONav />
      <div className="container p-5">
        <Card className="card-container">
          <h2 className="text-center text-success mb-4"><b>Update Farmer Profile</b></h2>
          <Card.Body>
            {message && <p className="text-center text-success">{message}</p>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label><b>Username</b></Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.user.username}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label><b>First Name</b></Form.Label>
                <Form.Control
                  type="text"
                  name="first_name"
                  value={formData.user.first_name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label><b>Last Name</b></Form.Label>
                <Form.Control
                  type="text"
                  name="last_name"
                  value={formData.user.last_name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label><b>Email</b></Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.user.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label><b>Password</b></Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.user.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label><b>Farmer Type</b></Form.Label>
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
                <Form.Label><b>Phone</b></Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label><b>Address</b></Form.Label>
                <Form.Control
                  as="textarea"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={2}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label><b>Contact Details</b></Form.Label>
                <Form.Control
                  as="textarea"
                  name="contact_details"
                  value={formData.contact_details}
                  onChange={handleChange}
                  rows={2}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label><b>Farm Details</b></Form.Label>
                <Form.Control
                  as="textarea"
                  name="farm_details"
                  value={formData.farm_details}
                  onChange={handleChange}
                  rows={2}
                  required
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

export default UpdateFarmerp;

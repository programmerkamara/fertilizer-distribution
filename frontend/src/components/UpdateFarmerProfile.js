import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import FRONav from "./FRONav";

const UpdateFarmerProfile = () => {
  const [formData, setFormData] = useState({
    farmer_type: "",
    phone: "",
    address: "",
    contact_details: "",
    farm_details: "",
    user: {
      id: "",
      username: "",
      email: "",
    },
  });
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/farmerpro/${id}/`);
        const farmerData = response.data;
        setFormData({
          farmer_type: farmerData.farmer_type,
          phone: farmerData.phone,
          address: farmerData.address,
          contact_details: farmerData.contact_details,
          farm_details: farmerData.farm_details,
          user: farmerData.user,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://127.0.0.1:8000/farmerpro/${id}/`, formData);
      setMessage("Profile updated successfully");
      setTimeout(() => {
        navigate("/fro/viewFarmerp");
      }, 1500);
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error("Server response error:", error.response.data);
        setMessage(
          error.response.data.error || "An error occurred. Please try again."
        );
      } else if (error.request) {
        // Request was made but no response received
        console.error("Network error:", error.request);
        setMessage("Network error. Please try again.");
      } else {
        // Something else happened while setting up the request
        console.error("Error:", error.message);
        setMessage("An error occurred. Please try again.");
      }
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
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label><b>Email</b></Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.user.email}
                  onChange={handleChange}
                  disabled
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

export default UpdateFarmerProfile;

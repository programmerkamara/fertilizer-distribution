// ApplicationForm.js

import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import FarmNav from "./farmNav";

const FarmerApplicationForm = () => {
  const [formData, setFormData] = useState({
    farmer: "",
    fertilizer: "",
    quantity_needed: "",
    status: "Pending", 
  });

  const [farmers, setFarmers] = useState([]);
  const [fertilizers, setFertilizers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchFarmers();
    fetchFertilizers();
  }, []);

  const fetchFarmers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/farmers/");
      setFarmers(response.data);
    } catch (error) {
      console.error("Error fetching farmers:", error);
    }
  };

  const fetchFertilizers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/fertilizers/");
      setFertilizers(response.data);
    } catch (error) {
      console.error("Error fetching fertilizers:", error);
    }
  };

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
      await axios.post("http://localhost:8000/fertilizer-applications/", formData);
      setErrorMessage(""); 
      alert("Application submitted successfully"); 
 
      setFormData({
        farmer: "",
        fertilizer: "",
        quantity_needed: "",
        status: "Pending",  
      });
    } catch (error) {
      console.error("Error submitting application:", error);
      setErrorMessage(error.response?.data?.detail || "An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <FarmNav/>
      <br></br>
      <div className="container">
        <Card className="mt-5 mb-5 p-4">
          <Card.Title className="text-center mb-4 text-success"><b>Application Form</b></Card.Title>
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label><b>Farmer</b></Form.Label>
              <Form.Select name="farmer" value={formData.farmer} onChange={handleChange} required>
                <option value="">Select Farmer</option>
                {farmers.map((farmer) => (
                  <option key={farmer.id} value={farmer.id}>{farmer.user.username}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label><b>Fertilizer</b></Form.Label>
              <Form.Select name="fertilizer" value={formData.fertilizer} onChange={handleChange} required>
                <option value="">Select Fertilizer</option>
                {fertilizers.map((fertilizer) => (
                  <option key={fertilizer.id} value={fertilizer.id}>{fertilizer.fertilizer_type}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label><b>Quantity Needed</b></Form.Label>
              <Form.Control type="number" name="quantity_needed" value={formData.quantity_needed} onChange={handleChange} required />
            </Form.Group>
            <Button variant="success" type="submit" className="w-100">
              <b>Submit Application</b>
            </Button>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default FarmerApplicationForm;

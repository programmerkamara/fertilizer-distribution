import React, { useState, useEffect } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import axios from "axios";
import image3 from "./images/bg2.jpg";
import "../App.css";
import DirectorNav from "./directorNav";

const AssignedFertilizerForm1 = () => {
  const [farmers, setFarmers] = useState([]);
  const [fertilizerApplications, setFertilizerApplications] = useState([]);
  const [formData, setFormData] = useState({
    farmer: "",
    fertilizer_application: "",
    quantity_assigned: "",
    unique_code: "",
  });
  const [formError, setFormError] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // New state for success message

  useEffect(() => {
    fetchFarmers();
    fetchFertilizerApplications();
  }, []);

  const fetchFarmers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/farmers/");
      setFarmers(response.data);
    } catch (error) {
      console.error("Error fetching farmers:", error);
    }
  };

  const fetchFertilizerApplications = async () => {
    try {
      const response = await axios.get("http://localhost:8000/fertilizer-apply/");
      console.log("Fertilizer applications response:", response.data); // Log response data for debugging
      setFertilizerApplications(response.data);
    } catch (error) {
      console.error("Error fetching fertilizer applications:", error);
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
      await axios.post("http://localhost:8000/assigned-fertilizers/", formData);
      console.log("Assigned fertilizer added successfully:", formData);
      setFormData({
        farmer: "",
        fertilizer_application: "",
        quantity_assigned: "",
        unique_code: "",
      });
      setFormError(""); 
      setShowSuccessMessage(true); 
    } catch (error) {
      if (error.response && error.response.data && error.response.data.unique_code) {
        setFormError(`Unique code: ${error.response.data.unique_code.join(", ")}`);
      } else {
        setFormError("Error adding assigned fertilizer.");
      }
    }
  };

  return (
    <div>
      <DirectorNav />
      <div
        style={{
          backgroundImage: `url(${image3})`,
          backgroundSize: "cover",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          className="mt-5 mb-5"
          style={{
            width: "80%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "10px",
            maxWidth: "500px",
          }}
        >
          <Card.Body>
            <Card.Title className="text-center text-success">
              <b>Add Assigned Fertilizer</b>
            </Card.Title>
            {formError && <Alert variant="danger" className="mt-3">{formError}</Alert>}
            {showSuccessMessage && <Alert variant="success" className="mt-3">Assigned fertilizer added successfully!</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Farmer</Form.Label>
                <Form.Select
                  name="farmer"
                  value={formData.farmer}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Farmer</option>
                  {farmers.map((farmer) => (
                    <option key={farmer.id} value={farmer.id}>
                      {farmer.user && farmer.user.username}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Fertilizer Application</Form.Label>
                <Form.Select
                  name="fertilizer_application"
                  value={formData.fertilizer_application}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Fertilizer Application</option>
                  {fertilizerApplications.map((application) => (
                    <option key={application.id} value={application.id}>
                      {application.farmer &&
                        application.farmer.user &&
                        application.farmer.user.username}{" "}
                      - {application.fertilizer && application.fertilizer.fertilizer_type} -{" "}
                      {application.status}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Quantity Assigned</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter quantity assigned"
                  name="quantity_assigned"
                  value={formData.quantity_assigned}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Unique Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter unique code"
                  name="unique_code"
                  value={formData.unique_code}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button variant="success" type="submit" className="w-100">
                Add Assigned Fertilizer
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AssignedFertilizerForm1;

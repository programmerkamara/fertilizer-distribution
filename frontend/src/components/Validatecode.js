import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import image3 from "./images/bg2.jpg";
import "../App.css";
import StoreNav from "./StoreNav";

const ValidateCodeForm = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://127.0.0.1:8000/validate-code/${code}/`);
      setResult(response.data);
      setError("");
    } catch (error) {
      setError(error.response?.data?.detail || "Invalid Code, Please try again.");
      setResult(null);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${image3})`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <StoreNav />
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
            <Card.Title className="text-center">
              <b>Validate Code</b>
            </Card.Title>
            {error && <p className="mt-3 text-center text-danger"><b>{error}</b></p>}
            {result && (
              <div className="mt-3">
                <p><b>Farmer Name:</b> {result.farmer_name}</p>
                <p><b>Farmer Type:</b> {result.farmer_type}</p>
                <p><b>Quantity Assigned:</b> {result.quantity_assigned}</p>
                <p><b>Fertilizer Type:</b> {result.fertilizer_type}</p>
              </div>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>
                  <b>Enter Code</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter code"
                  name="code"
                  value={code}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button variant="success" type="submit" className="w-100">
                <b>Validate</b>
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ValidateCodeForm;

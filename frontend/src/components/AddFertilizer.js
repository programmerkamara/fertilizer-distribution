import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import image3 from "./images/bg2.jpg";
import "../App.css";
import StoreNav from "./StoreNav";

const AddFertilizer = () => {
  const [formData, setFormData] = useState({
    added_by: null,
    fertilizer_type: "",
    quantity: null,
  });

  const [storeKeepers, setStoreKeepers] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchStoreKeepers();
  }, []);

  const fetchStoreKeepers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/storekeepers/");
      setStoreKeepers(response.data);
    } catch (error) {
      console.error("Error fetching store keepers:", error);
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
      await axios.post("http://localhost:8000/fertilizers/", formData);
      setSuccessMessage("Fertilizer added successfully");
      setFormData({
        added_by: null,
        fertilizer_type: "",
        quantity: null,
      });
      setErrorMessage(""); // Clear any previous error message
    } catch (error) {
      console.error("Error adding fertilizer:", error);
      setErrorMessage(
        error.response?.data?.error || "An error occurred. Please try again."
      );
      setSuccessMessage(""); // Clear success message on error
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
              <b>Add Fertilizer</b>
            </Card.Title>
            {errorMessage && (
              <p className="text-danger text-center">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-success text-center">{successMessage}</p>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>
                  <b>Store Keeper</b>
                </Form.Label>
                <Form.Select
                  name="added_by"
                  value={formData.added_by || ""}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Store Keeper</option>
                  {storeKeepers.map((keeper) => (
                    <option key={keeper.id} value={keeper.id}>
                      {keeper.user.username}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  <b>Fertilizer Type</b>
                </Form.Label>
                <Form.Select
                  name="fertilizer_type"
                  value={formData.fertilizer_type || ""}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Fertilizer Type</option>
                  <option value="NPK:20:20">NPK:20:20</option>
                  <option value="NPK:24:25">NPK:24:25</option>
                  <option value="NPK:50:50">NPK:50:50</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  <b>Quantity</b>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter quantity"
                  name="quantity"
                  value={formData.quantity || ""}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button variant="success" type="submit" className="w-100">
                <b>Add Fertilizer</b>
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AddFertilizer;

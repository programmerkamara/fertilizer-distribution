import React, { useState, useEffect } from "react";
import { Form, Button, Card, Table, Modal, Alert } from "react-bootstrap";
import axios from "axios";
import image3 from "./images/bg2.jpg";
import "../App.css";
import DirectorNav from "./directorNav";

const ViewFertilizerDistributionD = () => {
  const [distributions, setDistributions] = useState([]);
  const [filteredDistributions, setFilteredDistributions] = useState([]);
  const [farmers, setFarmers] = useState([]);
  const [storeKeepers, setStoreKeepers] = useState([]);
  const [formData, setFormData] = useState({
    fertilizer_type: "",
    quantity: "",
    farmer: null,
    distributed_by: null,
    validation_code: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchDistributions();
    fetchFarmers();
    fetchStoreKeepers();
  }, []);

  const fetchDistributions = async () => {
    try {
      const response = await axios.get("http://localhost:8000/fertilizer-distributions/");
      const distributionsData = await Promise.all(response.data.map(async (dist) => {
        const farmerResponse = await axios.get(`http://localhost:8000/farmers/${dist.farmer}/`);
        const distributedByResponse = await axios.get(`http://localhost:8000/storekeepers/${dist.distributed_by}/`);
        return {
          ...dist,
          farmer: farmerResponse.data,
          distributed_by: distributedByResponse.data,
        };
      }));
      setDistributions(distributionsData);
      setFilteredDistributions(distributionsData);
    } catch (error) {
      console.error("Error fetching fertilizer distributions:", error);
    }
  };

  const fetchFarmers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/farmers/");
      setFarmers(response.data);
    } catch (error) {
      console.error("Error fetching farmers:", error);
    }
  };

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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    filterDistributions(e.target.value);
  };

  const filterDistributions = (query) => {
    const filtered = distributions.filter((dist) => {
      const username = dist.farmer ? dist.farmer.user.username.toLowerCase() : "";
      const validationCode = dist.validation_code.toLowerCase();
      return (
        username.includes(query.toLowerCase()) ||
        validationCode.includes(query.toLowerCase())
      );
    });
    setFilteredDistributions(filtered);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const exists = distributions.some(dist => dist.validation_code === formData.validation_code);
    
    if (exists) {
      setValidationError("Validation code already exists.");
      return;
    }

    try {
      await axios.post("http://localhost:8000/fertilizer-distributions/", formData);
      console.log("Fertilizer distribution added successfully:", formData);
      fetchDistributions();
      handleCloseModal();
    } catch (error) {
      console.error("Error adding fertilizer distribution:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      fertilizer_type: "",
      quantity: "",
      farmer: null,
      distributed_by: null,
      validation_code: "",
    });
    setValidationError("");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${image3})`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <DirectorNav />
      <div className="container1 d-flex justify-content-center align-items-center">
        <Card
          className="mt-5 mb-5"
          style={{
            width: "80%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "10px",
          }}
        >
          <Card.Body>
            <Card.Title className="text-center text-success">
              <b>Fertilizer Distributions</b>
            </Card.Title>
            <Form.Control
              type="text"
              placeholder="Search by username or validation code"
              value={searchQuery}
              onChange={handleSearchChange}
              className="mb-3"
            />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th className="text-white bg-success text-center">No.</th>
                  <th className="text-white bg-success text-center">Farmer Name</th>
                  <th className="text-white bg-success text-center">Farmer Type</th>
                  <th className="text-white bg-success text-center">Fertilizer Type</th>
                  <th className="text-white bg-success text-center">Quantity</th>
                  <th className="text-white bg-success text-center">Validation Code</th>
                  <th className="text-white bg-success text-center">Distributed By</th>
                  <th className="text-white bg-success text-center">Created At</th>
                </tr>
              </thead>
              <tbody>
                {filteredDistributions.map((dist, index) => (
                  <tr key={dist.id}>
                    <td>{index + 1}</td>
                    <td>{dist.farmer ? dist.farmer.user.username : ""}</td>
                    <td>{dist.farmer ? dist.farmer.farmer_type : ""}</td>
                    <td>{dist.fertilizer_type}</td>
                    <td>{dist.quantity}</td>
                    <td>{dist.validation_code}</td>
                    <td>{dist.distributed_by ? dist.distributed_by.user.username : ""}</td>
                    <td>{new Date(dist.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title className="text-success"><b>Issue Fertilizer</b></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {validationError && <Alert variant="danger">{validationError}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Farmer Name</Form.Label>
              <Form.Select
                name="farmer"
                value={formData.farmer}
                onChange={handleChange}
                required
              >
                <option value="">Select Farmer</option>
                {farmers.map((farmer) => (
                  <option key={farmer.id} value={farmer.id}>
                    {farmer.user.username}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fertilizer Type</Form.Label>
              <Form.Control
                as="select"
                name="fertilizer_type"
                value={formData.fertilizer_type}
                onChange={handleChange}
                required
              >
                <option value="">Select Fertilizer Type</option>
                <option value="NPK:20:20">NPK:20:20</option>
                <option value="NPK:24:25">NPK:24:25</option>
                <option value="NPK:50:50">NPK:50:50</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Validation Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter validation code"
                name="validation_code"
                value={formData.validation_code}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Distributed By</Form.Label>
              <Form.Select
                name="distributed_by"
                value={formData.distributed_by}
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
            <Button variant="success" type="submit">
              Issue Fertilizer
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ViewFertilizerDistributionD;

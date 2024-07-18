import React, { useState, useEffect } from "react";
import { Form, Button, Card, Table, Modal } from "react-bootstrap";
import axios from "axios";
import image3 from "./images/bg2.jpg";
import "../App.css";
import StoreNav from "./StoreNav";

const ViewFertilizer = () => {

  const [storeKeepers, setStoreKeepers] = useState({});
  const [fertilizerTotals, setFertilizerTotals] = useState({});
  const [fertilizerDistributions, setFertilizerDistributions] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    added_by: null,
    fertilizer_type: "",
    quantity: null,
  });

  useEffect(() => {
    fetchFertilizers();
    fetchDistributions();
  }, []);

  const fetchFertilizers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/fertilizers/");
      
      // Fetch the storekeeper details for each fertilizer
      const storeKeeperIds = [...new Set(response.data.map(f => f.added_by))];
      const storeKeeperData = {};
      for (let id of storeKeeperIds) {
        const storeKeeperResponse = await axios.get(`http://localhost:8000/storekeepers/${id}/`);
        storeKeeperData[id] = storeKeeperResponse.data.user.username; // Extract username directly
      }
      setStoreKeepers(storeKeeperData);

      // Calculate totals for each fertilizer type
      const totals = response.data.reduce((acc, fertilizer) => {
        acc[fertilizer.fertilizer_type] = (acc[fertilizer.fertilizer_type] || 0) + fertilizer.quantity;
        return acc;
      }, {});
      setFertilizerTotals(totals);
    } catch (error) {
      console.error("Error fetching fertilizers or store keepers:", error);
    }
  };

  const fetchDistributions = async () => {
    try {
      const response = await axios.get("http://localhost:8000/fertilizer-distributions/");
      // Calculate distributions for each fertilizer type
      const distributions = response.data.reduce((acc, distribution) => {
        acc[distribution.fertilizer_type] = (acc[distribution.fertilizer_type] || 0) + distribution.quantity;
        return acc;
      }, {});
      setFertilizerDistributions(distributions);
    } catch (error) {
      console.error("Error fetching fertilizer distributions:", error);
    }
  };

 

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      id: null,
      added_by: null,
      fertilizer_type: "",
      quantity: null,
    });
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
      await axios.put(`http://localhost:8000/fertilizers/${formData.id}/`, formData);
      console.log("Fertilizer updated successfully:", formData);
      fetchFertilizers(); // Refresh the list
      handleCloseModal(); // Close the modal
    } catch (error) {
      console.error("Error updating fertilizer:", error);
    }
  };

  const calculateAvailableAmount = (type) => {
    const total = fertilizerTotals[type] || 0;
    const distributed = fertilizerDistributions[type] || 0;
    return total - distributed;
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
      <div className="container1 d-flex justify-content-center align-items-center">
        
         
      </div>

      <div className="container1 d-flex justify-content-center align-items-center">
        <Card
          className="mt-5 mb-5"
          style={{
            width: "80%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "6px",
          }}
        >
          <Card.Body>
            <Card.Title className="text-center">
              <b>Fertilizer Inventory</b>
            </Card.Title>
            <Table striped bordered hover >
              <thead className="bg-success">
              <tr className="bg-success">
                  <th className="bg-success text-white">Fertilizer Type</th>
                  <th className="bg-success text-white">Total Quantity</th>
                  <th className="bg-success text-white">Amount Distributed</th>
                  <th className="bg-success text-white">Amount Available</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(fertilizerTotals).map(([type, total]) => (
                  <tr key={type}>
                    <td>{type}</td>
                    <td>{total}</td>
                    <td>{fertilizerDistributions[type] || 0}</td>
                    <td>{calculateAvailableAmount(type)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>

      {/* Modal for updating fertilizer */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Fertilizer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                {Object.entries(storeKeepers).map(([id, username]) => (
                  <option key={id} value={id}>
                    {username}
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
              <b>Update Fertilizer</b>
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ViewFertilizer;

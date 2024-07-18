import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Table, Form } from "react-bootstrap";
import FarmNav from "./farmNav";

const ViewAssignedFertilizers = () => {
  const [assignedFertilizers, setAssignedFertilizers] = useState([]);
  const [filteredFertilizers, setFilteredFertilizers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchAssignedFertilizers();
  }, []);

  const fetchAssignedFertilizers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/viewAssigned/");
      setAssignedFertilizers(response.data);
      setFilteredFertilizers(response.data);
    } catch (error) {
      console.error("Error fetching assigned fertilizers:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    filterFertilizers(e.target.value);
  };

  const filterFertilizers = (query) => {
    const filtered = assignedFertilizers.filter((fertilizer) => {
      const farmerName = fertilizer.farmer?.user?.username.toLowerCase() || "";
      const uniqueCode = fertilizer.unique_code.toLowerCase();
      return (
        farmerName.includes(query.toLowerCase()) ||
        uniqueCode.includes(query.toLowerCase())
      );
    });
    setFilteredFertilizers(filtered);
  };

  return (
    <div>
      <FarmNav />
      <br></br>
      <br></br>
      <div className="container">
        <Card>
          <Card.Body>
            <Card.Title className="text-center text-success"><b>Assigned Fertilizers</b></Card.Title>
            <Form.Control
              type="text"
              placeholder="Search by farmer name or unique code"
              value={searchQuery}
              onChange={handleSearchChange}
              className="mb-3"
            />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th className="text-white bg-success text-center">No.</th>
                  <th className="text-white bg-success text-center">Farmer</th>
                  <th className="text-white bg-success text-center">Quantity Assigned</th>
                  <th className="text-white bg-success text-center">Unique Code</th>
                </tr>
              </thead>
              <tbody>
                {filteredFertilizers.map((fertilizer, index) => (
                  <tr key={fertilizer.id}>
                    <td>{index + 1}</td>
                    <td>{fertilizer.farmer?.user?.username || "Unknown"}</td>
                    <td>{fertilizer.quantity_assigned}</td>
                    <td>{fertilizer.unique_code}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ViewAssignedFertilizers;

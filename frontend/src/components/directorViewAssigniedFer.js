import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Table } from "react-bootstrap";
import DirectorNav from "./directorNav";

const DirectorViewAssignedFertilizers = () => {
  const [assignedFertilizers, setAssignedFertilizers] = useState([]);

  useEffect(() => {
    fetchAssignedFertilizers();
  }, []);

  const fetchAssignedFertilizers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/viewAssigned/");
      setAssignedFertilizers(response.data);
    } catch (error) {
      console.error("Error fetching assigned fertilizers:", error);
    }
  };

  return (
    <div>
      <DirectorNav/>
      <br></br>
    <div>
    <Card>
      <Card.Body>
        <Card.Title>Assigned Fertilizers</Card.Title>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Farmer</th>
              <th>Fertilizer Application</th>
              <th>Quantity Assigned</th>
              <th>Unique Code</th>
              <th>Assigned At</th>
              <th>Created At</th>
              <th>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {assignedFertilizers.map((fertilizer, index) => (
              <tr key={fertilizer.id}>
                <td>{index + 1}</td>
                <td>{fertilizer.farmer?.user?.username || "Unknown"}</td>
                <td>{fertilizer.fertilizer_application?.name || "Unknown"}</td>
                <td>{fertilizer.quantity_assigned}</td>
                <td>{fertilizer.unique_code}</td>
                <td>{new Date(fertilizer.assigned_at).toLocaleString()}</td>
                <td>{new Date(fertilizer.created_at).toLocaleString()}</td>
                <td>{new Date(fertilizer.updated_at).toLocaleString()}</td>
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

export default DirectorViewAssignedFertilizers;

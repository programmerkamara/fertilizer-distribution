import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Card } from "react-bootstrap";
import FarmNav from "./farmNav";

const ViewPendingApplications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await axios.get("http://localhost:8000/fertilizer-applications/");
      const applicationsData = await Promise.all(response.data.map(async (app) => {
        const farmerResponse = await axios.get(`http://localhost:8000/farmers/${app.farmer}/`);
        const fertilizerResponse = await axios.get(`http://localhost:8000/fertilizers/${app.fertilizer}/`);
        return {
          ...app,
          farmer: farmerResponse.data,
          fertilizer: fertilizerResponse.data,
        };
      }));
      const pendingApplications = applicationsData.filter(app => app.status === "Pending");
      setApplications(pendingApplications);
    } catch (error) {
      console.error("Error fetching pending applications:", error);
    }
  };

  return (
    <div>
      <FarmNav />
      <div className="container">
        <Card>
          <Card.Body>
            <Card.Title className="text-center">Pending Fertilizer Applications</Card.Title>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Farmer Name</th>
                  <th>Fertilizer Type</th>
                  <th>Quantity Needed</th>
                  <th>Status</th>
                  <th>Created At</th>
                  <th>Updated At</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app, index) => (
                  <tr key={app.id}>
                    <td>{index + 1}</td>
                    <td>{app.farmer ? app.farmer.user.username : ""}</td>
                    <td>{app.fertilizer ? app.fertilizer.fertilizer_type : ""}</td>
                    <td>{app.quantity_needed}</td>
                    <td>{app.status}</td>
                    <td>{new Date(app.created_at).toLocaleDateString()}</td>
                    <td>{new Date(app.updated_at).toLocaleDateString()}</td>
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

export default ViewPendingApplications;

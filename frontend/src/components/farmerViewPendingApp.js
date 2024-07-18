import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Card, Form } from "react-bootstrap";
import FarmNav from "./farmNav";

const FarmerViewPendingApplications = () => {
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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
      setFilteredApplications(pendingApplications);
    } catch (error) {
      console.error("Error fetching pending applications:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    filterApplications(e.target.value);
  };

  const filterApplications = (query) => {
    const filtered = applications.filter((app) => {
      const username = app.farmer ? app.farmer.user.username.toLowerCase() : "";
      const fertilizerType = app.fertilizer ? app.fertilizer.fertilizer_type.toLowerCase() : "";
      return (
        username.includes(query.toLowerCase()) ||
        fertilizerType.includes(query.toLowerCase())
      );
    });
    setFilteredApplications(filtered);
  };

  return (
    <div>
      <FarmNav />
      <br></br>
      <br></br>
      <div className="container">
        <Card>
          <Card.Body>
            <Card.Title className="text-center text-success"><b>Pending Fertilizer Applications</b></Card.Title>
            <Form.Control
              type="text"
              placeholder="Search by farmer name or fertilizer type"
              value={searchQuery}
              onChange={handleSearchChange}
              className="mb-3"
            />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th className="text-center text-white bg-success">No</th>
                  <th className="text-center text-white bg-success">Farmer Name</th>
                  <th className="text-center text-white bg-success">Fertilizer Type</th>
                  <th className="text-center text-white bg-success">Quantity Needed</th>
                  <th className="text-center text-white bg-success">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredApplications.map((app, index) => (
                  <tr key={app.id}>
                    <td>{index + 1}</td>
                    <td>{app.farmer ? app.farmer.user.username : ""}</td>
                    <td>{app.fertilizer ? app.fertilizer.fertilizer_type : ""}</td>
                    <td>{app.quantity_needed}</td>
                    <td>{app.status}</td>
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

export default FarmerViewPendingApplications;

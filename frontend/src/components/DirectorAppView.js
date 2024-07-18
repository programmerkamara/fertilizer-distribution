import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Card, Button, Form, Row, Col } from "react-bootstrap";
import DirectorNav from "./directorNav";

const DViewApplicationFarmer = () => {
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchDate, setSearchDate] = useState("");

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
      setApplications(applicationsData);
      setFilteredApplications(applicationsData);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };

  const handleApprove = async (appId) => {
    try {
      const response = await axios.patch(`http://localhost:8000/fertilizer-applications/${appId}/`, {
        status: "Approved"
      });
      if (response.status === 200) {
        console.log(`Application ${appId} approved successfully`);
        fetchApplications();
      }
    } catch (error) {
      console.error(`Error approving application ${appId}:`, error);
    }
  };

  const handleReject = async (appId) => {
    try {
      const response = await axios.patch(`http://localhost:8000/fertilizer-applications/${appId}/`, {
        status: "Rejected"
      });
      if (response.status === 200) {
        console.log(`Application ${appId} rejected successfully`);
        fetchApplications();
      }
    } catch (error) {
      console.error(`Error rejecting application ${appId}:`, error);
    }
  };

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
    filterApplications(value, searchDate);
  };

  const handleDateChange = (e) => {
    const { value } = e.target;
    setSearchDate(value);
    filterApplications(searchQuery, value);
  };

  const filterApplications = (query, date) => {
    const filtered = applications.filter((app) => {
      const username = app.farmer ? app.farmer.user.username.toLowerCase() : "";
      const createdAt = new Date(app.created_at).toISOString().split("T")[0]; // Format date to YYYY-MM-DD
      return (
        (username.includes(query.toLowerCase()) || query === "") &&
        (createdAt === date || date === "")
      );
    });
    setFilteredApplications(filtered);
  };

  return (
    <div>
      <DirectorNav />
      <br></br>
      <div className="container">
        <Card>
          <Card.Body>
            <Card.Title className="text-success text-center "><b>Fertilizer Applications</b></Card.Title>
            <Form>
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Search by username"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Search by date"
                    value={searchDate}
                    onChange={handleDateChange}
                  />
                </Col>
              </Row>
            </Form>
            <Table striped bordered hover className="mt-3">
              <thead>
                <tr>
                  <th className="text-white text-center bg-success">No.</th>
                  <th className="text-white text-center bg-success">Farmer Name</th>
                  <th className="text-white text-center bg-success">Fertilizer Type</th>
                  <th className="text-white text-center bg-success">Quantity Needed</th>
                  <th className="text-white text-center bg-success">Status</th>
                  <th className="text-white text-center bg-success">Created At</th>
                  <th className="text-white text-center bg-success">Updated At</th>
                  <th className="text-white text-center bg-success">Actions</th>
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
                    <td>{new Date(app.created_at).toLocaleDateString()}</td>
                    <td>{new Date(app.updated_at).toLocaleDateString()}</td>
                    <td>
                      <Button variant="success" onClick={() => handleApprove(app.id)}>
                        Approve
                      </Button>
                      <Button variant="danger" onClick={() => handleReject(app.id)} className="ml-2">
                        Reject
                      </Button>
                    </td>
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

export default DViewApplicationFarmer;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import FarmNav from "./farmNav";

const ViewApplicationFarmer = () => {
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
      setApplications(applicationsData);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };

  return (
    <div>
      <FarmNav/>
      <div className="container">
        <h2 className="mt-5 mb-3 text-center">Fertilizer Applications</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="text-white bg-success text-center">No.</th>
              <th className="text-white bg-success text-center">Farmer Name</th>
              <th className="text-white bg-success text-center">Fertilizer Type</th>
              <th className="text-white bg-success text-center">Quantity Needed</th>
              <th className="text-white bg-success text-center">Status</th>
              <th className="text-white bg-success text-center">Created At</th>
              <th className="text-white bg-success text-center">Updated At</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={app.id}>
                <td>{index + 1}</td>
                <td>{app.farmer ? app.farmer.user.username: ""}</td>
                <td>{app.fertilizer ? app.fertilizer.fertilizer_type : ""}</td>
                <td>{app.quantity_needed}</td>
                <td>{app.status}</td>
                <td>{new Date(app.created_at).toLocaleDateString()}</td>
                <td>{new Date(app.updated_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ViewApplicationFarmer;

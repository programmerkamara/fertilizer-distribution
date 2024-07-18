import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import DirectorNav from "./directorNav";


const ViewFarmerprofile = () => {
  const [farmers, setFarmers] = useState([]);
  const [filteredFarmers, setFilteredFarmers] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchFarmers();
  }, []);

  const fetchFarmers = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/farmers/");
      setFarmers(response.data);
      setFilteredFarmers(response.data);
    } catch (error) {
      setError("Error fetching data");
    }
  };

  const handleUpdate = (id) => {
    navigate(`/fro/UpdateFarmerpro/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://127.0.0.1:8000/farmers/${id}/`);
        setFarmers(farmers.filter((farmer) => farmer.id !== id));
        setFilteredFarmers(filteredFarmers.filter((farmer) => farmer.id !== id));
      } catch (error) {
        console.error("Error deleting user:", error);
        setError("An error occurred while deleting user.");
      }
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    filterFarmers(e.target.value);
  };

  const filterFarmers = (query) => {
    const filtered = farmers.filter((farmer) => {
      const username = farmer.user.username.toLowerCase();
      const firstName = farmer.user.first_name.toLowerCase();
      const lastName = farmer.user.last_name.toLowerCase();
      return (
        username.includes(query.toLowerCase()) ||
        firstName.includes(query.toLowerCase()) ||
        lastName.includes(query.toLowerCase())
      );
    });
    setFilteredFarmers(filtered);
  };

  return (
    <div>
      <DirectorNav />
      <div className="container p-5">
        {error && <p className="text-center text-danger">{error}</p>}
        <Card className="card-container">
          <h2 className="text-center text-success mb-4"><b>Farmer Details</b></h2>
          <Card.Body>
            <div className="table-responsive">
              <input
                type="text"
                placeholder="Search by username, first name, or last name"
                value={searchQuery}
                onChange={handleSearchChange}
                className="form-control mb-3"
              />
              <Table striped bordered hover>
                <thead style={{ backgroundColor: "#28a745", color: "white", fontWeight: "bold", borderBottom: "4px solid green" }}>
                  <tr>
                    <th className="text-white bg-success text-center">Username</th>
                    <th className="text-white bg-success text-center">First Name</th>
                    <th className="text-white bg-success text-center">Last Name</th>
                    <th className="text-white bg-success text-center">Email</th>
                    <th className="text-white bg-success text-center">Farmer Type</th>
                    <th className="text-white bg-success text-center">Phone</th>
                    <th className="text-white bg-success text-center">Address</th>
                    <th className="text-white bg-success text-center">Contact Details</th>
                    <th className="text-white bg-success text-center">Farm Details</th>
                    <th className="text-white bg-success text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFarmers.map((farmer) => (
                    <FarmerRow
                      key={farmer.id}
                      farmer={farmer}
                      handleUpdate={handleUpdate}
                      handleDelete={handleDelete}
                    />
                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

const FarmerRow = ({ farmer, handleUpdate, handleDelete }) => (
  <tr>
    <td>{farmer.user.username}</td>
    <td>{farmer.user.first_name}</td>
    <td>{farmer.user.last_name}</td>
    <td>{farmer.user.email}</td>
    <td>{farmer.farmer_type}</td>
    <td>{farmer.phone}</td>
    <td>{farmer.address}</td>
    <td>{farmer.contact_details}</td>
    <td>{farmer.farm_details}</td>
    <td>
      <Button
        variant="warning"
        onClick={() => handleUpdate(farmer.id)}
        className="me-2"
      >
        Update
      </Button>
      <Button
        variant="danger"
        onClick={() => handleDelete(farmer.id)}
      >
        Delete
      </Button>
    </td>
  </tr>
);

export default ViewFarmerprofile;

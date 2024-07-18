import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; 
import FRONav from "./FRONav";

const ViewFarmer = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/farm/");
        setUsers(response.data);
      } catch (error) {
        setError("Error fetching data");
      }
    };

    fetchUsers();
  }, []);

  const handleUpdate = (id) => {
    navigate(`/fro/UpdateFarmer/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://127.0.0.1:8000/farm/${id}/`);
        setUsers(users.filter((farm) => farm.id !== id));
      } catch (error) {
        console.error("Error deleting user:", error);
        setError("An error occurred while deleting user.");
      }
    }
  };

  return (
    <div>
      <FRONav />
      <div className="container p-5">
        
        {error && <p className="text-center text-danger">{error}</p>}
        <Card className="card-container">
        <h2 className="text-center text-success mb-4"><b>Farmer Details</b></h2>
          <Card.Body>
            <div className="table-responsive">
              <Table striped bordered hover>
                <thead style={{ backgroundColor: "#28a745", color: "white", fontWeight: "bold", borderBottom: "4px solid green" }}>
                  <tr>
                    <th className="text-white bg-success text-center">Username</th>
                    <th className="text-white bg-success text-center">First Name</th>
                    <th className="text-white bg-success text-center">Last Name</th>
                    <th className="text-white bg-success text-center">Email</th>
                    <th className="text-white bg-success text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((farm) => (
                    <tr key={farm.id}>
                      <td>{farm.username}</td>
                      <td>{farm.first_name}</td>
                      <td>{farm.last_name}</td>
                      <td>{farm.email}</td>
                      <td>
                        <Button
                          variant="warning"
                          onClick={() => handleUpdate(farm.id)}
                          className="me-2"
                        >
                          Update
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(farm.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
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

export default ViewFarmer;

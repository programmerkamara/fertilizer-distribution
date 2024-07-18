import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import AdminNav from "./AdminNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; 

const StaffList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/user/");
        // Filter out users with userType 3 (Farmer)
        const filteredUsers = response.data.filter(user => user.user_type !== 3);
        setUsers(filteredUsers);
      } catch (error) {
        setError("Error fetching data");
      }
    };

    fetchUsers();
  }, []);

  // Function to convert user type ID to string representation
  const getUserType = (typeId) => {
    switch (typeId) {
      case 1:
        return "Admin";
      case 2:
        return "Director";
      case 3:
        return "Farmer";
      case 4:
        return "FRO";
      case 5:
        return "StoreKeeper";
      default:
        return "Unknown";
    }
  };

  const handleUpdate = (id) => {
    navigate(`/admin/updateStaff/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://127.0.0.1:8000/user/${id}/`);
        setUsers(users.filter((user) => user.id !== id));
      } catch (error) {
        console.error("Error deleting user:", error);
        setError("An error occurred while deleting user.");
      }
    }
  };

  return (
    <div>
      <AdminNav />
      <div className="container p-5">
        {error && <p className="text-center text-danger">{error}</p>}
        <Card className="card-container">
          <h2 className="text-center text-success mb-4"><b>Staff Details</b></h2>
          <Card.Body>
            <div className="table-responsive">
              <Table striped bordered hover>
                <thead style={{ backgroundColor: "#28a745", color: "white", fontWeight: "bold", borderBottom: "4px solid green" }}>
                  <tr>
                    <th className="text-white bg-success text-center">Username</th>
                    <th className="text-white bg-success text-center">First Name</th>
                    <th className="text-white bg-success text-center">Last Name</th>
                    <th className="text-white bg-success text-center">Email</th>
                    <th className="text-white bg-success text-center">User Type</th>
                    <th className="text-white bg-success text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.username}</td>
                      <td>{user.first_name}</td>
                      <td>{user.last_name}</td>
                      <td>{user.email}</td>
                      <td>{getUserType(user.user_type)}</td>
                      <td>
                        <Button
                          variant="warning"
                          onClick={() => handleUpdate(user.id)}
                          className="me-2"
                        >
                          Update
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(user.id)}
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

export default StaffList;

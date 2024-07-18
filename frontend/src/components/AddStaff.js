import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import AdminNav from "./AdminNav";
import image3 from "./images/Fr2.jpg";
import "../App.css";

const AddStaff = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    password2: "",
    first_name: "",
    last_name: "",
    email: "",
    user_type: null,
    is_staff: false,
    is_active: false,
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const validateName = (name) => {
    return name.length >= 2;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword(formData.password)) {
      setMessage("Password must be at least 8 characters long and include letters, numbers, and symbols.");
      return;
    }

    if (formData.password !== formData.password2) {
      setMessage("Passwords do not match");
      return;
    }

    if (!validateName(formData.first_name) || !validateName(formData.last_name)) {
      setMessage("First and last names must each be at least 2 characters long.");
      return;
    }

    try {
      await axios.post("http://127.0.0.1:8000/users/register/", formData);
      setMessage("User created successfully");
      setFormData({
        username: "",
        password: "",
        password2: "",
        first_name: "",
        last_name: "",
        email: "",
        user_type: null,
        is_staff: false,
        is_active: false,
      });
    } catch (error) {
      setMessage(
        error.response?.data?.error || "An error occurred. Please try again."
      );
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${image3})`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <AdminNav />
      <div
        className="container1 d-flex justify-content-center align-items-center"
        style={{ paddingTop: "10px", paddingBottom: "20px" }}
      >
        <Card
          className="mt-5 mb-5"
          style={{
            width: "30rem",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "10px",
          }}
        >
          <Card.Body>
            <Card.Title className="text-center">
              <b>Add Staff</b>
            </Card.Title>
            {message && (
              <p className="mt-3 text-center text-success">{message}</p>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>
                  <b>Username</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  <b>Password</b>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  <b>Confirm Password</b>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  name="password2"
                  value={formData.password2}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  <b>First Name</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  <b>Last Name</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  <b>Email</b>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  <b>User Type</b>
                </Form.Label>
                <Form.Select
                  name="user_type"
                  value={formData.user_type}
                  onChange={handleChange}
                  required
                >
                  <option>Select User Type</option>
                  <option value="1">Admin</option>
                  <option value="2">Director</option>
                  <option value="4">FRO</option>
                  <option value="5">StoreKeeper</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Is Staff"
                  name="is_staff"
                  checked={formData.is_staff}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      is_staff: e.target.checked,
                    })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Is Active"
                  name="is_active"
                  checked={formData.is_active}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      is_active: e.target.checked,
                    })
                  }
                />
              </Form.Group>
              <Button variant="success" type="submit" className="w-100">
                <b>Add</b>
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AddStaff;

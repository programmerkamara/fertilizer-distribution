import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import LoginNav from "./LoginNav";
import image2 from "./images/bg2.jpg";

const Login = () => {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/users/login/", credentials);
            const userType = response.data.user_type; // Assuming "user_type" is returned from the backend
            localStorage.setItem("token", response.data.access); // Store token in localStorage

            redirectToUserPage(userType);
        } catch (err) {
            setError("Invalid credentials");
            console.error("Error logging in:", err);
        }
    };

    const redirectToUserPage = (userType) => {
        switch (userType) {
            case 1:
                navigate("/adminDashboard");
                break;
            case 2:
                navigate("/directorDashboard");
                break;
            case 3:
                navigate("/farmerDashboard");
                break;
            case 4:
                navigate("/froDashboard");
                break;
            case 5:
                navigate("/storekeeperDashboard");
                break;
            default:
                navigate("/");
                break;
        }
    };

    return (
        <div
            style={{
                backgroundImage: `url(${image2})`,
                backgroundSize: "cover",
                height: "100vh",
            }}
        >
            <LoginNav />

            <div className="d-flex justify-content-center align-items-center vh-100">
                <Card
                    style={{
                        width: "30rem",
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        padding: "20px",
                    }}
                >
                    <Card.Body>
                        <Card.Title className="text-center text-success">
                            <b>User Login Page</b>
                        </Card.Title>

                        {error && <p className="text-danger text-center">{error}</p>}

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    <b>Username:</b>
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="username"
                                    value={credentials.username}
                                    onChange={handleChange}
                                    placeholder="Enter username"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    <b>Password:</b>
                                </Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={credentials.password}
                                    onChange={handleChange}
                                    placeholder="Enter password"
                                />
                            </Form.Group>

                            <Button variant="success" type="submit" className="w-100">
                                <b>Login</b>
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Login;

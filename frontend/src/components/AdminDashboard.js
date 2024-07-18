import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import AdminNav from "./AdminNav";
import "../App.css";

const AdminDashboard = () => {
    const [userCount, setUserCount] = useState(0);
    

    useEffect(() => {
        const fetchUserCount = async () => {
            try {
                const response = await axios.get("http://localhost:8000/user-count/");
                setUserCount(response.data.user_count);
            } catch (err) {
               
                console.error("Error fetching user count:", err);
            }
        };

        fetchUserCount();
    }, []);

    return (
        <div className="admin-dashboard">
            <AdminNav />
            <div className="container p-5">
                <div className="text-center">
                    <h2 className="title-bg-success">Admin Dashboard</h2>
                </div>
                <Row className="mt-5 justify-content-center">
                    <Col md={4}>
                        <Card className="bg-success text-white text-center card-fixed-size mb-4">
                            <Card.Body>
                                <FontAwesomeIcon icon={faUser} size="4x" className="text-white" />
                                <h4 className="mt-3">Number of Staff</h4>
                                <p><b>{userCount}</b></p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <a href="/admin/addStaff" className="text-decoration-none">
                            <Card className="bg-success text-white text-center card-fixed-size mb-4">
                                <Card.Body>
                                    <FontAwesomeIcon icon={faUserPlus} size="4x" className="text-white" />
                                    <h4 className="mt-3">Add Staff</h4>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col md={4}>
                        <a href="/admin/viewstaff" className="text-decoration-none">
                            <Card className="bg-success text-white text-center card-fixed-size mb-4">
                                <Card.Body>
                                    <FontAwesomeIcon icon={faUser} size="4x" className="text-white" />
                                    <h4 className="mt-3">View Staff</h4>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default AdminDashboard;

import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBookOpenReader, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import FarmNav from "./farmNav";


const FarmerDashboard = () => {
    return (
        <div className="admin-dashboard">
            <FarmNav/>
            <div className="container p-5">
                <div className="text-center">
                    <h2 className="title-bg-success">Farmer Dashboard</h2>
                </div>
                <Row className="mt-5 justify-content-center">
                    <Col md={4}>
                        <a href="/farmer/viewApprovedApp" className="text-decoration-none">
                            <Card className="bg-success text-white text-center card-fixed-size mb-4">
                                <Card.Body>
                                    <FontAwesomeIcon icon={faBookOpenReader} size="4x" className="text-white" />
                                    <h4 className="mt-3">View Approved Application</h4>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col md={4}>
                        <a href="/farmer/approvedApplication" className="text-decoration-none">
                            <Card className="bg-success text-white text-center card-fixed-size mb-4">
                                <Card.Body>
                                    <FontAwesomeIcon icon={faShoppingBag} size="4x" className="text-white" />
                                    <h4 className="mt-3">View Pending Application</h4>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col md={4}>
                        <a href="/farmer/viewAssignCode" className="text-decoration-none">
                            <Card className="bg-success text-white text-center card-fixed-size mb-4">
                                <Card.Body>
                                    <FontAwesomeIcon icon={faShoppingBag} size="4x" className="text-white" />
                                    <h4 className="mt-3">View Assigned Fertilizer and UniqueCode</h4>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                </Row>
                <Row className="mt-5 justify-content-center">
                    <Col md={4}>
                        <a href="/farmer/apply" className="text-decoration-none">
                            <Card className="bg-success text-white text-center card-fixed-size mb-4">
                                <Card.Body>
                                    <FontAwesomeIcon icon={faBook} size="4x" className="text-white" />
                                    <h4 className="mt-3">Apply For Fertilizer</h4>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default FarmerDashboard;

import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserPen } from "@fortawesome/free-solid-svg-icons";
import FRONav from "./FRONav";
import "../App.css"; // Make sure to import your CSS file

function FRODashboard() {
  return (
    <div>
      <FRONav />
      <div className="container p-5">
        <div className="text-center mb-4">
          <Card.Title className="card-title-custom bg-success">
            <b>Farmer Registration Dashboard</b>
          </Card.Title>
        </div>
        <br /><br />
        <Row className="justify-content-center">
          {/* Card for Number of User */}
          <Col md={4} className="mx-auto mb-4">
            <a href="/fro/viewFarmer" className="text-decoration-none">
              <Card className="bg-success text-white">
                <Card.Body className="text-center" style={{ height: "200px" }}>
                  <FontAwesomeIcon icon={faUser} size="3x" /><br /><br />
                  <p className="fs-4 text-center">
                    <b>View Farmer</b><br />
                  </p>
                </Card.Body>
              </Card>
            </a>
          </Col>

          {/* Card for Add Staff */}
          <Col md={4} className="mx-auto mb-4">
            <a href="/fro/addFarmer" className="text-decoration-none">
              <Card className="bg-success text-white">
                <Card.Body className="text-center" style={{ height: "200px" }}>
                  <FontAwesomeIcon icon={faUserPen} size="3x" /><br /><br />
                  <p className="fs-4 text-center">
                    <b>Add Farmer</b><br />
                  </p>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {/* Card for Number of User */}
          <Col md={4} className="mx-auto mb-4">
            <a href="/fro/viewFarmerp" className="text-decoration-none">
              <Card className="bg-success text-white">
                <Card.Body className="text-center" style={{ height: "200px" }}>
                  <FontAwesomeIcon icon={faUser} size="3x" /><br /><br />
                  <p className="fs-4 text-center">
                    <b>View Farmer FullDetails</b><br />
                  </p>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>
      </div>

      <br /><br /><br /><br />
    </div>
  );
}

export default FRODashboard;

import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import "../App.css"; 
import StoreNav from "./StoreNav";

function StoreKeeperDashboard() {
  return (
    <div className="dashboard-background">
      <StoreNav />
      <div className="container p-5">
        <div className="text-center mb-4">
          <Card.Title className="card-title-custom bg-success">
            <b>Store Keeper Dashboard</b>
          </Card.Title>
        </div>

        {/* First row of cards */}
        <Row className="justify-content-center">
          {/* Card for View Farmer */}
          <Col md={4} className="mx-auto mb-4">
            <a href="/sk/viewFarmer" className="text-decoration-none">
              <Card className="bg-success text-white">
                <Card.Body className="text-center" style={{ height: "200px" }}>
                  <FontAwesomeIcon icon={faShoppingBag} size="3x" /><br /><br />
                  <p className="fs-4 text-center">
                    <b>View Inventory</b><br />
                  </p>
                </Card.Body>
              </Card>
            </a>
          </Col>

          {/* Card for Add Farmer */}
          <Col md={4} className="mx-auto mb-4">
            <a href="/storekeeper/view" className="text-decoration-none">
              <Card className="bg-success text-white">
                <Card.Body className="text-center" style={{ height: "200px" }}>
                  <FontAwesomeIcon icon={faShoppingBag} size="3x" /><br /><br />
                  <p className="fs-4 text-center">
                    <b>View Distribution</b><br />
                  </p>
                </Card.Body>
              </Card>
            </a>
          </Col>

          {/* Card for View Farmer FullDetails */}
          <Col md={4} className="mx-auto mb-4">
            <a href="/Storekeeper/Addfertilizer" className="text-decoration-none">
              <Card className="bg-success text-white">
                <Card.Body className="text-center" style={{ height: "200px" }}>
                  <FontAwesomeIcon icon={faShoppingBag} size="3x" /><br /><br />
                  <p className="fs-4 text-center">
                    <b>Add Fertilizer</b><br />
                  </p>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>

        {/* Second row of cards */}
        <Row className="justify-content-center">
          {/* Card for Add Farmer FullDetails */}
          <Col md={4} className="mx-auto mb-4">
            <a href="/Storekeeper/codeValid" className="text-decoration-none">
              <Card className="bg-success text-white">
                <Card.Body className="text-center" style={{ height: "200px" }}>
                  <FontAwesomeIcon icon={faPen} size="3x" /><br /><br />
                  <p className="fs-4 text-center">
                    <b>Validate Code</b><br />
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

export default StoreKeeperDashboard;

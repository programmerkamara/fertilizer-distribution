import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBookOpenReader, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import DirectorNav from "./directorNav";
import axios from "axios";

const DirectorDashboard = () => {
    const [farmerCount, setFarmerCount] = useState(0);
    const [applicationCount, setApplicationCount] = useState(0);
    const [approvedApplicationCount, setApprovedApplicationCount] = useState(0);
    const [totalFertilizerQuantity, setTotalFertilizerQuantity] = useState(0);
    const [fertilizerDistributedQuantity, setFertilizerDistributedQuantity] = useState(0);
    const [fertilizerAvailableQuantity, setFertilizerAvailableQuantity] = useState(0);

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const farmerResponse = await axios.get("http://127.0.0.1:8000/farmer/count/");
                setFarmerCount(farmerResponse.data.farmer_count);

                const applicationResponse = await axios.get("http://127.0.0.1:8000/application/count/");
                setApplicationCount(applicationResponse.data.application_count);

                const approvedApplicationResponse = await axios.get("http://127.0.0.1:8000/application/approved/count/");
                setApprovedApplicationCount(approvedApplicationResponse.data.approved_application_count);

                const totalFertilizerResponse = await axios.get("http://127.0.0.1:8000/fertilizer/quantity/");
                setTotalFertilizerQuantity(totalFertilizerResponse.data.total_fertilizer_quantity);

                const response = await axios.get("http://127.0.0.1:8000/fertilizer/quantity/distributed/total/");
                setFertilizerDistributedQuantity(response.data.total_distributed_quantity);

                const fertilizerAvailableResponse = await axios.get("http://127.0.0.1:8000/fertilizer/quantity/available/");
                setFertilizerAvailableQuantity(fertilizerAvailableResponse.data.fertilizer_available_quantity);

                
            } catch (error) {
                console.error("Error fetching counts:", error);
            }
        };

        fetchCounts();
    }, []);

    return (
        <div className="admin-dashboard">
            <DirectorNav />
            <div className="container p-5">
                <div className="text-center">
                    <h2 className="title-bg-success"><b>Director Dashboard</b></h2>
                </div>  
                <Row className="mt-5 justify-content-center">
                    <Col md={4}>
                        <a href="/director/viewFarmer" className="text-decoration-none">
                            <Card className="bg-success text-white text-center card-fixed-size mb-4">
                                <Card.Body>
                                    <FontAwesomeIcon icon={faBookOpenReader} size="4x" className="text-white" />
                                    <h4 className="mt-3">View Total Farmers</h4>
                                    <h5>{farmerCount}</h5>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col md={4}>
                        <a href="/director/viewApplication" className="text-decoration-none">
                            <Card className="bg-success text-white text-center card-fixed-size mb-4">
                                <Card.Body>
                                    <FontAwesomeIcon icon={faShoppingBag} size="4x" className="text-white" />
                                    <h4 className="mt-3">Total Applications</h4>
                                 <h5>{applicationCount}</h5>
                     </Card.Body>
              </Card>
            </a>
          </Col>
          <Col md={4}>
            <a href="/director/viewApprovedApplication" className="text-decoration-none">
              <Card className="bg-success text-white text-center card-fixed-size mb-4">
                <Card.Body>
                  <FontAwesomeIcon icon={faShoppingBag} size="4x" className="text-white" />
                  <h4 className="mt-3">Approved Application</h4>
                  <h5>{approvedApplicationCount}</h5>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>
        <Row className="mt-5 justify-content-center">
          <Col md={4}>
            <a href="#" className="text-decoration-none">
              <Card className="bg-success text-white text-center card-fixed-size mb-4">
                <Card.Body>
                  <FontAwesomeIcon icon={faBook} size="4x" className="text-white" />
                  <h4 className="mt-3">Total Fertilizer</h4>
                  <h5>{totalFertilizerQuantity}</h5>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col md={4}>
            <a href="/director/VieweDist" className="text-decoration-none">
              <Card className="bg-success text-white text-center card-fixed-size mb-4">
                <Card.Body>
                  <FontAwesomeIcon icon={faBook} size="4x" className="text-white" />
                  <h4 className="mt-3">Total Fertilizer Distributed</h4>
                  <h5>{fertilizerDistributedQuantity}</h5>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col md={4}>
            <a href="#" className="text-decoration-none">
              <Card className="bg-success text-white text-center card-fixed-size mb-4">
                <Card.Body>
                  <FontAwesomeIcon icon={faBook} size="4x" className="text-white" />
                  <h4 className="mt-3">Total Fertilizer Available</h4>
                  <h5>{fertilizerAvailableQuantity}</h5>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>
        <Row className="mt-5 justify-content-center">
          <Col md={4}>
            <a href="/director/viewfertilizer" className="text-decoration-none">
              <Card className="bg-success text-white text-center card-fixed-size mb-4">
                <Card.Body>
                  <FontAwesomeIcon icon={faBook} size="4x" className="text-white" />
                  <h4 className="mt-3">View Inventory</h4>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col md={4}>
            <a href="/director/AssignFertilizer" className="text-decoration-none">
              <Card className="bg-success text-white text-center card-fixed-size mb-4">
                <Card.Body>
                  <FontAwesomeIcon icon={faBook} size="4x" className="text-white" />
                  <h4 className="mt-3">AssignedCode and Fertilizer Qty</h4>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DirectorDashboard;

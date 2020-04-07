import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
// import FontAwesomeIcon from './';

class Summary extends Component {
  render() {
    return (
      <Fragment>
        <Container
          fluid={true}
          className="summaryFixedBanner p-0 summarySection"
        >
          <div className="summeryBannerOverlay">
            <Container className="text-center">
              <Row>
                <Col lg={8} md={6} sm={12}>
                  <Row className="countSection">
                    <Col>
                      <h1 className="countNumber">100</h1>
                      <h4 className="countTitle">Total Projects</h4>
                      <hr className="bg-white w-25" />
                    </Col>
                    <Col>
                      <h1 className="countNumber">100</h1>
                      <h4 className="countTitle">Total Clients</h4>
                      <hr className="bg-white w-25" />
                    </Col>
                  </Row>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title className="cardTitle">How i Work</Card.Title>
                      <Card.Text>
                        <p className="cardSubTitle">
                          {" "}
                          {/* <FontAwesomeIcon icon="coffee" /> Requirement */}
                          Gathering
                        </p>
                        <p className="cardSubTitle">System analysis</p>
                        <p className="cardSubTitle">Coding testing</p>
                        <p className="cardSubTitle">Implementation</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Summary;

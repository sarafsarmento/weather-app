import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function Search() {
  return (
    <div className="search">
      <Form>
        <Row>
          <Col sm={9}>
            <Form.Control
              placeholder="Type a city..."
              id="city-input"
              autocomplete="off"
            />
          </Col>
          <div className="mb-2">
            <Col sm={3}>
              <Button variant="primary" type="submit" size="lg" active>
                Search
              </Button>
            </Col>
          </div>
        </Row>
      </Form>
    </div>
  );
}

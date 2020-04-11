import React from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";

export default function WeatherDetails() {
  return (
    <Col sm={6}>
      <ul>
        <li>
          Humidity: <span id="humidity">71%</span>
        </li>
        <li>
          Wind: <span id="wind"> 3km/h</span>
        </li>
      </ul>
    </Col>
  );
}

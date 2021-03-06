import React from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Temperature() {
  return (
    <Row>
      <Col sm={6}>
        <div className="clearfix weather-temperature">
          <img
            src="https://sad-aryabhata-ad11d0.netlify.com/media/04n@2x.png"
            alt="Overcast clouds"
            id="weather-icon"
          />
          <strong id="weather-temperature">11</strong>
          <span class="units">
            <a href="/" id="celsius-link" class="active">
              ºC
            </a>
            |
            <a href="/" id="fahrenheit-link" class="active">
              ºF
            </a>
          </span>
        </div>
      </Col>
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
    </Row>
  );
}

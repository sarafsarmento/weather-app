import React from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Forecast() {
  return (
    <div className="weather-forecast" id="forecast">
      <Row>
        <Col sm={2}>
          <h3>00:0</h3>
          <img
            src="https://sad-aryabhata-ad11d0.netlify.com/media/03n@2x.png"
            alt="overcast"
          />
          <div className="weather-forecast-temperature">
            <strong>11º</strong> 10º
          </div>
        </Col>
        <Col sm={2}>
          <h3>00:0</h3>
          <img
            src="https://sad-aryabhata-ad11d0.netlify.com/media/03n@2x.png"
            alt="overcast"
          />
          <div className="weather-forecast-temperature">
            <strong>11º</strong> 10º
          </div>
        </Col>
        <Col sm={2}>
          <h3>00:0</h3>
          <img
            src="https://sad-aryabhata-ad11d0.netlify.com/media/03n@2x.png"
            alt="overcast"
          />
          <div className="weather-forecast-temperature">
            <strong>11º</strong> 10º
          </div>
        </Col>
        <Col sm={2}>
          <h3>00:0</h3>
          <img
            src="https://sad-aryabhata-ad11d0.netlify.com/media/03n@2x.png"
            alt="overcast"
          />
          <div className="weather-forecast-temperature">
            <strong>11º</strong> 10º
          </div>
        </Col>
        <Col sm={2}>
          <h3>00:0</h3>
          <img
            src="https://sad-aryabhata-ad11d0.netlify.com/media/03n@2x.png"
            alt="overcast"
          />
          <div className="weather-forecast-temperature">
            <strong>11º</strong> 10º
          </div>
        </Col>
        <Col sm={2}>
          ><h3>00:0</h3>
          <img
            src="https://sad-aryabhata-ad11d0.netlify.com/media/03n@2x.png"
            alt="overcast"
          />
          <div className="weather-forecast-temperature">
            <strong>11º</strong> 10º
          </div>
        </Col>
      </Row>
    </div>
  );
}

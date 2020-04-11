import React from "react";
import "./App.css";
import Search from "./Search";
import Overview from "./Overview";
import Temperature from "./Temperature";
import WeatherDetails from "./WeatherDetails";
import Forecast from "./Forecast";
import GithubLink from "./GithubLink";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <Container fluid>
      <div className="wrapper">
        <div className="weather-wrapper">
          <Row>
            <Search />
          </Row>
          <Overview />
          <Row>
            <Temperature /> <WeatherDetails />
          </Row>
          <Row>
            <div className="weather-forecast" id="forecast" />
            <Forecast />
          </Row>
          <GithubLink />
        </div>
      </div>
    </Container>
  );
}

export default App;

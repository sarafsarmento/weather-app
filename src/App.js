import React from "react";
import "./App.css";
import Search from "./Search";
import Overview from "./Overview";
import Temperature from "./Temperature";
import WeatherDetails from "./WeatherDetails";
import Forecast from "./Forecast";
import GithubLink from "./GithubLink";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container fluid>
      <div className="wrapper">
        <div className="weather-wrapper">
          <Search />
          <Overview />
          <Temperature />
          <Forecast />
          <GithubLink />
        </div>
      </div>
    </Container>
  );
}

export default App;

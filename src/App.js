import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";
import Overview from "./Overview";
import Temperature from "./Temperature";
import WeatherDetails from "./WeatherDetails";
import Forecast from "./Forecast";
import GithubLink from "./GithubLink";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="weather-wrapper">
          <Search />
          <Overview />
          <div className="row">
            <Temperature />
            <WeatherDetails />
          </div>
          <div className="row weather-forecast" id="forecast" />
          <Forecast />
        </div>
        <GithubLink />
      </div>
    </div>
  );
}

export default App;

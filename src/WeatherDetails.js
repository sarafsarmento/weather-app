import React from "react";

export default function WeatherDetails() {
  return (
    <div className="col-6" id="weather-details">
      <ul>
        <li>
          Humidity: <span id="humidity">71%</span>
        </li>
        <li>
          Wind: <span id="wind"> 3km/h</span>
        </li>
      </ul>
    </div>
  );
}

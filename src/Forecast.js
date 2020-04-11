import React from "react";

export default function Forecast() {
  return (
    <div className="col-2">
      <h3>00:0</h3>
      <img
        src="https://sad-aryabhata-ad11d0.netlify.com/media/03n@2x.png"
        alt="overcast"
      />
      <div className="weather-forecast-temperature">
        <strong>11º</strong> 10º
      </div>
    </div>
  );
}

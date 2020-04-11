import React from "react";

export default function Overview() {
  return (
    <div className="overview">
      <h1 id="city">New York</h1>
      <ul>
        <li>
          Last updated: <span id="date">Tuesday 23:05</span>
        </li>
        <li id="description">Overcast clouds</li>
      </ul>
    </div>
  );
}

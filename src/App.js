import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project was coded by Michelle Laybolt and is open-sourced on{" "}
          <a
            href="https://github.com/mllaybolt/react-weather-app-complete"
            target="_blank"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

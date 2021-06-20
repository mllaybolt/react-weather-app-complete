import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Halifax" />
        <footer>
          This project was coded by Michelle Laybolt and is open-sourced on{" "}
          <a
            href="https://github.com/mllaybolt/react-weather-app-complete"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://quizzical-agnesi-24b5f1.netlify.app"
            target="_blank"
            rel="noreferrer noopener"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

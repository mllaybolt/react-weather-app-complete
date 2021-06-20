import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  let apiKey = "66e11cc33b0837aff2265fadb13ac0ad";
  let longitude = 40.7;
  let latitude = 74;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thur</div>{" "}
          <WeatherIcon code="01d" size={36} />{" "}
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>{" "}
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import './App.css';
import { useState } from "react";
import axios from 'axios';

const api = {
  // key: "670a58da14307f17e505098a718d3cea",
  // base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});




  const searchPressed = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=670a58da14307f17e505098a718d3cea`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };





















  return (
    
    <div className="App">
      <header className="App-header">
       
        <h1>Weather App</h1>

       
        <div>
          <input
            type="text"
            placeholder="Enter country/city..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>

       
        {typeof weather.main !== "undefined" ? (
          <div>
            
            <p>{weather.name}</p>

            
            <p>{Math.floor(weather.main.temp)}°C</p>

            
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react';

const api={
  key:"f1b293c5f20b4216eec10cd151a22846",
  base:"https://api.openweathermap.org/data/2.5/",
}
function App() {
  const [search, setSearch]=useState("");
  const [weather, setWeather]=useState({});


  const searchPressed = () =>{
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res)=>res.json())
    .then((result)=>{
      setWeather(result);
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER */}
        <h1>Weather App</h1>
        {/* Search box */}
        <div>
          <input type="text" placeholder='Search...'
          onChange={(e)=>setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>
        {/* if weather is not undefined */}
        {typeof weather.main !== "undefined" ? (
          <div>
          {/*Location*/}
          <p>{weather.name}</p>
          {/* Temperature */}
          <p>{weather.main.temp}</p>
          {/* Condition(sanny) */}

          <p>{weather.weather[0].main}</p>
          <p>{weather.weather[0].description}</p>
          </div>
        ):(
          ""
          
        )}
      </header>
    </div>
  );
}

export default App;

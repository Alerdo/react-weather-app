import React, {useState} from 'react';
import { Counter } from './features/main/Main.js';
import Search from './features/header/Search'
import {Main} from './features/main/Main'
import Aside from './features/aside/Aside'
import './App.css';
import { fetchWeather } from './features/header/searchSlice.js';


const fetchWeatherData = async (city) => {
    const apiKey = 'ecdcd59f19fe416383a220316232607';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
    const response = await fetch(url);

    if(!response) {
      throw new Error(`HTTP ERROR :/ , ${response.status}`)
    } else {

      const data = await response.json()
      return data
    }

  } catch (error) {
    console.log(error)
  }

}



function App() {

  const [weather, setWeather] = useState(null);

  const handleSearch = async (city) => {
    try {
      const data = await fetchWeatherData(city);
      setWeather(data)

    } catch (error) {
      console.log(error)
    }
  }

  return (
   <>
     <div className="app-container">
      
      <header><Search onSearch={handleSearch} /></header>

      <div className="content">
        <Main weatherData={weather} />  
        <Aside className="aside" /> 
      </div>
    </div>
   </>
  );
}

export default App;

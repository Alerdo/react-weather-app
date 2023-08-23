import React, { useState, useEffect } from 'react';
import Search from './features/header/Search';
import {Main} from './features/main/Main';
import Aside from './features/aside/Aside';
import './App.css';

const fetchWeatherData = async (city) => {
    const apiKey = 'ecdcd59f19fe416383a220316232607';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
   

    try {
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error(`HTTP ERROR :/ , ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
};




function App() {
    const [weather, setWeather] = useState('');
    const [week, setWeek] = useState('');

    //the second call to get the weather for 3 day is done inside the component, so we can get the location name of the searched city
    //based on the city of the weather state, we set the same below to fetch data for 3 days 
const fetchWeekData = async () => {
    const apiKey = 'ecdcd59f19fe416383a220316232607';
    const url = ` http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${weather.location.name}&days=7`
    try {
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error(`HTTP ERROR :/ , ${response.status}`);
        }
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
};

    const handleSearch = async (city) => { 
        try {
            const data = await fetchWeatherData(city);
            if (data && data.location && data.current) {
                setWeather(data);
                console.log(data)
            } else {
                console.log('Invalid data format received:', data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleWeekData = async () => {
        try {
            const data = await fetchWeekData();
            if(data) {
                setWeek(data)
                console.log(data)
            } else {
                new Error ('Invalid data format recived:', data.status)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // I am using useEffect hook in order to retrive intial data upon the component mounting 
    useEffect(() => {
        handleSearch('Tirana, Albania');  
    }, []);
    
    //Depending on the above api call, I am making another api call to retrive data for a weeks weather based on the city of the weather state
    useEffect(() => {
        if (weather && weather.location && weather.location.name) {
            handleWeekData();
        }
    }, [handleWeekData]);
    

  

    return (
        <div className="app-container">
            <Search onSearch={handleSearch} getWeekData={handleWeekData} />
            <div className="content">
                <Main className="main-component" weatherData={weather} weekData={week} getWeekData={handleWeekData} />
                <Aside className="aside-component" weekData={week} />
            </div>
        </div>
    );
}

export default App;

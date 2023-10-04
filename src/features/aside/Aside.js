

import React from "react";
import './aside.css';

const Aside = ({ weekData }) => {
    const forecastDays = weekData?.forecast?.forecastday;

        //converts the date into a week Day, Remember to save this file into another file and than import it here
    const  getDayOfWeek = (dateString) => {
        const date = new Date(dateString);
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[date.getDay()];
    }
    

    return (
        <aside>
            <div className="wrapper">
                <h3>Key information about each day</h3>
                {forecastDays && forecastDays.map((day, index) => (
                    <div key={index} className="day-info">
                        <h4>{getDayOfWeek(day.date) }</h4>
                        <p>Sunrise: {day.astro.sunrise}</p>
                        <p>Sunset: {day.astro.sunset}</p>
                        <p>Max Temp: {day.day.maxtemp_c}°C</p>
                        <p>Min Temp: {day.day.mintemp_c}°C</p>
                        <p>UV Index: {day.day.uv}</p>
                        <p>Visibility: {day.day.avgvis_km} km / {day.day.avgvis_miles} miles</p>
                    </div>
                ))}
            </div>
        </aside>
    )
}

export default Aside;

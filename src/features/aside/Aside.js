

// import React from "react";
// import './aside.css';

// const Aside = ({ weekData }) => {
//     const sunriseTime = weekData?.forecast?.forecastday[0]?.astro?.sunrise;
//     const sunsetTime = weekData?.forecast?.forecastday[0]?.astro?.sunset;
//     const historicalData = weekData?.forecast?.forecastday[0]?.day; 
//     const uvIndex = weekData?.current?.uv;
//     const visibilityKm = weekData?.current?.vis_km;
//     const visibilityMiles = weekData?.current?.vis_miles;

//     return (
//         <aside>
//             <div className="wrapper">
//                 <h2>Aside Content</h2>
//                 <div className="day-one">
//                 <h3>Wednesday Weather Insights</h3>
//                 <p>Sunrise: {sunriseTime}</p>
//                 <p>Sunset: {sunsetTime}</p>
                
//                 {historicalData && (
//                     <>
//                         <p> Max Temp: {historicalData.maxtemp_c}°C</p>
//                         <p> Min Temp: {historicalData.mintemp_c}°C</p>
                        
//                     </>
//                 )}

              
//                 <p>UV Index: {uvIndex}</p>
//                 <p>Visibility: {visibilityKm} km / {visibilityMiles} miles</p>
                
//             </div>
//             </div>
//             <p>Web-App created by: Alerdo Ballabani</p>
//         </aside>
//     )
// }

// export default Aside;


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

import './Week.css';
import { useState } from 'react';

const Week = ({ weekData, currentLocation }) => {
  const { current } = weekData;
  
  //since the api call brings back only the date and not the specific week day(exmp: monday tuesday ect) I have converted the date into the belonging day
  const  getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

  return (
    <>
        
      <h3>Weather for 3 days in {currentLocation} </h3> 
      <div className="week">
        {weekData?.forecast?.forecastday.map((day) => (
          <div key={day.date} className="day">
            <p>{getDayOfWeek(day.date)}</p>
            <p>Date: {day.date}</p>
            <p>{day.day.condition.text}</p>
            <p>Temperature: {day.day.avgtemp_c}°C</p>
            <span className={`wi wi-owm-${day.day.condition.code}`}></span>
            <img className='week-img' src={current.condition.icon} alt={current.condition.text} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Week;

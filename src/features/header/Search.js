
import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchWeather, setCityName } from './searchSlice';
import './Search.css';


const Search = ({ onSearch, getWeekData }) => {
  const [city, setCity] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    // Call onSearch with the city value
    onSearch(city);
    // Call getWeekData after onSearch is completed
    getWeekData(); //I have put getWeekData here so the calls are done at the same time
  }



  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search Weather In your city"
        />
        <button type='submit'>Search</button>
      </form>
    </>
  )
};

export default Search;

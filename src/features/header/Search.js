
import './Search.css';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, setCityName } from './searchSlice';

const Search = ({onSearch}) => {

  const [city, setCity] = useState('');

   const handleSearch = (event) => {
    event.preventDefault();
    onSearch(city);
   }

  return (
    <>
  <form onSubmit={handleSearch}>
    <input 
      type="text" 
      value={city} 
      onChange={(e) => setCity(e.target.value)} 
    />
    <button type='submit'>Search</button>
  </form>
    </>
  )
};


export default Search;


import React, { useState } from 'react';

function WeatherDashboard() {
  
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState('');

  async function fetchWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=30dafdc4cf9438c3e8babd4e9cba477e`);
    return response.json();
  }

  const addCity = () => {
    const weather = fetchWeather(search);
    setCities([...cities, weather]);
  };

  const deleteCity = (city) => {
    setCities(cities.filter(c => c.name !== city.name));
  };

  return (
    <div>
      <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
      <button onClick={addCity}>Add City</button>
      <div>
        {cities.map(city => (
          <div key={city.name}>
            <h2>{city.name}</h2>
            <p>Temperature: {city.main.temp}</p>
            <button onClick={() => deleteCity(city)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherDashboard;

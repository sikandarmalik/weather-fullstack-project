import { useEffect, useState } from 'react';
import { fetchWeather } from './api/weatherAPI';
import WeatherCard from './components/WeatherCard';

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeather()
    .then(setWeather)
    .catch(() => setError('Failed to load weather'));
  }, []);

  if(error) {
    return <p>{error}</p>;
  }

  if (!weather) {
    return <p>Loading...</p>
  }

  return <WeatherCard weather={weather} />;
}

export default App

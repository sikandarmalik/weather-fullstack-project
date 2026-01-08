import { useEffect, useState } from 'react';
import { fetchWeather } from './api/weatherAPI';
import WeatherCard from './components/WeatherCard';

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeather()
      .then(setWeather)
      .catch(() => setError('Unable to load weather data'));
  }, []);

  if (error) {
    return (
      <div
        style={{
          background: 'white',
          padding: '1.5rem 2rem',
          borderRadius: '10px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.08)'
        }}
      >
        <p style={{ margin: 0 }}>{error}</p>
      </div>
    );
  }

  if (!weather) {
    return (
      <p style={{ color: '#6b7280' }}>
        Fetching current weather…
      </p>
    );
  }

  return <WeatherCard weather={weather} />;
}

export default App;
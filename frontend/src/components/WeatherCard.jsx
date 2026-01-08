function WeatherCard({ weather }) {
  return (
    <div
      style={{
        background: 'white',
        padding: '2rem 2.5rem',
        borderRadius: '12px',
        minWidth: '280px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
        textAlign: 'center'
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: '1.5rem',
          fontWeight: 600
        }}
      >
        {weather.location}
      </h1>

      <p
        style={{
          margin: '1.5rem 0 0.5rem',
          fontSize: '3rem',
          fontWeight: 500
        }}
      >
        {weather.temperature}°C
      </p>

      <p
        style={{
          margin: 0,
          fontSize: '1rem',
          color: '#6b7280'
        }}
      >
        {weather.condition}
      </p>
    </div>
  );
}

export default WeatherCard;
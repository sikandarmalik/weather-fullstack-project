function WeatherCard({ weather }) {
    return (
        <div>
            <h2>{weather.location}</h2>
            <p>Temperature: {weather.temperature}°C</p>
            <p>Condition: {weather.condition}</p>
        </div>
    )
}

export default WeatherCard;
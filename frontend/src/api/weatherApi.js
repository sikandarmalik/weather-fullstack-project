export async function fetchWeather(){
    const response = await fetch('http://localhost:3001/api/weather');
    if (!response.ok) {
        throw new Error('Failed to fetch weather');
    }
    return response.json();
}
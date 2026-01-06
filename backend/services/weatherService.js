import axios from 'axios';

const HKO_API_URL =
  'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en';

export async function getCurrentWeather() {
  try {
    const response = await axios.get(HKO_API_URL);
    const data = response.data;

    // temperature is an array by location
    const hongKongTemp = data.temperature.data.find(
      (item) => item.place === 'Hong Kong Observatory'
    );

    return {
      location: 'Hong Kong',
      temperature: hongKongTemp ? hongKongTemp.value : null,
      condition: data.icon ? 'See weather icon' : 'Unknown'
    };
  } catch (error) {
    console.error('Error fetching HKO weather:', error.message);
    throw error;
  }
}
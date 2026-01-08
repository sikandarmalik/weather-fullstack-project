import axios from 'axios';

const HKO_API_URL =
  'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en';

const ICON_MAP = {
  50: 'Sunny',
  51: 'Sunny Periods',
  52: 'Sunny Intervals',
  53: 'Sunny Periods with A Few Showers',
  54: 'Sunny Intervals with Showers',
  60: 'Cloudy',
  61: 'Overcast',
  62: 'Light Rain',
  63: 'Rain',
  64: 'Heavy Rain',
  65: 'Thunderstorms',
  70: 'Fine',
  71: 'Fine',
  72: 'Fine',
  73: 'Fine',
  74: 'Fine',
  75: 'Fine',
  76: 'Mainly Cloudy',
  77: 'Mainly Fine',
  80: 'Windy',
  81: 'Dry',
  82: 'Humid',
  83: 'Fog',
  84: 'Mist',
  85: 'Haze',
  90: 'Hot',
  91: 'Warm',
  92: 'Cool',
  93: 'Cold'
};

export async function getCurrentWeather() {
  try {
    const response = await axios.get(HKO_API_URL);
    const data = response.data;

    const hongKongTemp = data.temperature.data.find(
      (item) => item.place === 'Hong Kong Observatory'
    );

    const iconCode = data.icon?.[0];
    const condition = ICON_MAP[iconCode] || 'Unknown';

    return {
      location: 'Hong Kong',
      temperature: hongKongTemp ? hongKongTemp.value : null,
      condition
    };
  } catch (error) {
    console.error('Error fetching HKO weather:', error.message);
    throw error;
  }
}
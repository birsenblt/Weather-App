import axios from 'axios';

const API_KEY = '1be041e71522ad0d0ae899004a1493fe'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
        lang: 'tr',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

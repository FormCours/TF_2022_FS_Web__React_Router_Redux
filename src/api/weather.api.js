import axios from 'axios';

const URL_WEATHER_FORECAST = import.meta.env.VITE__URL_WEATHER_FORECAST;
const WEATHER_API_KEY = import.meta.env.VITE__WEATHER_API_KEY;

export const fetchWeatherForecast = (city) => {

  return axios
    .get(URL_WEATHER_FORECAST, {
      params: {
        appid: WEATHER_API_KEY,
        q: city,
        units: 'metric',
        lang: 'fr',
        cnt: 5
      }
    })
    .then(({data}) => {
      return {
        city: data.city.name,
        country: data.city.country,
        count: data.cnt,
        data : data.list.map(item => ({
          temp: item.main.temp,
          tempFeelsLike: item.main.feels_like,
          weatherDescription: item.weather[0].description,
          weatherIconUrl: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
          probaPrecipitation: item.pop,
          isDay: item.sys.pod === 'd',
          time: item.dt_txt
        }))
      };
    });
};
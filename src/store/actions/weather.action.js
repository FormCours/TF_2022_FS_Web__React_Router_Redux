import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWeatherForecast } from '../../api/weather.api';


export const weatherForecastActionFetch = createAsyncThunk(
  'weather/fetch-forecast',
  async (city) => {
    // Envoi de la requete
    return await fetchWeatherForecast(city);
  }
);
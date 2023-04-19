import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWeatherForecast } from '../../api/weather.api';

// Action qui envoi un requete AJAX
export const weatherForecastActionFetch = createAsyncThunk(
  'weather/fetch-forecast',
  async (city) => {
    // Envoi de la requete
    return await fetchWeatherForecast(city);
  }
);

// Action qui permet de recharger les données (sans connaitre la city)
export const weatherActionReload = createAsyncThunk(
  'weather/reload',
  async (arg, thunkAPI) => {

    // Récuperation la ville depuis le state
    const city = thunkAPI.getState().weather?.result?.city;

    if(city) {
      // Déclanche une action du store
      thunkAPI.dispatch(weatherForecastActionFetch(city));
    }
  }
)
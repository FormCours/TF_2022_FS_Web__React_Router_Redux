import { createAction } from '@reduxjs/toolkit';
import { fetchWeatherForecast } from '../../api/weather.api';

// Gestion de la requete "à l'ancienne" => Sans le "createAsyncThunk"
export const weatherForecastActionPending = createAction('weather/fetch-forecast/pending');
export const weatherForecastActionFulfilled = createAction('weather/fetch-forecast/fulfilled');
export const weatherForecastActionRejected = createAction('weather/fetch-forecast/rejected');

export const weatherForecastActionFetch = (city) => {

  // Renvoyer une fonction asynchrone (géré par redux-thunk)
  return async (dispatch) => {

    // 1) Dispatch du "pending" de la requete
    dispatch(weatherForecastActionPending());

    // 2) Envoi de la requete dans un bloc "try/catch"
    try {
      const response = await fetchWeatherForecast(city);

      // 3.1) Dispatch de "fulfilled" si la requete est réussite
      dispatch(weatherForecastActionFulfilled(response));
    }
    catch (error) {
      // 3.2) Dispatch de "rejected" si la requete est en erreur
      dispatch(weatherForecastActionRejected(error));
    }
  };
}
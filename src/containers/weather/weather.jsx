import { useCallback } from 'react';
import SearchBar from '../../components/search-bar/search-bar';
import WeatherForecast from './weather-forecast';
import { useDispatch } from 'react-redux';
import { weatherForecastActionFetch } from '../../store/actions/weather.action';

const Weather = () => {

  const dispatch = useDispatch();

  const handleCitySearch = useCallback((city) => {
    dispatch(weatherForecastActionFetch(city));
  })

  return (
    <div>
      <SearchBar label='Entrer une ville' onSearch={handleCitySearch} />
      <WeatherForecast />
    </div>
  )
}

export default Weather;
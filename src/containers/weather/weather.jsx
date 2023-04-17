import { useCallback } from 'react';
import SearchBar from '../../components/search-bar/search-bar';
import WeatherForecast from './weather-forecast';

const Weather = () => {

  const handleCitySearch = useCallback((city) => {
    // TODO Lancer une requete AJAX via Redux !
  })

  return (
    <div>
      <SearchBar label='Entrer une ville' onSearch={handleCitySearch} />
      <WeatherForecast />
    </div>
  )
}

export default Weather;
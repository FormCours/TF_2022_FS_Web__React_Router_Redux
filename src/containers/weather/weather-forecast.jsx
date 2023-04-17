import { useSelector } from 'react-redux';
import style from './weather.module.css';
import clsx from 'clsx';

const WeatherForecastItem = ({ temp, tempFeelsLike, weatherDescription, weatherIconUrl, probaPrecipitation, isDay, time }) => {

  const styleItem = clsx(
    style['weather-item'],
    isDay ? style['weather-day'] : style['weather-night']
  );

  return (
    <li className={styleItem}>
      <p>{time}</p>
      <img src={weatherIconUrl} alt={weatherDescription} title={weatherDescription} />
      <p>Temp: {temp} <br /> Resenti : {tempFeelsLike}</p>
      {(probaPrecipitation > 0.5) && (
        <p>Risque de pluie ! 🌧</p>
      )}
    </li>
  );
};


const WeatherForecast = () => {

  // Récupération des données du store
  const { loading, result, error } = useSelector(state => state.weather);

  if (loading) {
    return (
      <div>
        <p className={style['weather-title']}>Chargement...</p>
      </div>
    );
  };

  if(error) {
    return (
      <div>
        <p className={style['weather-title']}>Erreur !</p>
      </div>
    )
  }

  if(!result) {
    return (
      <div>
        <p className={style['weather-title']}>Pas de résultat</p>
      </div>
    )
  }

  return (
    <div>
      <p className={style['weather-title']}>
        Météo de "{result.city}" ({result.country})
      </p>
      <ul className={style['weather-result']}>
        {result.data.map(weather => (
          <WeatherForecastItem {...weather} key={weather.time} />
        ))}
      </ul>
    </div>
  );
};

export default WeatherForecast;
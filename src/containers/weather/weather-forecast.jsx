import mockup from './data-mockup.json';
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

  // FIXME Use data in store Redux. Remove Mockup !!!
  const result = mockup;

  // TODO Gestion du loading !

  return (
    <div>
      <p>Météo de "{result.city}" ({result.country})</p>
      <ul className={style['weather-result']}>
        {result.data.map(weather => (
          <WeatherForecastItem {...weather} key={weather.time} />
        ))}
      </ul>
    </div>
  );
};

export default WeatherForecast;
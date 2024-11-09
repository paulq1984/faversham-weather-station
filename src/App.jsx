import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Attribution from './Components/Attribution';
import CurrentView from './Views/CurrentView';
import HourlyView from './Views/HourlyView';
import DailyView from './Views/DailyView';

const location =  `lat=51.32&long=0.88`

const currentWeatherURL = `http://localhost:8080/currentWeather?`;
const forecastDailyURL = `http://localhost:8080/forecastDaily?`;
const forecastHourlyURL = `http://localhost:8080/forecastHourly?`;

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastDaily, setForecastDaily] = useState(null);
  const [forecastHourly, setForecastHourly] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const urls = [currentWeatherURL, forecastDailyURL, forecastHourlyURL]

    Promise.all(urls.map(url => 
      fetch(url + location).then(res => res.json())
  ))
  .then((data) => {
    console.log(data)
    setCurrentWeather(data[0])
    setForecastDaily(data[1])
    setForecastHourly(data[2])
    setIsLoading(false)
  })
  .catch((error) => {
    console.error("Error fetching data", error);
    setIsLoading(false);
  })
  }, []);

  return (
    <>
      <h1>Faverham Weather</h1>
      {isLoading && <div><h2>Loading.......</h2></div>}
      {currentWeather && <div><CurrentView currentWeather={currentWeather} /></div>}
      {forecastDaily && <div><DailyView forecastDaily={forecastDaily}/></div>}
      {forecastHourly && <div><HourlyView forecastHourly={forecastHourly} /></div>}
      <Attribution/>
    </>
  )
}

export default App

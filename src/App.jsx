import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const currentWeatherURL = `http://localhost:8080/currentWeather`;
const dailyWeatherURL = `http://localhost:8080/forecastDaily`;
const hourlyWeatherURL = `http://localhost:8080/forecastHourly`;

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [dailyForecast, setDailyForecast] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const urls = [currentWeatherURL, dailyWeatherURL, hourlyWeatherURL]

    Promise.all(urls.map(url => 
      fetch(url).then(res => res.json())
  ))
  .then((data) => {
    console.log(data)
    setCurrentWeather(data[0])
    setDailyForecast(data[1])
    setHourlyForecast(data[2])
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
    </>
  )
}

export default App

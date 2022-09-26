import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import Loading from './assets/components/Loading'
import WeatherCard from './assets/components/WeatherCard'

function App() {
  
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [Temperature, setTemperature] = useState()
  

  useEffect(() => {
    const succes = pos => {
      const obj ={
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(obj)
      }  
      navigator.geolocation.getCurrentPosition(succes)
  }, [])
  
    
  
  useEffect(() => {
    if(coords){
      const APIKEY = `d1c15823468f05b24840dddfdb37b3d9`
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}&lang=es`
      axios.get(URL)
        .then(res => {
          const celsius= (res.data.main.temp -273.15).toFixed(0)
          const farenheit= (celsius*9/5+32).toFixed(0)
          setTemperature({celsius,farenheit})
          setWeather(res.data)
        })
        .catch(err => console.log(err))
    }
    }, [coords])
  
  

  return (
    <div className="App">
     {
      weather ?
     <WeatherCard 
     weather={weather} Temperature={Temperature} />
     :
     <Loading />
    }
    </div>
  )
}

export default App

import Headers from './components/Headers';
import Cards from './components/Cards';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Forecast from './components/Forecast'

const URL=`https://api.openweathermap.org/data/2.5/onecall`
const API_KEY=`606f056e58a53b1ef1b4c1a8d336c2cd`

function App() {
  const [latitude,setLatitude]=useState('')
  const [longitude,setLongitude]=useState('')
  const [city,setCity]=useState('')
  const [temprature,setTemprature]=useState('')
  const [icon,setIcon]=useState('')
  const [forcast,setForcast]=useState([])
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(function(position){
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });

    axios.get(`${URL}?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${API_KEY}`)
    .then((weatherData)=>{
      console.log(weatherData);
      setTemprature(weatherData.data.current.temp);
      setCity(weatherData.data.timezone);
      setIcon(weatherData.data.current.weather[0].main)
      setForcast(weatherData.data.daily)

    })
  },[latitude,longitude])
  return (
    <div className='main'>
      <Headers/>
      <Cards temprature={temprature}
      city={city}
      icon={icon}
      />
      <Forecast forcast={forcast}/>
    </div>
  );
}

export default App;

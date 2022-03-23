import React from 'react'
import { Card,Feed } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faCloud, faCloudRain, faSmog, faSnowman, faSun } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment-timezone';

export default function Cards({temprature,city,icon}) {
  
    let weatherIcons = null;
    if (icon === 'Haze') {
        weatherIcons = <FontAwesomeIcon icon={faSmog} size="lg" color="#212121" />
      }
      else if (icon === 'Thunderstorm') {
        weatherIcons = <FontAwesomeIcon icon={faBolt} size="lg" color="#212121" />
      }
      else if (icon === 'Drizzle') {
        weatherIcons = <FontAwesomeIcon icon={faCloudRain} size="lg" color="#212121" />
      }
      else if (icon === 'Rain') {
        weatherIcons = <FontAwesomeIcon icon={faCloudRain} size="lg" color="#212121" />
      }
      else if (icon === 'Snow') {
        weatherIcons = <FontAwesomeIcon icon={faSnowman} size="lg" color="#212121" />
      }
      else if (icon === 'Mist') {
        weatherIcons = <FontAwesomeIcon icon={faSmog} size="lg" color="#212121" />
      }
      else if (icon === 'Clear') {
        weatherIcons = <FontAwesomeIcon icon={faSun} size="lg" color="#212121" />
      }
      else if (icon === 'Clouds') {
        weatherIcons = <FontAwesomeIcon icon={faCloud} size="lg" color="#212121" />
      }
  return (
    <div className='weather-card'>
        <div className='cardheader'>
            {city}
        </div>
        <div className='dates'>
            {moment().format('MMMM Do,h:mm a')}
        </div>
        <hr></hr>
        <div className='icons'>
          {weatherIcons}
        </div>
        <div className='card'>
            <b>Temprature</b>: {Math.floor(temprature-273)} ℃
        </div>
    </div>
  )
}

import React from 'react'
import { Card } from 'semantic-ui-react'
import moment from 'moment-timezone'

export default function Forecast({ forcast }) {
    return (
        <div className='forcast-card'>
            
                {forcast.map((data) => {
                    return (
                        <Card className='forcast-container'>
                            <Card.Header className="forecast-date">
                                    Date: {moment.unix(data.dt).format('LL')}
                            </Card.Header>
                            <Card.Header className='maxTemp'> 
                            Max-Temp: {Math.floor(data.temp.max-273)}℃
                            </Card.Header>
                            <Card.Header className='minTemp'>
                            Min-Temp: {Math.floor(data.temp.min-273)}℃
                            </Card.Header>
                            <Card.Description className="temp-desc">
                             {data.weather[0].description}
                            </Card.Description>
                        </Card>
                    )
                })}

            

        </div>
    )
}

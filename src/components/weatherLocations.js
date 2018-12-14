import React from 'react'
import Location from './Location'
import WeatherData from './weatherData'
const WeatherLocation = () => (
    <div>
        <Location city={'Bogotá'}/>
        <WeatherData/>
    </div>
);
export default WeatherLocation;
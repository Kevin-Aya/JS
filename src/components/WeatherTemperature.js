import React from 'react'
const WeatherTemperature = ({ temperature,weatherState}) => (
    <div>
        <span>{`${temperature} C°` }</span>
    </div>
);
export default WeatherTemperature;
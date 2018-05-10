import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';
import {CLOUD, 
        CLOUDY,
        SUN,
        RAIN,
        SNOW,
        WINDY,
        THUNDER,
        DRIZZLE
    } from './../../../constants/weathers';

const stateToIconName = weatherState => {
    switch (weatherState) {
       case CLOUD:
            return "cloud";
        case CLOUDY:
            return "cloudy";
        case SUN:
            return "day-sunny";
        case RAIN:
            return "rain";
        case SNOW: 
            return "snow";
        case WINDY:
            return "windy";
        case THUNDER:
            return "day-thunderstorm";
        case DRIZZLE:
            return "day-showers";
        default:
            return "alien";
    }
};

const getWeatherIcon = weatherState => {
    //imprime el icono con el nombre que se le envie como parametro
    return (<WeatherIcons className='wicon' name={stateToIconName(weatherState)} size="4x" />);
};

const WeatherTemperature = ({temperature, weatherState}) => (
    //Imprime la temperatira que se le envie como parametro
    <div className="weatherTemperatureCont">
        {getWeatherIcon(weatherState)}
        <span className='temperature'>{`${temperature}`}</span>
        <span className='temperaturetype'>C°</span>
    </div>
);

//validaciones
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,

};

export default WeatherTemperature;
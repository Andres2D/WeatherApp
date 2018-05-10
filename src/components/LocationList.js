import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';



const LocationList = ({cities, onSelectedLocation}) => {
    const handleWeatherLocationclick = city => {
        console.log("handleweatherlocationclick");
        onSelectedLocation(city);
    };
    const strToComponent = cities => (//transformar array que llega y lo convierte a componente
        cities.map(( city ) => 
        (
            <WeatherLocation 
                key={city} 
                city={city} 
                onWeatherLocationclick={() => handleWeatherLocationclick(city)} />))//recibe cada dato del array y lo renderiza
    );

    return(
            <div>
            {strToComponent(cities)}
            </div>
        );
    
};

LocationList.protoTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}
export default LocationList;
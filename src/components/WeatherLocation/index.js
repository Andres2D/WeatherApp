import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import convert from 'convert-units';
import Location from './Location';
import CircularProgress from 'material-ui/CircularProgress';
import WeatherData from './WeatherData';
import transformWeather from './../../services/trasformWeather';
import './styles.css';



const api_key="bc56593712c5d9d44e20946a28ab2630";
const url = "http://api.openweathermap.org/data/2.5/weather";





// c
class WeatherLocation extends Component{ 

    constructor({ city }){
        super();
   
        this.state = {
            city,
            data: null
        };

    }
    componentWillMount() {
        const {city} = this.state;
        const api_weather = `${url}?q=${city}&APPID=${api_key}`;
            fetch(api_weather).then(data => {
                return data.json();
            }).then(weather_data => {
                const data = transformWeather(weather_data);
                this.setState({data});
            });
    }
    render =() => {


        const {onWeatherLocationclick}=this.props;
        const {city, data} = this.state;
        return(
        <div className='weatherlocationcont' onClick={onWeatherLocationclick}>
            <Location city={city} /> 
            {data ? <WeatherData data={data} /> :
            <CircularProgress size={60} thickness={7} />}
        </div>);
};

}

WeatherLocation.protoTypes = {
    city: PropTypes.string,
    onWeatherLocationclick: PropTypes.func,
}

export default WeatherLocation;
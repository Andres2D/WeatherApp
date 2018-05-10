import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

/*const Location = (props) => {
    // original const city = props.city;
    const {city} = props; // forma alternativa si la variable de destino y la de origen se llaman igual
    
    return (<div>
                <h1>
                    {city}
                </h1>
            </div>)
};*/

//forma corta
const Location = ({city}) => (
    <div className="LocationCont"><h1>{city}</h1></div>
);
//VALIDACION
Location.propTypes = {
    city: PropTypes.string.isRequired,
}
export default Location;
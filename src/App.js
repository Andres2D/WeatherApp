import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  'Medellín,col',
  'Bogotá,col',
  'Buenos Aires,ar',
  'Madrid,es',
];

class App extends Component {

  handleSelectedLocation = city => {
    console.log(`handleselectedlocation ${city}`);
  };
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationList cities={cities}
            onSelectedLocation={this.handleSelectedLocation}></LocationList>
        </div>  
      </MuiThemeProvider>
    );
  }
}

export default App;

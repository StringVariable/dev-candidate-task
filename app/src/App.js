import React, { Component } from 'react';
import Header from './Components/Header/Header';
import LocationSearch from './Components/LocationSearch/LocationSearch';
import './App.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCr2eaRCVdEGZaTGLZt51262vD0Mtz3MgI&libraries=places"></script>
        <Header />
        <div className="pageContainer">
          <LocationSearch className="locationSearch" />
        </div>
      </div>
    );
  }
}

export default App;

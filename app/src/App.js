import React, { Component } from 'react';
import Header from './Components/Header/Header';
import LocationSearch from './Components/LocationSearch/LocationSearch';
import Duration from './Components/Duration/Duration';
import Table from './Components/Table/Table';
import './App.scss';

class App extends Component {

  constructor() {
    super()
    this.state = {
      participants: [],
      location: {
        lat: null,
        lng: null
      }
    }
  }

  filterParticipantsByLocation() {
    console.log(this.state);
    const { participants, location } = this.state;
    console.log(participants);
    console.log(location);
    
    const searchLocation = new window.google.maps.LatLng(location.lat, location.lng);
    const filteredParticipants = participants.filter(participant => {
      const { latitude, longitude } = participant.location;
      const participantLocation = new window.google.maps.LatLng(latitude, longitude);
      const distance = window.google.maps.geometry.spherical.computeDistanceBetween(searchLocation, participantLocation);
      return distance / 1000 < 10;
    });
    this.setState(prevState => ({
      ...prevState,
      participants: filteredParticipants
    }));
  }

  participantsReceived(participants) {
    this.setState((prevState) => ({
      ...prevState,
      participants
    }));
    this.filterParticipantsByLocation();
  }

  locationReceived(location) {
    this.setState(prevState => ({
      ...prevState,
      location: {
        lat: location.lat,
        lng: location.lng
      }
    }));
  }

  render() {
    const { participants, location } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="pageContainer">
          <div className="fieldContainer">
            <LocationSearch 
              className="locationSearch" 
              participantsReceived={this.participantsReceived.bind(this)}
              locationReceived={this.locationReceived.bind(this)}  
            />
            <Duration />
          </div>
          <div className="tableContainer">
            <Table 
              participants={participants} 
              location={location} 
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

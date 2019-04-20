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
      },
      baseIncentive: 75,
      tableLoading: false,
    }
  }

/**
 * Filters out any participants outside of a 10km radius of the searched location.
 */
  filterParticipantsByLocation() {
    const { participants, location } = this.state;
    const searchLocation = new window.google.maps.LatLng(location.lat, location.lng);

    // Filter the participants
    const filteredParticipants = participants.filter(participant => {
      const { latitude, longitude } = participant.location;
      const participantLocation = new window.google.maps.LatLng(latitude, longitude);
      const distance = window.google.maps.geometry.spherical.computeDistanceBetween(searchLocation, participantLocation);
      return distance / 1000 < 10;
    });

    // Update the state to reflect the filtered participants
    this.setState(prevState => ({
      ...prevState,
      participants: filteredParticipants
    }));
  }

/**
 * Hook invoked when participants are received from the API
 * @param {array} participants - Array of participants
 */
  participantsReceived(participants) {
    this.setState((prevState) => ({
      ...prevState,
      participants
    }));
    this.filterParticipantsByLocation();
  }

/**
 * Hook invoked when the location is changed
 * @param {object} location - Location object containing lat,lng of searched location
 */
  locationReceived(location) {
    this.setState(prevState => ({
      ...prevState,
      location: {
        lat: location.lat,
        lng: location.lng
      }
    }));
  }

  /**
 * Hook invoked when the session duration is changed
 * @param {string} duration - A string representing the session length
 */
  handleDurationChange(duration) {
    switch(duration){
      case '1 hour':
      this.setState(prevState => ({
        ...prevState,
        baseIncentive: 75
      }));
      break;

      case '45 mins':
      this.setState(prevState => ({
        ...prevState,
        baseIncentive: 60
      }));
      break;

      case '30 mins':
      this.setState(prevState => ({
        ...prevState,
        baseIncentive: 50
      }));
      break;

      default:
      this.setState(prevState => ({
        ...prevState,
        baseIncentive: 75
      }));
    }
  }

/**
 * Function to invoke/remove loading on the table
 */
  toggleLoading() {
    this.setState(prevState => ({
      ...prevState,
      tableLoading: !prevState.tableLoading
    }));
  }

  render() {
    const { participants, location, tableLoading, baseIncentive } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="pageContainer">
          <div className="fieldContainer">
            <LocationSearch 
              className="locationSearch" 
              participantsReceived={this.participantsReceived.bind(this)}
              locationReceived={this.locationReceived.bind(this)} 
              toggleLoading={this.toggleLoading.bind(this)} 
            />
            <Duration durationChange={this.handleDurationChange.bind(this)} />
          </div>
          <div className="tableContainer">
            <Table 
              participants={participants} 
              location={location}
              baseIncentive={baseIncentive}
              loading={tableLoading} 
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import LocationSearchInput from './LocationSearchInput/LocationSearchInput';
import './locationSearch.scss';

class LocationSearch extends Component {
  constructor(props) {
    super(props);
    // console.log(window.google.maps);
    // const lat1 = new window.google.maps.LatLng(-27.4576352, 153.03382540000007);
    // const lat2 = new window.google.maps.LatLng(-27.4191805, 153.03641930000003);
    // console.log(window.google.maps.geometry.spherical.computeDistanceBetween(lat1, lat2));

    this.state = {

    }
  }

  render() {
    const { participantsReceived } = this.props;
    return (
      <div className="locationSearch">
        <div className="inputGroup">
          <label>Session Location:</label>
          <br />
          <LocationSearchInput participantsReceived={participantsReceived}/>
        </div>
      </div>
    )
  }
}

export default LocationSearch;

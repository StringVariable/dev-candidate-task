import React, { Component } from 'react';
import LocationSearchInput from './LocationSearchInput/LocationSearchInput';
import './locationSearch.scss';

class LocationSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    const { participantsReceived, locationReceived } = this.props;
    return (
      <div className="locationSearch">
        <div className="inputGroup">
          <label>Session Location:</label>
          <br />
          <LocationSearchInput participantsReceived={participantsReceived} locationReceived={locationReceived}/>
        </div>
      </div>
    )
  }
}

export default LocationSearch;

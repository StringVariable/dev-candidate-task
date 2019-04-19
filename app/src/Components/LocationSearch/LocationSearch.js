import React, { Component } from 'react';
import LocationSearchInput from './LocationSearchInput/LocationSearchInput';
import './locationSearch.scss';

class LocationSearch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="locationSearch">
        <div className="inputGroup">
          <label>Session Location:</label>
          <br />
          <LocationSearchInput />
        </div>
      </div>
    )
  }
}

export default LocationSearch;

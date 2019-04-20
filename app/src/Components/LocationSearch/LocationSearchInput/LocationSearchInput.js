import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import axios from 'axios';
import './locationSearchInput.scss';

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      address: '' 
    };
  }

/**
 * Keeps the address in sync
 * @param {string} address - String of entered address
 */
  handleChange(address) {
    this.setState({
      address 
    });
  }

/**
 * Handles geocoding of the google places location selected, then fetches participant list
 */
  handleSelect(address) {
    const { locationReceived, toggleLoading } = this.props;
    toggleLoading(); // Invoke table loading

    // Geocode google place 
    geocodeByAddress(address)
    .then(results => getLatLng(results[0]))
    .then(latLng => locationReceived(latLng)) // Update the location coords in main state (App.js)
    .catch(error => console.error('Error', error));
    this.setState({
      address
    })

    // Call API for participants list
    this.fetchParticipants();
  }

/**
 * Fetches participants from API
 */
  fetchParticipants() {
    const { participantsReceived, toggleLoading } = this.props;
    axios.get(`${process.env.REACT_APP_API_URL}/api/user`)
    .then(results => {
      participantsReceived(results.data); // Update participants list in main state (App.js)
      toggleLoading(); // Particpants received, table loading should be removed
    })
  }

  render() {
    return ( 
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange.bind(this)}
          onSelect={this.handleSelect.bind(this)}
        >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Search Address...',
                  className: 'location-search-input',
                })}
              />
              <div className={suggestions.length ? "autocomplete-dropdown-container" : "hidden"}>
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
    )
  }
}

export default LocationSearchInput;

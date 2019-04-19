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
    this.state = { address: '' };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    const { locationReceived } = this.props;
    geocodeByAddress(address)
    .then(results => getLatLng(results[0]))
    .then(latLng => locationReceived(latLng))
    .catch(error => console.error('Error', error));
    this.setState({
      address
    })
    this.fetchParticipants();
  };

  fetchParticipants() {
    const { participantsReceived } = this.props;
    axios.get(`${process.env.REACT_APP_API_URL}/api/user`)
    .then(results => {
      participantsReceived(results.data);
    })
  }

  render() {
    return ( 
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Search Address...',
                  className: 'location-search-input',
                })}
              />
              <div className="autocomplete-dropdown-container">
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

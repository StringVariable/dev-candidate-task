import React, { Component } from 'react';
import './table.scss';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  // filterParticipantsByLocation(participants, location) {
  //   const searchLocation = new window.google.maps.LatLng(location.lat, location.lng);
  //   const filteredParticipants = participants.filter(participant => {
  //     const { latitude, longitude } = participant.location;
  //     const participantLocation = new window.google.maps.LatLng(latitude, longitude);
  //     const distance = window.google.maps.geometry.spherical.computeDistanceBetween(searchLocation, participantLocation);
  //     return distance / 1000 < 10;
  //   });
  //   return filteredParticipants;
  // }

  render() {
    let { participants, loading } = this.props;

    const columns = [{
      Header: 'Email',
      accessor: 'email',
    }, {
      Header: 'Location',
      accessor: participant => `${participant.location.city}, ${participant.location.state}`,
      id: participant => participant.id
    }]
   
    return (
      <div className="inputGroup fullWidthTable">
        <label>Participants</label>
        <br />
        <ReactTable data={participants} columns={columns} loading={loading}/>
      </div>
    )
  }
}

export default Table;

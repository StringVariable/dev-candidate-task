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

  render() {
    const { participants } = this.props;
    console.log(participants);
    const columns = [{
      Header: 'Email',
      accessor: participant => participant.email, // String-based value accessors!
      id: participant => participant.email
    }, {
      Header: 'Location',
      accessor: participant => participant.location ? `${participant.location.postcode}` : 'null',
      id: participant => participant.id
    }]
   
    return (
      <div className="inputGroup fullWidthTable">
        <label>Participants</label>
        <br />
        <ReactTable data={participants} columns={columns}/>
      </div>
    )
  }
}

export default Table;

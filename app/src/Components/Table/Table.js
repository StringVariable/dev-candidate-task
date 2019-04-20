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

  calculateIncentive(participant) {
    const incentiveModifier = 0.3;
    let { baseIncentive } = this.props;
    const { education } = participant.meta;
    if ((education) && (education.postgraduate || education.undergraduate)) {
      const incentive = baseIncentive + (baseIncentive * incentiveModifier);
      return `$${incentive}`;
    }
    return `$${baseIncentive}.00`;
  }

  render() {
    let { participants, loading } = this.props;
    console.log(participants);

    const columns = [{
      Header: 'Email',
      accessor: 'email',
    }, {
      Header: 'Location',
      accessor: participant => `${participant.location.city}, ${participant.location.state}`,
      id: participant => participant.id
    }, {
      Header: 'Incentive',
      accessor: participant => this.calculateIncentive(participant),
      id: 'incentive'
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

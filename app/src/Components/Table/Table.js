import React, { Component } from 'react';
import './table.scss';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import numeral from 'numeral';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

/**
 * Calculates incentive price based on if they are a student/working part time
 */
  calculateIncentive(participant) {
    const incentiveModifier = 0.3;
    let { baseIncentive } = this.props;
    const { work } = participant.meta;

    if ((work) && (work.status.fulltime_student || work.status.parttime)) {
      const incentive = baseIncentive + (baseIncentive * incentiveModifier);
      return numeral(incentive).format('$0.00');
    }
    return numeral(baseIncentive).format('$0.00');
  }

  render() {
    let { participants, loading } = this.props;

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
        <ReactTable 
          data={participants} 
          columns={columns} 
          loading={loading}
          loadingText={'Finding participants...'}  
          noDataText={'No participants found'}
          rowsText={'participants'}
        />
      </div>
    )
  }
}

export default Table;

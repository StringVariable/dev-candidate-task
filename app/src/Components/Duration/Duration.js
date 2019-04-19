import React, { Component } from 'react';
import './duration.scss';

class Duration extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="duration">
        <div className="inputGroup">
          <label>Session Duration:</label>
          <br />
          <select className='customDropdown'>
            <option value="1 hour">1 hour</option>
            <option value="45 mins">45 mins</option>
            <option value="30 mins">30 mins</option>
          </select>
        </div>
      </div>
    )
  }
}

export default Duration;

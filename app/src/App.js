import React, { Component } from 'react';
import Header from './Components/Header/Header';
import LocationSearch from './Components/LocationSearch/LocationSearch';
import Duration from './Components/Duration/Duration';
import Table from './Components/Table/Table';
import './App.scss';

class App extends Component {

  constructor() {
    super()
    this.state = {
      participants: []
    }
  }

  participantsReceived(participants) {
    this.setState(prevState => ({
      ...prevState,
      participants
    }));
  }

  render() {
    const { participants } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="pageContainer">
          <div className="fieldContainer">
            <LocationSearch className="locationSearch" participantsReceived={this.participantsReceived.bind(this)}/>
            <Duration />
          </div>
          <div className="tableContainer">
            <Table participants={participants}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

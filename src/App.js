import React, { Component } from 'react';
import Command from './elements/command';
import LoginReadout from './elements/loginReadout';
import ManPage from './elements/manPage';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { manOpen: false };
  }

  openMan = (event) => {
    if (event.keyCode === 13) {
      console.log('yep');
      this.setState({ manOpen: true });
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.openMan, false);
  }

  render() {
    return (
      <div className="App">
        {this.state.manOpen ? <div className="App-header"><ManPage /></div> : (
          <div className="App-header">
            <LoginReadout />
            <Command />
          </div>
        )}
      </div>
    );
  }
}

export default App;

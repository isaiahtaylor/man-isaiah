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

  openManTap = () => {
    this.setState({ manOpen: true });
  }

  openManEnter = (event) => {
    if (event.keyCode === 13) {
      console.log('yep');
      this.setState({ manOpen: true });
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.openManEnter, false);
  }

  render() {
    return (
      <div onClick={this.openManTap} className="App">
        {this.state.manOpen ?
          (
            <div className="App-header">
              <ManPage />
            </div>
          ) : (
            <div className="App-header cursor-pointer">
              <LoginReadout />
              <Command />
            </div>
          )}
      </div>
    );
  }
}

export default App;

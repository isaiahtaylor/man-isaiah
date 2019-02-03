import React, { Component } from 'react';
import Command from './elements/command';
import LoginReadout from './elements/loginReadout';
import ManPage from './elements/manPage';
import Help from './elements/help';
import './App.css';

class App extends Component {
  state = {
    manOpen: false,
    scrollIndex: 0,
    elementCount: 0,
    commands: [],
    command: 'man isaiah-taylor',
  };

  elementCountCallback = (count) => {
    this.setState({ elementCount: count });
  }

  openManTap = () => {
    this.setState({ manOpen: true });
  }

  handleKeyEvent = (event) => {
    // Enter
    if (event.keyCode === 13) {
      event.preventDefault();

      const newState = {
        command: '',
        commands: [...this.state.commands, { command: this.state.command }]
      };

      if (this.state.command === "man isaiah-taylor") {
        newState.manOpen = true;
      } else {
        newState.commands.push({ isHelp: true });
      }

      this.setState(newState);
    }

    // Backspace
    if (event.keyCode === 8 && !this.state.manOpen) {
      event.preventDefault();
      this.setState({
        command: this.state.command.slice(0, -1)
      })
      return;
    }

    if (this.state.manOpen) {
      // Down arrow
      if (event.keyCode === 40) {
        event.preventDefault();
        if (this.state.scrollIndex < this.state.elementCount) {
          this.setState({
            scrollIndex: this.state.scrollIndex + 1
          })
        }
      }

      // Up arrow
      if (event.keyCode === 38) {
        event.preventDefault();
        if (this.state.scrollIndex > 0) {
          this.setState({
            scrollIndex: this.state.scrollIndex - 1
          })
        }
      }

      // Q
      if (event.keyCode === 81) {
        event.preventDefault();
        this.setState({
          manOpen: false
        })
      }
    } else {
      if (!event.metaKey && event.key.length === 1) {
        this.setState({
          command: this.state.command + event.key
        })
      }
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyEvent, false);
  }

  render() {
    return (
      <div onClick={this.openManTap} className="App">
        {this.state.manOpen === true ?
          (
            <div className="App-header">
              <ManPage
                scrollIndex={this.state.scrollIndex}
                elementCountCallback={this.elementCountCallback} />
            </div>
          ) : (
            <div className="App-header cursor-pointer">
              <LoginReadout />
              {this.state.commands.map((cmd, i) => {
                if (!cmd.isHelp) {
                  return (<Command text={cmd.command} key={i} current={false} />);
                } else {
                  return <Help/>;
                }
              })}
              <Command text={this.state.command} current={true} />
            </div>
          )}
      </div>
    );
  }
}

export default App;

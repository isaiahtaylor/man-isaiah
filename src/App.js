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
    blink: true,
  };

  arrowPointer = 0;

  elementCountCallback = (count) => {
    this.setState({ elementCount: count });
  }

  travelUp = () => {
    const cmds = this.state.commands;
    if (this.arrowPointer < cmds.length) {
      for (let i = 0; i < cmds.length; i++) {
        this.arrowPointer++;
        const cmdTemp = cmds[cmds.length - this.arrowPointer];
        if (!cmdTemp.isHelp && !cmdTemp.isCancelled) break;
      }
      this.setState({
        command: cmds[cmds.length - this.arrowPointer].command
      })
    } else {
      this.arrowPointer = cmds.length;
      this.setState({ command: 'man isaiah-taylor' });
    }
  }

  travelDown = () => {
    if (this.arrowPointer >= 1) {
      const cmds = this.state.commands;
      for (let i = 0; i < cmds.length; i++) {
        const cmdTemp = cmds[cmds.length - this.arrowPointer];
        this.arrowPointer--;
        if (!cmdTemp.isHelp && !cmdTemp.isCancelled) break;
      }
      this.setState({
        command: cmds[cmds.length - this.arrowPointer].command
      })
    } else {
      this.setState({ command: '' });
      this.arrowPointer = 1;
    }
  }

  handleManKeys = (event) => {
    switch (event.keyCode) {
      // Down arrow
      case 40:
        event.preventDefault();
        if (this.state.scrollIndex < this.state.elementCount) {
          this.setState({
            scrollIndex: this.state.scrollIndex + 1
          })
        }
        break;
      // Up arrow
      case 38:
        event.preventDefault();
        if (this.state.scrollIndex > 0) {
          this.setState({
            scrollIndex: this.state.scrollIndex - 1
          })
        }
        break;
      // Q
      case 81:
        event.preventDefault();
        this.setState({
          manOpen: false
        })
        window.scrollTo(0, document.body.scrollHeight);
        break;

      default:
        break;
    }
  }

  handleBashKeys = (event) => {
    switch (event.keyCode) {
      // Enter
      case 13:
        event.preventDefault();

        const newState = {
          command: '',
          commands: [...this.state.commands, { command: this.state.command }]
        };

        if (this.state.command === "man isaiah-taylor") {
          newState.manOpen = true;
          this.setState(newState);
        } else if (this.state.command === "help") {
          newState.commands.push({ isHelp: true });
          this.setState(newState);
          window.scrollTo(0, document.body.scrollHeight);
        }

        return;
      // Tab
      case 9:
        event.preventDefault();

        if (this.state.command[0] === 'm') {
          this.setState({ command: 'man isaiah-taylor' })
        } else if (this.state.command[0] === 'h') {
          this.setState({ command: 'help' })
        }
        return;
      // Ctrl-C
      case 67:
        if (event.ctrlKey) {
          event.preventDefault();

          const newState = {
            command: '',
            commands: [...this.state.commands, { command: this.state.command + '^C', isCancelled: true }]
          };

          this.setState(newState);
          window.scrollTo(0, document.body.scrollHeight);
        }
        return;
      // Backspace
      case 8:
        event.preventDefault();
        this.setState({ blink: false });
        this.setState({ blink: true });

        this.setState({
          command: this.state.command.slice(0, -1)
        })
        return;
      // Up arrow
      case 38:
        event.preventDefault();
        this.travelUp();
        return;
      // Down arrow
      case 40:
        event.preventDefault();
        this.travelDown();
        return;

      default:
    }
    if (!event.metaKey && event.key.length === 1) {
      this.setState({ blink: false });
      this.setState({ blink: true });

      this.setState({
        command: this.state.command + event.key
      })
    }
  }


  handleKeyEvent = (event) => {
    if (this.state.manOpen) {
      this.handleManKeys(event);
    } else {
      this.handleBashKeys(event);
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyEvent, false);
  }

  render() {
    return (
      <div className="App">
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
                  return <Help />;
                }
              })}
              <Command text={this.state.command} current={this.state.blink} />
            </div>
          )}
      </div>
    );
  }
}

export default App;

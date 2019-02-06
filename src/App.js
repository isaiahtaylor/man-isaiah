import React, { Component } from 'react';
import Command from './elements/command';
import LoginReadout from './elements/loginReadout';
import ManPage from './elements/manPage';
import Help from './elements/help';
import HelpTip from './elements/helpTip';
import './App.css';

class App extends Component {
  state = {
    manOpen: false,
    scrollIndex: 0,
    elementCount: 0,
    commandHistory: [],
    commands: [],
    command: 'man isaiah-taylor',
    blink: true,
  };


  arrowPointer = 1;

  elementCountCallback = (count) => {
    this.setState({ elementCount: count });
  }

  closeMan = (event) => {
    event.preventDefault();
    this.setState({
      manOpen: false
    })
    window.scrollTo(0, document.body.scrollHeight);
  }

  travelUp = () => {
    const cmds = this.state.commands;
    this.setState({ command: cmds[cmds.length - this.arrowPointer].command });
    this.arrowPointer++;
  }

  travelDown = () => {
    const cmds = this.state.commands;
    this.arrowPointer--;
    this.setState({ command: cmds[cmds.length - this.arrowPointer].command });
  }

  scrollUp = (event) => {
    event.preventDefault();
    if (this.state.scrollIndex > 0) {
      this.setState({
        scrollIndex: this.state.scrollIndex - 1
      })
      window.scrollTo(0, 0);
    }
  }

  scrollDown = (event) => {
    event.preventDefault();
    if (this.state.scrollIndex < this.state.elementCount) {
      this.setState({
        scrollIndex: this.state.scrollIndex + 1
      })
      window.scrollTo(0, 0);
    }
  }

  scrollTop = () => {
    this.setState({
      scrollIndex: 0
    });
    window.scrollTo(0, 0);
  }

  scrollBottom = () => {
    this.setState({
      scrollIndex: this.state.elementCount - (Math.round(((window.screen.height * 1.0) /
        document.body.scrollHeight) * this.state.elementCount) - 1)
    })
  }

  handleManKeys = (event) => {
    console.log(event);
    switch (event.keyCode) {
      // Down arrow or j
      case 40:
        this.scrollDown(event);
        break;
      case 74:
        this.scrollDown(event);
        break;
      // Up arrow or k
      case 38:
        this.scrollUp(event);
        break;
      case 75:
        this.scrollUp(event);
        break;
      // g or G
      case 71:
        event.preventDefault();
        if (event.shiftKey) {
          this.scrollBottom();
        } else {
          this.scrollTop();
        }
        break;
      // Q
      case 81:
        this.closeMan(event);
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
          commands: [...this.state.commands, { command: this.state.command }],
          commandHistory: [...this.state.commandHistory, { command: this.state.command }]
        };

        let cmd = this.state.command;

        switch (cmd) {
          case "man isaiah-taylor":
            newState.manOpen = true;
            break;
          case "help":
            newState.commands.push({ isHelp: true });
            break;
          case "clear":
            this.setState({
              commandHistory: [],
              commands: [],
              command: '',
              blink: true
            });
            return;
          default:
            break;
        }

        this.setState(newState);
        if (cmd !== "man isaiah-taylor") window.scrollTo(0, document.body.scrollHeight);

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
          return;
        }
        break;
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
              <HelpTip />
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

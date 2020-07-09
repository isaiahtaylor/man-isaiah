import React, { Component } from 'react';
import Command from './elements/command';
import LoginReadout from './elements/loginReadout';
import ManPage from './elements/manPage';
import Help from './elements/help';
import HelpTip from './elements/helpTip';
import './App.css';
import { CommandRecord } from './types';
import Completer from './utils/tabCompleter';
import manPageContent from './manPageContent';

interface AppState {
  scrollIndex: number;
  elementCount: number;
  commandHistory: CommandRecord[];
  commands: CommandRecord[],
  command: string,
  blink?: boolean,
  manOpen?: boolean;
  currentOptions?: string[];
}

const allCommands: CommandRecord[] = [
  { command: 'man isaiah-taylor' },
  { command: 'help' },
  { command: 'exit' },
  { command: 'git' },
  { command: 'clear' },
];

const completer = Completer(allCommands.map(({ command }) => command));

class App extends Component {
  state: AppState = {
    manOpen: false,
    scrollIndex: 0,
    elementCount: manPageContent.length,
    commandHistory: [],
    commands: [] as CommandRecord[],
    command: 'man isaiah-taylor',
    blink: true,
  };


  arrowPointer = 1;

  closeMan = (event: KeyboardEvent) => {
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

  scrollUp = (event: KeyboardEvent) => {
    event.preventDefault();
    if (this.state.scrollIndex > 0) {
      this.setState({
        scrollIndex: this.state.scrollIndex - 1
      })
      window.scrollTo(0, 0);
    }
  }

  scrollDown = (event: KeyboardEvent) => {
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

  handleManKeys = (event: KeyboardEvent) => {
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

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  handleBashKeys = async (event: KeyboardEvent) => {
    switch (event.keyCode) {
      // Enter
      case 13:
        event.preventDefault();

        const newState: Partial<AppState> = {
          command: '',
          commands: [...this.state.commands, { command: this.state.command }],
          commandHistory: [...this.state.commandHistory, { command: this.state.command }],
          currentOptions: [],
        };

        let cmd = this.state.command;

        switch (cmd) {
          case "man isaiah-taylor":
            newState.manOpen = true;
            break;
          case "help":
            newState.commands?.push({ command: 'help', isHelp: true });
            break;
          case "exit":
            window.location.href = "https://stackoverflow.com/cv/isaiahtaylor";
            break;
          case "git":
            window.open("https://github.com/iptaylortechnical/man-isaiah");
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

        const completionAttempt = completer.complete(this.state.command);
        completionAttempt && this.setState({ command: completionAttempt });

        return;
      // Ctrl-c
      case 67:
        if (event.ctrlKey) {
          event.preventDefault();

          const newState: Partial<AppState> = {
            command: '',
            currentOptions: [],
            commands: [...this.state.commands, { command: this.state.command + '^C', isCancelled: true }]
          };

          this.setState(newState);
          window.scrollTo(0, document.body.scrollHeight);
          return;
        }
        break;
      // Ctrl-d
      case 68:
        if (event.ctrlKey) {
          event.preventDefault();

          const newState = {
            command: '',
            commands: [...this.state.commands, { command: this.state.command + '^D', isCancelled: true },
            { command: 'exit' }],
            currentOptions: [],
          };

          this.setState(newState);

          await this.sleep(500);

          window.location.href = "https://stackoverflow.com/cv/isaiahtaylor"
          return;
        }
        break;
      // Backspace
      case 8:
        event.preventDefault();
        this.setState({ blink: false });
        this.setState({ blink: true });

        const newCommand = this.state.command.slice(0, -1);
        const backState: Partial<AppState> = {};

        backState.currentOptions = newCommand ? completer.options(newCommand) : [];
        backState.command = newCommand;
        this.setState(backState);
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
        currentOptions: completer.options(this.state.command + event.key),
        command: this.state.command + event.key
      })
    }
  }


  handleKeyEvent = (event: KeyboardEvent) => {
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
              />
            </div>
          ) : (
            <div className="App-header cursor-pointer">
              <HelpTip />
              <LoginReadout />
              {this.state.commands.map((cmd, i) => {
                if (!cmd.isHelp) {
                  return (<Command text={cmd.command || ''} key={i} current={false} />);
                } else {
                  return <Help key={i} />;
                }
              })}
              <Command text={this.state.command} options={this.state.currentOptions} current={this.state.blink || false} />
              <p className="options">{
                this.state.currentOptions && (this.state.currentOptions.length > 1 ? this.state.currentOptions?.map((option) => <span key={option}>{option}&nbsp;</span>) : '')
              }</p>
            </div>
          )}
      </div>
    );
  }
}

export default App;

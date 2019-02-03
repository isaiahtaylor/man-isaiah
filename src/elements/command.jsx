import React from 'react';
import Line from './line';

class Command extends React.Component {
  render() {
    return (
      <Line
        main={
          <span>
            <code><b>web:~ user$</b> {this.props.text}</code>
            <span className={this.props.current ? "cursor" : "cursor-blank"}>a</span>
          </span>
        }
      />
    )
  }
}

export default Command;
import React from 'react';
import Line from './line';

class Command extends React.Component {
  render() {
    return (
      <Line
        main={
          <span>
            <code><b>web:~ user$</b> {this.props.text}</code>
            {this.props.current && <span className={"cursor"}>a</span>}
          </span>
        }
      />
    )
  }
}

export default Command;
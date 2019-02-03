import React from 'react';
import Line from './line';
import '../elements-css/inputLine.css';

class IndentedLine extends React.Component {
  render() {
    return (
      <Line
        main={
          <span>
            <span className="indent"></span>
            <span className="indented-line">{this.props.children}</span>
          </span>
        }
      />
    )
  }
}

export default IndentedLine;
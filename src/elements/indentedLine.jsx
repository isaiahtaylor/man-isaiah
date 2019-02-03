import React from 'react';
import Line from './line';
import '../elements-css/indentedLine.css';

class IndentedLine extends React.Component {
  render() {
    return (
      <Line
        main={
          <div>
            <p className="indent"></p>
            <p className="indented-line">{this.props.children}</p>
          </div>
        }
      />
    )
  }
}

export default IndentedLine;
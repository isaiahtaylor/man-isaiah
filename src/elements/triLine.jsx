import React from 'react';
import Line from './line';
import '../elements-css/triLine.css';

class TriLine extends React.Component {
  render() {
    return (
      <Line
        main={
          <span>
            <span className="first-third third">{this.props.first}</span>
            <span className="second-third third">{this.props.second}</span>
            <span className="third-third third">{this.props.third}</span>
          </span>
        }
      />
    )
  }
}

export default TriLine;
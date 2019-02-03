import React from 'react';
import Line from './line';
import '../elements-css/triLine.css';

class TriLine extends React.Component {
  render() {
    return (
      <Line
        main={
          <div>
            <p className="first-third third">{this.props.first}</p>
            <p className="second-third third">{this.props.second}</p>
            <p className="third-third third">{this.props.third}</p>
          </div>
        }
      />
    )
  }
}

export default TriLine;
import React from 'react';
import Line from './line';
import '../elements-css/headerLine.css';

class HeaderLine extends React.Component {
  render() {
    return (
      <Line
        main={
          <p className="man-header"><b>{this.props.children}</b></p>
        }
      />
    )
  }
}

export default HeaderLine;
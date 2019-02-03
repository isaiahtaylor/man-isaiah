import React from 'react';
import Line from './line';
import '../elements-css/headerLine.css';

class HeaderLine extends React.Component {
  render() {
    return (
      <Line
        main={
          <span className="man-header"><b>{this.props.children}</b></span>
        }
      />
    )
  }
}

export default HeaderLine;
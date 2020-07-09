import React from 'react';
import Line from './line';
import '../elements-css/inputLine.css';

const IndentedLine: React.FunctionComponent = ({ children }) => {
  return (
    <Line
      main={
        <span>
          <span className="indent"></span>
          <span className="indented-line">{children}</span>
        </span>
      }
    />
  )
}

export default IndentedLine;
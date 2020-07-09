import React from 'react';
import Line from './line';
import '../elements-css/headerLine.css';

interface HeaderLine {

}

const HeaderLine: React.FunctionComponent<HeaderLine> = ({ children }) => {

  return (
    <Line
      main={
        <span className="man-header"><b>{children}</b></span>
      }
    />
  )
}

export default HeaderLine;
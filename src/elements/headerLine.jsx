import React from 'react';
import Line from './line';
import '../elements-css/headerLine.css';

const HeaderLine = (props) => (
  <Line
    main={
      <p className="man-header"><b>{props.children}</b></p>
    }
  />
)

export default HeaderLine;
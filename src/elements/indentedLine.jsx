import React from 'react';
import Line from './line';
import '../elements-css/indentedLine.css';

const IndentedLine = (props) => (
  <Line
    main={
      <div>
        <p className="indent"></p>
        <p className="indented-line">{props.children}</p>
      </div>
    }
  />
)

export default IndentedLine;
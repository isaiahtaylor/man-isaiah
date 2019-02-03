import React from 'react';
import Line from './line';
import '../elements-css/triLine.css';

const TriLine = (props) => (
  <Line
    main={
      <div>
        <p className="first-third third">{props.first}</p>
        <p className="second-third third">{props.second}</p>
        <p className="third-third third">{props.third}</p>
      </div>
    }
  />
)

export default TriLine;
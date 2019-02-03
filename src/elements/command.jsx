import React from 'react';
import Line from './line';

const Command = () => (
  <Line
    main={
      <span>
        <code><b>web:~ user$</b> man isaiah-taylor</code>
        <span className="cursor">a</span>
      </span>
    }
  />
)

export default Command;
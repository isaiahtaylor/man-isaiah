import React from 'react';

import Line from './line';

const ManPage = () => (
  <Line
    main={
      <span>
        <code><b>web:~ user$</b> man isaiah-taylor</code>
        <span className="cursor">a</span>
      </span>
    }
  />
)

export default ManPage;
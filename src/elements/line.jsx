import React from 'react';
import '../elements-css/line.css'

const Line = (props) => (
  <div className="line">
    <p className="margin"><code>{props.margin}</code></p>
    <p className="main"><code>{props.main}</code></p>
  </div>
)

export default Line;
import React from 'react';
import '../elements-css/line.css'

interface Line {
  main?: JSX.Element | string;
  absolute?: boolean;
  margin?: JSX.Element | string;
}

const Line: React.FunctionComponent<Line> = ({ children, absolute, margin, main }) => {

  return (
    <span className={absolute ? "line-abs" : "line"} >
      <span className="margin"><code>{margin}</code></span>
      <span className="main"><code>{main}</code></span>
    </span>
  )
}

export default Line;
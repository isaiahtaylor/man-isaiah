import React from 'react';
import '../elements-css/line.css'

class Line extends React.Component {
  render() {
    return (
      <span className={this.props.absolute ? "line-abs" : "line"} >
        <span className="margin"><code>{this.props.margin}</code></span>
        <span className="main"><code>{this.props.main}</code></span>
      </span>
    )
  }
}

export default Line;
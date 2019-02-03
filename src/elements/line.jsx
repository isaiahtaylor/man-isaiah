import React from 'react';
import '../elements-css/line.css'

class Line extends React.Component {
  render() {
    return (
      <div className="line" >
        <p className="margin"><code>{this.props.margin}</code></p>
        <p className="main"><code>{this.props.main}</code></p>
      </div>
    )
  }
}

export default Line;
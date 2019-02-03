import React from 'react';
import IndentedLine from './indentedLine';

class Command extends React.Component {
  render() {
    return (
      <IndentedLine >
          <img alt="react_im" width={this.props.width} src={this.props.src} />
      </IndentedLine>
    )
  }
}

export default Command;
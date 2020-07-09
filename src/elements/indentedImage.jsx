import React from 'react';
import IndentedLine from './indentedLine';

class IndentedImage extends React.Component {
  render() {
    return (
      <IndentedLine >
          <img alt="react_im" width={this.props.width} src={this.props.src} />
      </IndentedLine>
    )
  }
}

export default IndentedImage;
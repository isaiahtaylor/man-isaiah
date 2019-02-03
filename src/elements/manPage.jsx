import React from 'react';
import Line from './line';
import TriLine from './triLine';
import HeaderLine from './headerLine';
import IndentedLine from './indentedLine';

const elements = [
  <Line />,
  <TriLine
    first={
      'ISAIAH TAYLOR(1)'
    }
    second={
      'Human Manual Page'
    }
    third={
      'ISAIAH TAYLOR(1)'
    }
  />,
  <Line />,
  <HeaderLine >NAME</HeaderLine>,
  <IndentedLine ><b>Isaiah Taylor</b> -- a coder</IndentedLine>
]

class ManPage extends React.Component {
  constructor(props) {
    super(props);
    this.props.elementCountCallback(elements.length);
  }

  render() {

    const { scrollIndex } = this.props;
    const renderElements = elements.slice(scrollIndex);

    return (
      <span>
        <Line absolute={true}
          main={
            <span>:<span className="control-cursor">a</span></span>
          }
        />
        {renderElements.map((element, i) => <span key={i}>{element}</span>)}
      </span>
    )
  }
}

export default ManPage;
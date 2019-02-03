import React from 'react';
import Line from './line';
import TriLine from './triLine';
import HeaderLine from './headerLine';
import IndentedLine from './indentedLine';
import IndentedImage from './indentedImage';

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
  <IndentedLine ><b>Isaiah Taylor</b> -- a software engineer</IndentedLine>,
  <Line />,
  <HeaderLine>SYNOPSIS</HeaderLine>,
  <IndentedLine><b>#include &lt;salary.h&gt;</b></IndentedLine>,
  <Line />,
  <IndentedLine><u>quality_software</u></IndentedLine>,
  <IndentedLine><b>isaiah_taylor</b>(<u>int</u> <u>pizza_slices</u>, <u>int</u> <u>coffee_cups</u>);</IndentedLine>,
  <Line />,
  <HeaderLine>DESCRIPTION</HeaderLine>,
  <IndentedLine>Hi, I'm Isaiah Taylor, a software engineer living in North Idaho.</IndentedLine>,
  <IndentedImage></IndentedImage>,
  <IndentedLine>Here you will find a some </IndentedLine>,
  <IndentedLine></IndentedLine>,
  <IndentedLine></IndentedLine>,
  <IndentedLine></IndentedLine>,

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
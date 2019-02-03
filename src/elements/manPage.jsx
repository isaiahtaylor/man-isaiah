import React from 'react';
import Line from './line';
import TriLine from './triLine';
import HeaderLine from './headerLine';
import IndentedLine from './indentedLine';

const ManPage = () => (
  <div>
    <Line />
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
    />
    <Line />
    <HeaderLine>
      NAME
    </HeaderLine>
    <IndentedLine>
      <b>Isaiah Taylor</b> -- a coder
    </IndentedLine>

  </div>
)

export default ManPage;
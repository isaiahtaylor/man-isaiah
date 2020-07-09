import React from 'react';
import IndentedLine from './indentedLine';

interface IndentedImage {
  width: number;
  src: string;
}

export default function IndentedImage({ width, src }: IndentedImage): JSX.Element {
  return (
    <IndentedLine >
      <img alt="react_im" width={width} src={src} />
    </IndentedLine>
  )
}
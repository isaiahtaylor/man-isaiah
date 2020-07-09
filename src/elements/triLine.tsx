import React from 'react';
import Line from './line';
import '../elements-css/triLine.css';

interface TriLine {
  first: JSX.Element | string;
  second: JSX.Element | string;
  third: JSX.Element | string;
}

export default function TriLine({ first, second, third }: TriLine): JSX.Element {
  return (
    <Line
      main={
        <span>
          <span className="first-third third">{first}</span>
          <span className="second-third third">{second}</span>
          <span className="third-third third">{third}</span>
        </span>
      }
    />
  )
}
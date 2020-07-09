import React from 'react';
import Line from './line';

interface Command {
  current: boolean;
  text: string;
}

export default function Command({ text, current }: Command): JSX.Element {
  return (
    <Line
      main={
        <span>
          <code><b>web:~ user$</b> {text}</code>
          {current && <span className={"cursor"}>a</span>}
        </span>
      }
    />
  )
}
import React from 'react';
import Line from './line';

interface Command {
  current: boolean;
  text: string;
  options?: string[];
}

export default function Command({ text, current, options }: Command): JSX.Element {
  let hasSingleOption = false;
  let cursorChar = 'a';
  let rest = '';
  if (options && options.length === 1 && options[0] !== text) {
    hasSingleOption = true;
    cursorChar = options[0][text.length];
    rest = options[0].slice(text.length + 1);
  }
  return (
    <Line
      main={
        <span>
          <code><b>web:~ user$</b> {text}</code>
          {current && <><span className={hasSingleOption ? "cursor-grey" : "cursor"}>{cursorChar}</span><span className="helper">{hasSingleOption ? rest : ''}</span></>}
        </span>
      }
    />
  )
}
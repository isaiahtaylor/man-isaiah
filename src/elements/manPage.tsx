import React from 'react';
import Line from './line';
import manPageContent from '../manPageContent';

interface ManPage {
  scrollIndex: number;
}
export default function ManPage({ scrollIndex }: ManPage): JSX.Element {
  const renderElements = manPageContent.slice(scrollIndex);

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
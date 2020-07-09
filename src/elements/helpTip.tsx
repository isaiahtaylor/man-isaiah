import React from 'react';
import '../elements-css/help-tip.css';

export default function HelpTip(): JSX.Element {
  return (
    <div className="tip">
      <p className="tip-p">
        To view my man page, simply press enter. For help, press Ctrl-C, type <b>help</b>, then press Enter.
        </p>
    </div>
  )
}

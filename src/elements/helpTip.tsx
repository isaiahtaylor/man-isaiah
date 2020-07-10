import React from 'react';
import '../elements-css/help-tip.css';

export default function HelpTip(): JSX.Element {
  return (
    <div className="tip">
      <p className="tip-p">
        To view my man page, simply press enter. For help, press Ctrl-c, type <b>help</b>, then press Enter.
        If this is confusing, <a href="https://www.linkedin.com/in/isaiahptaylor/">LinkedIn</a> might be better for you.
        </p>
    </div>
  )
}

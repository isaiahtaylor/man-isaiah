import React from 'react';
import Line from './line';

class LoginReadout extends React.Component {
  render() {
    return (
      <Line
        margin={
          '['
        }

        main={
          'Last login: None on ttys000'
        }
      />
    )
  }
}

export default LoginReadout;
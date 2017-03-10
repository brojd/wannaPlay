/* @flow */

import React from 'react';

type Props = {
  onLoginClick: Function
}

const LogInRequest = ({ onLoginClick }: Props) => {

  return (
    <div>
      You should log in to use the app.
      <button type="button" onClick={onLoginClick}>Log in</button>
    </div>
  )
};

export default LogInRequest;
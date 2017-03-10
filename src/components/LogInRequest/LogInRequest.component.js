import React from 'react';

const LogInRequest = ({ onLoginClick }) => {

  return (
    <div>
      You should log in to use the app.
      <button type="button" onClick={onLoginClick}>Log in</button>
    </div>
  )
};

export default LogInRequest;
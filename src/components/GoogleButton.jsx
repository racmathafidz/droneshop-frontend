import React from 'react';

import GoogleLogo from '../assets/images/Google/google.png';

export default function GoogleButton() {
  return (
    <div className="google-button">
      <div className="google-button-logo">
        <img src={GoogleLogo} alt="Google" />
      </div>
      <div className="google-button-text">
        <p>Continue with Google</p>
      </div>
    </div>
  );
}

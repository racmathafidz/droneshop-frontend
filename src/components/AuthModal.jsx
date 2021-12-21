import React from 'react';
import GoogleLogin from 'react-google-login';

import GoogleButton from './GoogleButton';

export default function AuthModal(props) {
  const { isOpen, setIsModalOpen, modalType, setModalType } = props;

  const googleSignInHandler = (response) => {
    console.log(response);
  };

  const googleSignupHandler = (response) => {
    console.log(response);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType('SignIn');
  };

  if (isOpen && modalType === 'SignIn') {
    return (
      <section className="auth-modal">
        <div className="signin-form-modal">
          <div className="auth-title-modal">
            <h1>Sign In</h1>
            <button type="button" onClick={closeModal}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={(renderProps) => (
              <GoogleButton onClick={renderProps.onClick} />
            )}
            buttonText="Continue with Google"
            onSuccess={googleSignInHandler}
            onFailure={googleSignInHandler}
            cookiePolicy="single_host_origin"
          />
          <p className="auth-or-text">
            <span className="auth-or-text-span">
              OR
            </span>
          </p>
          <form action="" className="auth-input-form">
            <label htmlFor="email" className="auth-label">
              Email Address
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email Address"
                className="auth-input"
              />
            </label>
            <label htmlFor="password" className="auth-label">
              Password
              <input
                type="text"
                name="password"
                id="password"
                placeholder="Password"
                className="auth-input"
              />
            </label>
            <input type="submit" value="Sign In" className="auth-button" />
          </form>
          <p className="auth-change">
            Don't have an account?
            {' '}
            <span onClick={() => setModalType('SignUp')}>Sign Up</span>
          </p>
        </div>
      </section>
    );
  }

  if (isOpen && modalType === 'SignUp') {
    return (
      <section className="auth-modal">
        <div className="signup-form-modal">
          <div className="auth-title-modal">
            <h1>Sign Up</h1>
            <button type="button" onClick={closeModal}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={(renderProps) => (
              <GoogleButton onClick={renderProps.onClick} />
            )}
            buttonText="Continue with Google"
            onSuccess={googleSignupHandler}
            onFailure={googleSignupHandler}
            cookiePolicy="single_host_origin"
          />
          <p className="auth-or-text">
            <span className="auth-or-text-span">
              OR
            </span>
          </p>
          <form action="" className="auth-input-form">
            <label htmlFor="name" className="auth-label">
              Full Name
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Full Name"
                className="auth-input"
              />
            </label>
            <label htmlFor="email" className="auth-label">
              Email Address
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email Address"
                className="auth-input"
              />
            </label>
            <label htmlFor="password" className="auth-label">
              Password
              <input
                type="text"
                name="password"
                id="password"
                placeholder="Password"
                className="auth-input"
              />
            </label>
            <input type="submit" value="Sign Up" className="auth-button" />
          </form>
          <p className="auth-change">
            Already have an account?
            {' '}
            <span onClick={() => setModalType('SignIn')}>Sign In</span>
          </p>
        </div>
      </section>
    );
  }

  return null;
}

import React from 'react';
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom';

import GoogleButton from '../components/GoogleButton';
import BrandLogo from '../assets/images/Header/Logo.svg';
import HeroImage from '../assets/images/Header/hero-image.png';

export default function SignInPage() {
  const googleSignInHandler = (response) => {
    console.log(response);
  };

  return (
    <section className="auth">
      <img src={HeroImage} alt="Drone" width="832px" className="auth-image" />
      <div className="signin-form">
        <Link to="/" className="auth-logo">
          <img src={BrandLogo} alt="Drone Shop ID" />
          <p>DroneShopID</p>
        </Link>
        <h1 className="auth-title">Sign In To Your Account</h1>
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
          <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </section>
  );
}

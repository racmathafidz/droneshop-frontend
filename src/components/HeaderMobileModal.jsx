import React from 'react';

import { Link } from 'react-router-dom';

export default function HeaderMobileModal(props) {
  const { isOpen, closeModal, isLogin } = props;
  console.log(isOpen);

  if (isOpen && !isLogin) {
    return (
      <section className="mobile-header-modal">
        <div className="mobile-header-modal-toggle">
          <button type="button" onClick={closeModal} className="mobile-header-modal-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mobile-header-modal-nav-link">
          <div className="mobile-header-modal-nav-link-list">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/gallery">Gallery</Link>
          </div>
          <div className="mobile-header-modal-nav-link-button">
            <Link to="/signin" className="nav-button-signin">Sign In</Link>
            <Link to="/signup" className="nav-button-register">Register</Link>
          </div>
        </div>
      </section>
    );
  }

  if (isOpen && isLogin) {
    return (
      <section className="mobile-header-modal">
        <div className="mobile-header-modal-toggle">
          <button type="button" onClick={closeModal} className="mobile-header-modal-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mobile-header-modal-nav-link">
          <div className="mobile-header-modal-nav-link-list">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/gallery">Gallery</Link>
          </div>
          <div className="mobile-header-modal-nav-link-button">
            <Link to="/cart">Cart</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/transaction">Transaction</Link>
            <button type="button" onClick={() => { console.log('Log Out'); }}>Log Out</button>
          </div>
        </div>
      </section>
    );
  }

  return null;
}

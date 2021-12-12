import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { cart } from '../json/cart.json';
import UserImage from '../assets/images/User/user.svg';
import BrandLogo from '../assets/images/Header/Logo.svg';

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(false);

  if (isLogin) {
    return (
      <section className="navigation">
        <Link to="/" className="nav-logo">
          <img src={BrandLogo} alt="Drone Shop ID" />
          <p>DroneShopID</p>
        </Link>
        <div className="nav-link">
          <Link to="/" className="nav-link-list">Home</Link>
          <Link to="/products" className="nav-link-list">Products</Link>
          <Link to="/gallery" className="nav-link-list">Gallery</Link>
        </div>
        <div className="nav-button">
          <div className="cart-button">
            <Link to="/cart" className="cart-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </Link>
            <div className="cart-popover">
              {/* <div className="cart-popover-items">
                <p className="cart-popover-empty">Your cart is empty</p>
              </div> */}
              {
                cart.filter((items, index) => index <= 2).map((items) => (
                  <Link to="/cart" className="cart-popover-items">
                    <div className="cart-popover-items-img-name">
                      <img src={items.images} alt={items.name} />
                      <p className="cart-popover-items-name">{items.name}</p>
                    </div>
                    <p className="cart-popover-items-price">{items.price}</p>
                  </Link>
                ))
              }
            </div>
          </div>
          <div className="profile-button">
            <Link to="/profile" className="profile-link">
              <img src={UserImage} alt="User" />
            </Link>
            <div className="profile-popover">
              <Link to="/profile">Profile</Link>
              <Link to="/transaction">Transaction</Link>
              <button type="button" onClick={() => console.log('Logout')}>Log out</button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="navigation">
      <Link to="/" className="nav-logo">
        <img src={BrandLogo} alt="Drone Shop ID" />
        <p>DroneShopID</p>
      </Link>
      <div className="nav-link">
        <Link to="/" className="nav-link-list">Home</Link>
        <Link to="/products" className="nav-link-list">Products</Link>
        <Link to="/gallery" className="nav-link-list">Gallery</Link>
      </div>
      <div className="nav-button">
        <Link to="/signin" className="nav-button-signin">Sign In</Link>
        <Link to="/signup" className="nav-button-register">Register</Link>
      </div>
    </section>
  );
}

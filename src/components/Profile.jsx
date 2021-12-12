import React from 'react';
import { Link } from 'react-router-dom';

import UserImage from '../assets/images/User/user.svg';

export default function Profile() {
  return (
    <section className="profile">
      <div className="profile-sidebar">
        <Link to="/profile" className="profile-active">Profile</Link>
        <Link to="/transaction">Transaction</Link>
      </div>
      <div className="profile-info">
        <div className="profile-info-container">
          <img src={UserImage} alt="User" />
          <div>
            <div className="user-detail">
              <p>Name</p>
              <h1>Racmat Hafidz</h1>
            </div>
            <div className="user-detail">
              <p>Email</p>
              <h1>rac.hafidz@gmail.com</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

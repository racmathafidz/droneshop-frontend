import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function DetailTransaction() {
  const navigate = useNavigate();

  return (
    <section className="transaction">
      <div className="transaction-sidebar">
        <Link to="/profile">Profile</Link>
        <Link to="/transaction" className="transaction-active">Transaction</Link>
      </div>
      <div className="detail-transaction-info">
        <button type="button" onClick={() => navigate(-1)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="detail-transaction-payment">
          <div className="payment-detail">
            <p>Payment method</p>
            <h1>Bank Jaog</h1>
          </div>
          <div className="payment-detail">
            <p>Payment code</p>
            <h1>121231234</h1>
          </div>
          <div className="payment-detail">
            <p>Total payment</p>
            <h1>Rp190.000.000</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

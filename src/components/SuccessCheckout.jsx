import React from 'react';
import { Link } from 'react-router-dom';

import PaymentImage from '../assets/images/Payment/payment.png';

export default function SuccessCheckout() {
  return (
    <section className="success-checkout">
      <div className="success-checkout-container">
        <div className="success-checkout-container-image">
          <img src={PaymentImage} alt="Waiting for payment" />
        </div>
        <h1>Waiting for payment</h1>
        <div className="payment-container">
          <div className="payment-method">
            <p>Payment method</p>
            <p className="payment-method-info">Jaog Bank</p>
          </div>
          <div className="payment-method">
            <p>Payment code</p>
            <p className="payment-method-info">121231234</p>
          </div>
          <div className="payment-method">
            <p>Total payment</p>
            <p className="payment-method-info">Rp190.000.000</p>
          </div>
        </div>
        <div className="check-payment-status">
          <Link to="/transaction/detail">Payment status</Link>
        </div>
      </div>
    </section>
  );
}

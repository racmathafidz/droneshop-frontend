import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { cart } from '../json/cart.json';
import getPriceNumber from '../utils/getPriceNumber';
import priceFormat from '../utils/priceFormat';

export default function Checkout() {
  const navigate = useNavigate();
  const [totalItems, setTotalItems] = useState();
  const [subtotal, setSubtotal] = useState();
  // const [shippingCosts, setShippingCosts] = useState();
  // const [shippingInsurance, setShippingInsurance] = useState();
  // const [totalPrice, setTotalPrice] = useState();
  const itemsPriceArray = [];
  const totalItemsArray = [];

  const getTotal = () => {
    cart.filter((items, index) => index <= 2).map((items) => totalItemsArray.push(items.amount));
    setTotalItems(totalItemsArray.reduce((total, num) => total + num));
    cart.filter((items, index) => index <= 2).map((items) => itemsPriceArray.push(items.amount * getPriceNumber(items.price)));
    setSubtotal(itemsPriceArray.reduce((total, num) => total + num));
  };

  const checkoutHandler = () => {
    navigate('/success');
  };

  useEffect(() => {
    getTotal();
  }, []);

  if (subtotal) {
    return (
      <section className="checkout">
        <div className="checkout-detail">
          <div className="checkout-items">
            <h1 className="checkout-title">Items</h1>
            {
              cart.filter((items, index) => index <= 2).map((items) => (
                <div className="checkout-product-list">
                  <div className="checkout-product-list-images-name">
                    <img src={items.images} alt={items.name} className="checkout-product-list-image" />
                    <div className="checkout-product-list-name">
                      <h1>{items.name}</h1>
                      <p>{`${items.amount} Items`}</p>
                    </div>
                  </div>
                  <div className="checkout-product-list-price">
                    <p>{items.price}</p>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="checkout-address">
            <h1 className="checkout-title">Address</h1>
            <form action="" className="checkout-input-form">
              <label htmlFor="fullName" className="checkout-label">
                Full Name
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className="checkout-input"
                />
              </label>
              <label htmlFor="password" className="checkout-label">
                Phone Number
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="checkout-input"
                />
              </label>
              <label htmlFor="fullAddress" className="checkout-label">
                Full Address
                <textarea
                  type="text"
                  rows={3}
                  name="fullAddress"
                  id="fullAddress"
                  className="checkout-input"
                />
              </label>
              <div className="save-address-button">
                <input type="submit" value="Save" />
              </div>
            </form>
          </div>
        </div>
        <div className="checkout-total">
          <h1 className="checkout-title">Total</h1>
          <div className="checkout-subtotal-items">
            <p>{`Total (${totalItems} Items)`}</p>
            <p className="checkout-subtotal-costs">{priceFormat(subtotal)}</p>
          </div>
          <div className="checkout-subtotal-items">
            <p>Shipping Costs</p>
            <p className="checkout-subtotal-costs">{priceFormat(totalItems * 31000)}</p>
          </div>
          <div className="checkout-subtotal-items">
            <p>Shipping Insurance</p>
            <p className="checkout-subtotal-costs">{priceFormat(totalItems * 10000)}</p>
          </div>
          <div className="checkout-total-pay">
            <p>Total</p>
            <p className="checkout-total-pay-costs">{priceFormat(subtotal + (totalItems * 31000) + (totalItems * 10000))}</p>
          </div>
          <button type="button" className="cart-checkout" onClick={checkoutHandler}>Pay</button>
        </div>
      </section>
    );
  }

  return null;
}

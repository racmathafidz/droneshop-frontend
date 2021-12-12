import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CartProductList from './CartProductList';
import { cart } from '../json/cart.json';
import getPriceNumber from '../utils/getPriceNumber';
import priceFormat from '../utils/priceFormat';

export default function Cart() {
  const navigate = useNavigate();
  const [subtotal, setSubtotal] = useState();
  const [totalItems, setTotalItems] = useState();
  const itemsPriceArray = [];
  const totalItemsArray = [];

  const getSubtotal = () => {
    cart.map((items) => totalItemsArray.push(items.amount));
    setTotalItems(totalItemsArray.reduce((total, num) => total + num));
    cart.map((items) => itemsPriceArray.push(items.amount * getPriceNumber(items.price)));
    setSubtotal(itemsPriceArray.reduce((total, num) => total + num));
  };

  const checkoutHandler = () => {
    navigate('/checkout');
  };

  useEffect(() => {
    getSubtotal();
  }, []);

  if (subtotal) {
    return (
      <section className="cart">
        <div className="cart-list">
          <h1 className="cart-list-title">Shopping Cart</h1>
          {
            cart.map((items) => (
              <CartProductList data={items} key={items.name} />
            ))
          }
        </div>
        <div className="cart-subtotal">
          <h1 className="cart-subtotal-title">Subtotal</h1>
          <div className="cart-subtotal-items">
            <p>{`Subtotal (${totalItems} Items)`}</p>
            <p id="subtotal">{priceFormat(subtotal)}</p>
          </div>
          <button type="button" className="cart-checkout" onClick={checkoutHandler}>Checkout</button>
        </div>
      </section>
    );
  }

  return null;
}

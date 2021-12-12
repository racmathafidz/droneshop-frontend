import React from 'react';

export default function CartProductList(props) {
  const { data } = props;

  return (
    <div className="cart-product-list">
      <div className="cart-product-list-images-name">
        <img src={data.images} alt={data.name} className="cart-product-list-image" />
        <div className="cart-product-list-name">
          <h1>{data.name}</h1>
          <div className="cart-product-list-action">
            <p>{`${data.amount} Items`}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
        </div>
      </div>
      <div className="cart-product-list-price">
        <p>{data.price}</p>
      </div>
    </div>
  );
}

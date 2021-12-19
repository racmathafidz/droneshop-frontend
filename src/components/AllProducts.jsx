import React from 'react';
import { Link } from 'react-router-dom';

import { products } from '../json/products.json';

export default function NewProducts() {
  return (
    <section className="all-products">
      <div className="all-products-title">
        <h1>All Products</h1>
        <p>
          All innovation with best quality.
          {' '}
          <br />
          Make every moment flying operation become unforgettable.
        </p>
      </div>
      <div className="all-products-list">
        {
          products
            .map((items) => (
              <div className="products-list" key={items.name}>
                <img src={items.images} alt={items.name} />
                <h1 className="products-name">{items.name}</h1>
                <h1 className="products-price">{items.price}</h1>
                <p className="products-description">{items.description}</p>
                <div className="products-button">
                  <Link to="/product">Go Now</Link>
                </div>
              </div>
            ))
        }
      </div>
    </section>
  );
}

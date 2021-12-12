import React from 'react';
import { Link } from 'react-router-dom';

import { products } from '../json/products.json';

export default function NewProducts() {
  return (
    <section className="new-products">
      <div className="new-products-title">
        <h1>New Products</h1>
        <p>
          New innovation, best quality than before.
          <br />
          Make every moment flying operation become unforgettable.
        </p>
      </div>
      <div className="new-products-list">
        {
          products
            .filter((items) => items.status === 'new')
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

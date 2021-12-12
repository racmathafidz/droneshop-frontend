import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './assets/styles/main.css';
import './assets/styles/header.css';
import './assets/styles/hero.css';
import './assets/styles/content.css';
import './assets/styles/benefit.css';
import './assets/styles/video.css';
import './assets/styles/products.css';
import './assets/styles/gallery.css';
import './assets/styles/testimonial.css';
import './assets/styles/footer.css';
import './assets/styles/modal.css';
import './assets/styles/auth.css';
import './assets/styles/google-button.css';
import './assets/styles/detail-product.css';
import './assets/styles/cart.css';
import './assets/styles/checkout.css';
import './assets/styles/success-checkout.css';
import './assets/styles/profile.css';
import './assets/styles/transaction.css';
import './assets/styles/not-found.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

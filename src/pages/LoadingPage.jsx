import React from 'react';

import BrandLogo from '../assets/images/Header/Logo.svg';

export default function LoadingPage() {
  return (
    <section className="loading">
      <img src={BrandLogo} alt="Brand Logo" />
    </section>
  );
}

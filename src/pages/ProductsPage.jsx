import React from 'react';
import { useSelector } from 'react-redux';

import LoadingPage from './LoadingPage';
import Header from '../components/Header';
import AllProducts from '../components/AllProducts';
import Footer from '../components/Footer';

export default function ProductsPage() {
  const State = useSelector((state) => state);

  if (State.ProductsData.ProductsData) {
    return (
      <>
        <Header />
        <AllProducts ProductsData={State.ProductsData.ProductsData} />
        <Footer />
      </>
    );
  }

  return (
    <LoadingPage />
  );
}

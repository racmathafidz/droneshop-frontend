import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import LoadingPage from './LoadingPage';
import Header from '../components/Header';
import DetailProduct from '../components/DetailProduct';
import Footer from '../components/Footer';

export default function DetailProductPage() {
  const { id } = useParams();
  const [productData, setProductData] = useState();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/product/${id}`)
      .then((response) => {
        setProductData(response.data);
      });
  }, []);

  if (productData) {
    return (
      <>
        <Header />
        <DetailProduct ProductData={productData} />
        <Footer />
      </>
    );
  }

  return (
    <LoadingPage />
  );
}

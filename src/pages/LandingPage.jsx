import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Benefit from '../components/Benefit';
import Video from '../components/Video';
import NewProducts from '../components/NewProducts';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <Content />
      <Benefit />
      <Video />
      <NewProducts />
      <Testimonial />
      <Footer />
    </>
  );
}

import React from 'react';
import Navber from './components/header/navbar/navbar';
import Slider from './components/header/slider/slider';
import About from './components/contant/product/about';
import Offer from './components/contant/product/offer';
import StopSection from './components/etc/stop_section';
import Footer from './components/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './components/responsive.css';

function App() {
  return (
    <div className="App">
      <Navber />
      <Slider />
      <StopSection />

      <About />
      <StopSection />

      <Offer />
      <StopSection />

      <Footer />
    </div>
  );
}

export default App;
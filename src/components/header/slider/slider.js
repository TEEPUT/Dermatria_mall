import React from 'react';
import './slider.css';
import AOS from 'aos';


const SliderSection = () => {
  return (
    <section className="slider_section position-relative">
      <div className="slider_bg_box">
        <img src={process.env.PUBLIC_URL + '/images/main_001.png'} alt="" />
      </div>
    </section>
  );
};

export default SliderSection;

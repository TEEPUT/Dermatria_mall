import React from 'react';
import Navber from './header/navbar/navbar';
import Slider from './header/slider/slider';
import About  from './contant/about/about';
import StopSection from './etc/stop_section';

function App() {
  return (
    <div className="App">
      <Navber />
      <Slider />
      <StopSection />

      <About />
    </div>
  );
}

export default App;
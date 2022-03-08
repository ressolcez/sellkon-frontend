import React from 'react'
import Products from '../components/Products';
import Slider from '../components/Slider';
import Topbar from '../components/Topbar'

const Home = () => {
  return (
    <div>
      <Topbar />
      <Slider />
      <Products/>
    </div>
  );
}

export default Home
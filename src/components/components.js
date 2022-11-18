import React from 'react';
import Header from './Header/index';
import NewArrival from './Arrivals';
import Slider from './Slider';
import About from './About';
import Explore from './Explore';
import Footer from './Footer';
import SeenIn from './SeenIn';
import RecommendedVideos from './RecommendedVideos';
import Shop from './Shop';
function components() {
  return (
    <div>
      <Header />
      <Slider />
      <NewArrival />
      <About />
      <Explore />
      <Shop />
      <RecommendedVideos />
      <SeenIn />
      <Footer />
    </div>
  );
}

export default components;

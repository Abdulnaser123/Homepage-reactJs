import React from 'react';
import NewArrival from '../Arrivals';
import Slider from '../Slider';
import About from '../About';
import Explore from '../Explore';
import SeenIn from '../SeenIn';
import RecommendedVideos from '../RecommendedVideos';
import Shop from '../Shop';
function Homepage() {
  return (
    <div>
      <Slider />
      <NewArrival />
      <About />
      <Explore />
      <Shop />
      <RecommendedVideos />
      <SeenIn />
    </div>
  );
}

export default Homepage;

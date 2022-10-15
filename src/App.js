
import './App.css';
import React from "react"
import Header from "./components/Header/index";
import NewArrival from "./components/Arrivals";
import Slider from "./components/Slider";
import About from "./components/About";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import SeenIn from "./components/SeenIn";
import RecommendedVideos from "./components/RecommendedVideos";
import Shop from "./components/Shop";

const App = ( ) => {
  return (
    <div className='MainWrapper'>
      <Header/>
      <Slider/>
      <NewArrival/>
      <About/>
      <Explore/>
      <Shop/>
      <RecommendedVideos/>
      <SeenIn/>
      <Footer/> 
    </div>
  );
};

export default App;

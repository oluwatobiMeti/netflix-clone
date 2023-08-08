import React from 'react'
import Hero from "./Hero";
import Service from './Service';
import "./home.css";
function Home() {
  return (
    <div className='home'>
      <Hero/>
      <Service/>
    </div>
  )
}

export default Home;

import React, { useContext, useEffect, useState } from 'react'
import "./hero.css"
// import instance from '../../Axios';
// import requests from '../../Request';
import { ShowMovieContext } from '../../ShowMovieContent';

function Hero() {
  const {movie} = useContext(ShowMovieContext);
    const trancate = (string, n) => {
        return ((string?.length > n)? string.substr(0, n - 1) + "..." : string );
    }
    const style = {
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center"
    }
  return (
    <header className='banner' style={style}>
      <div className="banner__content">
        <h1 className="banner__title">{movie?.name}</h1>
        <div className="banner__btns">
          <button className="banner__btn">play</button>
          <button className="banner__btn">playList</button>
        </div>
      </div>
      <h1 className="banner__description">
        {trancate(movie?.overview, 150)}
      </h1>
      <div className="banner--fadeButton"/>
    </header>
  )
}

export default Hero

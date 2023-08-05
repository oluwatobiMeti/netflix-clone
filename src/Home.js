import React, { useState, useEffect } from 'react'
import Nav from './component/navbar/Nav';
import Hero from './component/hero/Hero';
import Rows from './component/Rows/Rows';
import { ShowMovieContext } from './ShowMovieContent';
import instance from './Axios';
import requests from './Request';
export default function Home() {
  const [movie, setMovie] = useState([]);
  const [MovieId, setMovieId] = useState(0);
  const [fetchUrl, setFetchUrl] = useState(requests.fetchNetflixOriginals)
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      console.log(request);
      setMovie(request.data.results[MovieId])
    }
    fetchData();
  }, [MovieId]);
  console.log(movie);
  console.log(MovieId);
  return (
    <ShowMovieContext.Provider value={{MovieId, setMovieId, movie, setMovie, fetchUrl, setFetchUrl}}>
    <div className='home'>
      <Nav/>
      <Hero/>
      <Rows/>
    </div>
    </ShowMovieContext.Provider>
  )
}

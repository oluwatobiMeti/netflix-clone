import React from 'react'
import Row from './Row';
import "./rows.css";
import requests from '../../Request';
function Rows() {
  return (
    <div>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} islargeRow={true} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default Rows

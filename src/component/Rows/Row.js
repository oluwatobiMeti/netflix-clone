import React, { useContext, useEffect, useState } from 'react'
import instance from '../../Axios';
import { ShowMovieContext } from '../../ShowMovieContent';

function Row({title, fetchUrl, islargeRow}) {
    const [movies, setMovies] = useState([]);
    const { setMovieId, setFetchUrl } = useContext(ShowMovieContext);
    const baseURL = "https://image.tmdb.org/t/p/original/"
    useEffect(() => {
        async function FetchData() {
                const request = await instance.get(fetchUrl);
                console.log(request.data.results);
                setMovies(request.data.results)
                return request;
               }
       FetchData();
    }, [fetchUrl]);
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div onClick={() => setFetchUrl(fetchUrl)} className='row__movies'>
      {movies.map((Movie, index) => {
        return(<img onClick={() => setMovieId(index)} key={Movie.key} className={`row__movie ${islargeRow && "largeRow"}`} src={`${baseURL}${islargeRow ? Movie?.poster_path : Movie?.backdrop_path}`} alt={Movie?.name}/>)})}
      </div>
    </div>
  )
}

export default Row

import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const {currentData, loading} = useGlobalContext()  

  if(loading){
    return <div className="loading" />
  }
  return (
    <div id="movies">
      {currentData.map((item) =>(
        <div key={item.imdbID} className="movie_box">
          <Link to={`/movies/${item.imdbID}`}>
          <img className="movie_poster" src={item.Poster !== "N/A" ? item.Poster : url} alt={item.Title}/>
          <div className="movie_details">
              <div className="movie_title">{item.Title}</div>
              <div className="movie_year">{item.Year}</div>
          </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Movies

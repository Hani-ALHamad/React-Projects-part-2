import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'

const SingleMovie = () => {
  const { id } = useParams();
  const [singleData, changeSingleData] = useState([])
  
  const getSingle = async () => {
    const response = await fetch(API_ENDPOINT + `i=${id}`)
    const data = await response.json()
    changeSingleData(data)
  }
  
  useEffect(() =>{
    getSingle()
  }, [])

  if(singleData.length === 0){
    return (
      <div className="loading"/>
    )
  }

  return (
    <div className="home">
      <div id="single">
        <img id="single_poster" src={singleData.Poster} alt={singleData.Title}/>
        <div>
          <h2>{singleData.Title}</h2>
          <div id="single_plot">{singleData.Plot}</div>
          <div id="single_year">{singleData.Year}</div>
          <h2>{singleData.Error}</h2>
          <Link id="single_back" to="/">back to movies</Link>
        </div>
      </div>
    </div>
  )
}

export default SingleMovie

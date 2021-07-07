import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'

//! my key: aT1WSDjyhjcUSUiGKNJdVXru6JbD41lUQvDuv64fqd0

// const clientID = `?client_id=${process.env.aT1WSDjyhjcUSUiGKNJdVXru6JbD41lUQvDuv64fqd0}`
// const searchUrl = `https://api.unsplash.com/search/photos?client_id=aT1WSDjyhjcUSUiGKNJdVXru6JbD41lUQvDuv64fqd0&page=${page}&query=${search}`
const mainUrl = `https://api.unsplash.com/photos/random?client_id=aT1WSDjyhjcUSUiGKNJdVXru6JbD41lUQvDuv64fqd0&count=10`

function App() {
  const [data, changeData] = useState([])
  const [page, changePage] = useState(1)
  const [search, changeSearch] = useState("")
  
  const getData = async () => {
    if(search === ""){
      const response = await fetch(mainUrl)
      const items = await response.json()
      changeData(data.concat(items))
    } else {
      const response = await fetch(`https://api.unsplash.com/search/photos?client_id=aT1WSDjyhjcUSUiGKNJdVXru6JbD41lUQvDuv64fqd0&page=${page}&query=${search}`)
      const items = await response.json()
      changeData(data.concat(items.results))
      changePage(page + 1)
    } 
  }

  useEffect(() => {
    getData()
  }, [])

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY === document.body.offsetHeight){
      getData()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(search !== ""){
      data.length = 0
    }
    getData()
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <main>
    <div id="box">
        <form onSubmit={handleSubmit}>
          <input id="text_input" value={search} onChange={e => changeSearch(e.target.value)} placeholder="Search" type="text" />
          <button id="submit_input" onClick={() => changePage(1)}><FaSearch /></button>
        </form>
      <div id="items_container">
      {data.map((item, index) =>(
        <Photo key={item.id + index}  item={item} index={index} />
      ))}
      </div>
      </div>
      <h2>Loading...</h2>
    </main>
  )
}

export default App

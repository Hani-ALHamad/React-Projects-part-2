import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'

function App() {
  const {data, loading} = useFetch()
  const [currentPage, changeCurrentPage] = useState(0)
  const [filteredData, changeFilteredData] = useState([])
  
  
  useEffect(() =>{
    for (let index = 10; index <= data.length; index = index + 10) {
      filteredData.push(data.slice(index - 10, index))
    }
  }, [data, filteredData])



  const handlePrev = () =>{
    if (currentPage !== 0) {
      changeCurrentPage(currentPage - 1)
    } else {
      changeCurrentPage(filteredData.length - 1)
    }
  }

  const handleNext = () => {
    if (currentPage + 1 !== filteredData.length) {
      changeCurrentPage(currentPage + 1)
    } else {
      changeCurrentPage(0)
    }
  }
  if (loading) {
    return (
      <main>
        <h2>Loading...</h2>
        <div id="line" />
      </main>
    )
  }
  return (
    <main>
      <h2>Pagination</h2>
      <div id="line"/>
      <div id="followers_container">
        {filteredData[currentPage].map((item) => (
          <Follower key={item.id} item={item}/>
        ))}
      </div>
      <div id="paginate_container">
        <button className="paginate_next" onClick={handlePrev}>Prev</button>
        {filteredData.map((item, index) =>(
          <button key={index} className={currentPage === index ? "paginate active" : "paginate"} onClick={() => changeCurrentPage(index)}>
            {index + 1}
          </button>
        ))}
        <button className="paginate_next" onClick={handleNext}>Next</button>
      </div>
    </main>
  )
}

export default App

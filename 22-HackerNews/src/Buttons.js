import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const { handleAdd , data } = useGlobalContext()
  return (
    <div id="buttons">
      {!data.isLoading 
      ?
      <>
        <button onClick={() => handleAdd("sub")} className="button">Prev</button>
        <div id="buttons_text">{data.currentPage + 1} of {data.pagesCount}</div>
        <button className="button" onClick={() => handleAdd("add")}>Next</button>
      </>
      :
      <>
        <button className="button not-allowed">Prev</button>
        <div id="buttons_text">{data.currentPage + 1} of {data.pagesCount}</div>
        <button className="button not-allowed">Next</button>
      </>
    }
    </div>
  )
}

export default Buttons

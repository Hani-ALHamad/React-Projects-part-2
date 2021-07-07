import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const {search, changeSearch, errorMessage} = useGlobalContext()
  return (
    <form onSubmit={e => e.preventDefault()}>
      <input id="search" type="text" value={search} onChange={e => changeSearch(e.target.value)}/>
      <div id="search_error">{errorMessage}</div>
    </form>
  )
}

export default SearchForm

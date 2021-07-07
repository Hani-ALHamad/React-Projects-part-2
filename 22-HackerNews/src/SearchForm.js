import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const {data, handleSearch} = useGlobalContext()
  return <form onSubmit={e => e.preventDefault()}>
    <input type="text"  value={data.search} onChange={e => handleSearch(e.target.value)}/>
  </form>
}

export default SearchForm

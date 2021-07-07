import React, { useContext, useEffect, useReducer } from 'react'

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'
import reducer from './reducer'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {
  stories: [],
  search: "react",
  pagesCount: 0,
  currentPage: 0,
  isLoading: false
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState)

  const handleSearch = (e) => {
    dispatch({ type: HANDLE_SEARCH, search: e})
    dispatch({ type: HANDLE_PAGE, currentPage: 0 })
  }

  const handleAdd = (e) => {
    if(e === "add"){
      if(data.pagesCount - 1 === data.currentPage) {
        dispatch({ type: HANDLE_PAGE, currentPage: 0})
      } else {
        dispatch({ type: HANDLE_PAGE, currentPage: data.currentPage + 1 })
      }
    } else {
      if(data.currentPage === 0){
        dispatch({ type: HANDLE_PAGE, currentPage: data.pagesCount - 1 })
      } else {
        dispatch({ type: HANDLE_PAGE, currentPage: data.currentPage - 1 })
      }
    }
  }

  const handleRemove = (e) => {
    dispatch({ type: REMOVE_STORY, id: e })
  }
  const handleStories = async () => {
    dispatch({type: SET_LOADING, isLoading: true})
    const response = await fetch(`${API_ENDPOINT}query=${data.search}&page=${data.currentPage}`)
    const stories = await response.json()
    dispatch({ type: SET_STORIES, stories: stories.hits, pagesCount: stories.nbPages})
    dispatch({ type: SET_LOADING, isLoading: false })
  }

  useEffect(() => {
    handleStories()
  }, [data.search, data.currentPage])

  return <AppContext.Provider value={{
    handleAdd,
    handleSearch,
    handleRemove,
    data
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

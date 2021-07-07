import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=de3f530e&`
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [search, changeSearch] = useState("batman")
  const [currentData, changeCurrentData] = useState([])
  const [loading, changeLoading] = useState(false)
  const [errorMessage, changeErrorMessage] = useState("")

  useEffect(() => {
    const getData = async () => {
      changeLoading(true)
      const response = await fetch(API_ENDPOINT + `s=${search}`)
      const data = await response.json()
      changeLoading(false)
      
      if(data.Response === "True"){
        changeErrorMessage("")
        changeCurrentData(data.Search)
      } else {
        changeErrorMessage(data.Error)
      }
    }
    
    getData()
  },[search])

  return <AppContext.Provider 
  value={{
    search, 
    changeSearch, 
    loading, 
    currentData,
    errorMessage
    }}>
    {children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

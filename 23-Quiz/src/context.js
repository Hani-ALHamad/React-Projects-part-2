import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

// const table = {
//   sports: 21,
//   history: 23,
//   politics: 24,
// }

const API_ENDPOINT = 'https://opentdb.com/api.php?'

// const url = ''

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [setup, changeSetup] = useState(true)
  const [number, changeNumber] = useState(10)
  const [category, changeCategory] = useState(21)
  const [difficulty, changeDifficulty] = useState("easy")
  const [data, changeData] = useState([])
  const [isLoading, changeIsLoading] = useState(false)
  const [shuffled, changeShuffled] = useState([])
  const [count, changeCount] = useState(0)
  const [correct, changeCorrect] = useState(0)
  const [modal, changeModal] = useState(false)

  const handleStart = async () => {
    try {
      changeIsLoading(true)
      changeSetup(false)
      const response = axios.get(`${API_ENDPOINT}amount=${number}&category=${category}&difficulty=${difficulty}&type=multiple&encode=url3986`)
      const items = await response
      changeData(items.data.results)
      let list = items.data.results[0].incorrect_answers.slice(0,3)
      list.push(items.data.results[0].correct_answer)
      // shuffling the list
      for (let index = 0; index < list.length; index++) {
        const i = Math.floor(Math.random() * list.length + 1)
        const temp = list[index]
        list[index] = list[i]
        list[i] = temp
      }
      changeShuffled(list.filter((item) => item !== undefined))
    }
    catch (error){
      changeData(`${ API_ENDPOINT }amount=${ number }&category=${ category }&difficulty=${ difficulty }&type=multiple&encode=url3986`)
    }
    changeIsLoading(false)
  }

  const handleAnswer = (e) =>{
      if (e === unescape(data[count].correct_answer)) {
        changeCorrect(correct + 1)
      }
      
    if (count < number - 1) {
      changeCount(count + 1)
    } else {
      changeModal(true)
      changeCount(count)
    }
  }



  useEffect(() => {
    if(data.length !== 0){
      let list = data[count].incorrect_answers.slice(0, 3)
      list.push(data[count].correct_answer)
      // shuffling the list
      for (let index = 0; index < list.length; index++) {
        const i = Math.floor(Math.random()* list.length+1)
        const temp = list[index]
        list[index] = list[i]
        list[i] = temp
      }
      changeShuffled(list.filter((item) => item !== undefined))
    }
  }, [count])

  useEffect(() => {
    changeModal(false)
    changeData([])
    changeCount(0)
    changeCorrect(0)
  }, [setup])

  return <AppContext.Provider value={{
    setup,
    changeSetup,
    number,
    changeNumber,
    category,
    changeCategory,
    difficulty,
    changeDifficulty,
    data,
    isLoading,
    handleStart,
    shuffled,
    count,
    correct,
    handleAnswer,
    modal,
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

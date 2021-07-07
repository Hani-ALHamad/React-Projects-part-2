import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const {
    number, 
    changeNumber, 
    category, 
    changeCategory, 
    difficulty, 
    changeDifficulty,
    handleStart
  } = useGlobalContext()

  return (
    <div id="setup">
      <h2>Setup Quiz</h2>
      <div className="input_container">
        <label className="input_label">Number Of Questions</label>
        <input 
          type="number" 
          className="input_input" 
          value={number} 
          onChange={e => changeNumber(e.target.value)}
        />
      </div>
      <div className="input_container">
        <label className="input_label">Category</label>
        <select 
          className="input_input" 
          value={category}
          onChange={e => changeCategory(e.target.value)}
        >
          <option value="21">sports</option>
          <option value="23">history</option>
          <option value="24">politics</option>
        </select>
      </div>
      <div className="input_container">
        <label className="input_label">Select Difficulty</label>
        <select 
          className="input_input"
          value={difficulty}
          onChange={e => changeDifficulty(e.target.value)}
        >
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </select>
      </div>
      <button onClick={handleStart} id="setup_button">Start</button>
    </div>
  )
}

export default SetupForm

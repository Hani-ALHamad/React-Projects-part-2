import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
function App() {
  const { isLoading, setup, count, shuffled, data, correct, handleAnswer, modal, changeSetup} = useGlobalContext()
  if(isLoading){
    return <main>
      <Loading />
        </main>
  }

  if(setup) {
    return (
      <main>
        <SetupForm />
      </main>
    )
  }
  // to handle API errors:
  if(typeof data === "string"){
    return (
      <main>
        <h2>API error</h2>
        <p>Please try another option</p>
        <p>requested API: <a href={data} target="_blank" rel="noreferrer">{data}</a></p>
        <button className="modal_button" onClick={() => changeSetup(true)}>Go Back</button>
      </main>
    )
  }

  return (
    <main>
      <div id="question">
        <div id="counter">Correct Answers : {correct}/{count}</div>
        <h2>{unescape(data[count].question)}</h2>
        <div id="answers">
          {shuffled.map((item) =>(
            <div className="answer" onClick={e => handleAnswer(e.target.getAttribute("data"))} key={item} data={unescape(item)}>{unescape(item)}</div>
          ))}
        </div>
        <button className="next_question" onClick={e => handleAnswer(e.target.getAttribute("data"))}  data="">Next Question</button>
      </div>
      {modal ? <Modal /> : <></>}
    </main>
  )
}

export default App

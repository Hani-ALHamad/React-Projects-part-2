import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const {correct, count, changeSetup} = useGlobalContext()

  return (
    <div id="modal_container">
      <div id="modal_box">
        <h2>Congrats!</h2>
        <div id="modal_text">You answered {((correct/(count+1))*100).toFixed(0)}% of questions correctly</div>
        <button onClick={() => changeSetup(true)} className="modal_button">Play Again</button>
      </div>
    </div>
  )
}

export default Modal

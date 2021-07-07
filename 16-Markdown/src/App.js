import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [currentText, changeCurrentText] = useState("# markdown preview")

  return (
  <main>
    <form>
      <textarea value={currentText} onChange={(e) => changeCurrentText(e.target.value)}/>
    </form>
    <ReactMarkdown className="text">
      {currentText}
    </ReactMarkdown>
  </main>
  )
}

export default App

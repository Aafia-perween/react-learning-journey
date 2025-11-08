import React from 'react'
import { useState } from 'react'

const App = () => {
const [title, settitle] = useState('')

  const submitHandler =(e)=>{
    e.preventDefault()
    console.log('form submitted by' , title);
    settitle('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
         submitHandler(e)
      }}>
        <input type="text"
         placeholder='enter your name'
         value={title}
         onChange={(e)=>{
          settitle(e.target.value);
         }}
         />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
import React, { useEffect, useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(100)
  
  useEffect(function(){
    console.log('use effect is running...');
  },[num])

  return (
    <div>
      <h1>value of num is {num}</h1>
      <h1>value of num 2 is {num2}</h1>
      <button onClick={()=>{
         setnum(num+1)
      }}
      onDoubleClick={()=>{
        setnum2(num2+10)
      }}
      >click</button>
    </div>
  )
}

export default App
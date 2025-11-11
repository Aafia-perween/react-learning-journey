import React from 'react'

const App = () => {


  localStorage.setItem('student','Aafia')
  localStorage.setItem('age','19')
  localStorage.removeItem('age')

  const user={
    username:'Aafia',
    age:'18',
    city:'Kolkata'
  }

  localStorage.setItem('user',JSON.stringify(user))

  
  return (
    <div>App</div>
  )
}


/* 
🧠 LOCAL STORAGE METHODS (Quick Note)

1️⃣ localStorage.setItem("key", value) → Save data
2️⃣ localStorage.getItem("key") → Get data
3️⃣ localStorage.removeItem("key") → Remove one item
4️⃣ localStorage.clear() → Remove all items

💡 localStorage only stores data as strings.
   ➤ To store objects/arrays → JSON.stringify(obj)
   ➤ To read them back → JSON.parse(str)

Example:
localStorage.setItem("user", JSON.stringify({ name: "Aafia" }));
const user = JSON.parse(localStorage.getItem("user"));
*/


export default App
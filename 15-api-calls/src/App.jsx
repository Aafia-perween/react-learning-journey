import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
const [data, setdata] = useState([])

 async function getData(){
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await response.json()
    console.log(data);
  }

  const cuteData =async()=>{
    const {data}= await axios.get('https://jsonplaceholder.typicode.com/albums')
    console.log(data);
  }

  const getAlbum =async ()=>{
    const res =await axios.get('https://picsum.photos/v2/list')
    setdata(res.data);
  }
  return (
    <div>
      <button onClick={getData}>users</button>
      <button onClick={cuteData}>Albums</button>
      <button onClick={getAlbum}>photos</button>
      <div>
        {data.map(function(elem,idx){
          return <h3>Hello ,{elem.author} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App
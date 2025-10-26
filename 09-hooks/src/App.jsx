import React, { useState } from "react";

const App = () => {
  /*const [a, setA] = useState(10);
  const [username, setUsername] = useState("Aafia");

  // Function to change the value of 'a'
  function ChangeA() {
    setA(a + 1);
    setUsername("Nazaf");
  }

  // with arrow function
   const changeA = () => {
    setA(a + 1); // increase the value by 1
  };*/

  const [num, setnum] = useState(0);

  function increaseNum(){
    setnum(num+1);
  }

  function decreaseNum(){
    setnum(num-1);
  }

  function jump5(){
    setnum(num+5)
  }
  function reset(){
    setnum(0)
  }


  return (
    /*<div>
      <h1>
        Value of num is {a} <br />
        value of user is {username}
      </h1>
      <button onClick={ChangeA}>Click</button>
    </div>*/

    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jump5}>jump by 5</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default App;

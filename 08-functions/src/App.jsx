import React from "react";

const App = () => {
  const btnClicked = () => {
    console.log("button is clicked");
  };

  const mouseEnter = () => {
    console.log("mouse entered");
  };
  return (
    <div>
      <h1>Hello Sarthak</h1>

      <button onMouseOver={mouseEnter} onClick={btnClicked}>
        change user
      </button>
      <button
        onClick={function () {
          console.log("hello guys");
        }}
      >
        Click me
      </button>

      <input
        onChange={function (elem) {
          console.log(elem.target.value);
        }}
        type="text"
        placeholder="Enter Name"
      />

      <div
        className="box"
        onMouseMove={(elem) => {
          console.log(elem.clientX);
        }}
      ></div>
    </div>
  );
};

export default App;

import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const user = [
    {
      img: "https://i.pinimg.com/736x/ef/97/25/ef972507d073f998e8091814528e86d1.jpg",
      intro: "",
      color:"black",
      tag: "Satisfied",
    },
    {
      img: "https://i.pinimg.com/1200x/0e/16/99/0e16994cc4be6169daadd8101a1b4eab.jpg",
      intro: "",
      color:"blue",
      tag: "Underserved",
    },
    {
      img: "https://i.pinimg.com/1200x/55/18/87/551887f865fe94c481ea9c43daf5e47e.jpg",
      intro: "",
      color:"lightseagreen",
      tag: "UnderBanked",
    },
    {
      img: "https://i.pinimg.com/1200x/67/6e/48/676e489b3b629c8def5cc5214eae6305.jpg",
      intro: "",
      color:"crimson",
      tag: "Unrealastic",
    },
        {
      img: "https://i.pinimg.com/736x/b0/35/b2/b035b21461062dc858740081326a3839.jpg",
      intro: "",
      color:"pink",
      tag: "Thankyou",
    },
  ];
  return (
    <div>
      <Section1 user={user}/>
      <Section2 />
    </div>
  );
};

export default App;

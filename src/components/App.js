import React from 'react'
import { useState } from 'react';
import '../styles/App.css';
const App = () => {
  const[count, setCount]= useState(1);
  const[color, setColor]= useState("normal");
  
  const increment=()=>{
      setCount(count+1);
      colorChange(count+1);
  }
  const decrement=()=>{
    if(count>1)
      setCount(count-1);

    colorChange(count-1);
  }

  function colorChange(count){
    if(count%3==0){
      setColor("fizz");
    }
    else if(count%5==0){
      setColor("buzz")
    }
    else if(count%15==0){
      setColor("fizzbuzz")
    }
    else{
      setColor("normal")
    }
  }
  return (
    <div id="main">
      <button onClick={increment} id="increment">increment</button>
        <div className={color} >
            {count}
        </div>
        <button onClick={decrement} id="decrement">decrement</button>
    </div>
  )
}


export default App;

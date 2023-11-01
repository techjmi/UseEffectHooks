import './App.css';
import React, { useEffect, useState } from 'react';


export default function App() {
 const [num, setNum]= useState(0);
   const [nums, setNums]= useState(0);
  useEffect(()=>{
     alert("click msg") //case 1
  },[num])
  const click=()=>{
    setNum(num+1)
     // alert("click msg") 
  }
  const clicks=()=>{
    setNums(nums+1)
      alert("click msg") //case 2
  }
  return (
    
   <>
     <button onClick={click}>UseEffect{num}</button>
     <br />
      <button onClick={clicks}>click me{nums}</button>
   </>
  )
}

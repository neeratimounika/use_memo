import React, { useMemo, useState } from 'react'

const App = () => {
  const [counter,setCounter] = useState(1);

  let num1=2;
  let num2= 30;

  let sum = useMemo(()=>{
    return num1+num2

  },[num1,num2])

  return (
    <>
      <button onClick={()=>{
        setCounter(counter+1);
      }}> Update Counter </button>

      <h1>Counter :{counter}</h1>
      <p>Sum :{sum} </p>
    </>
  )
}

export default App

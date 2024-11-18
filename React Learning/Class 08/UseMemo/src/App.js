import React, { useMemo, useState } from 'react';
import './App.css';


function App() {

  const [count, setCount] = useState(0);
  const [minus, setMinus] = useState(100);

  const multiplication = useMemo(  function Mult() {

    console.log("-----------------------------");
    return count * 10
  }, [count]
)

  function Add() {
    setCount(count + 1)
  }

  function Sub() {
    setMinus(minus - 1)
  }
  return (

    <>
     {multiplication}

      <h1 className='text-primary'>{count}</h1>
      <button type='button' className='btn btn-primary' onClick={Add}>Add</button>


      <h1 className='text-danger'>{minus}</h1>
      <button type='button' className='btn btn-danger' onClick={Sub}>Subtract</button>


    </>
  );
}

export default App;

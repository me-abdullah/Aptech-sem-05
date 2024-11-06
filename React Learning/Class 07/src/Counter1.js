import React from 'react';
import useCounter from './useCounter';
function Counter1() {

    const [count, Increament, Decreament] = useCounter(10);
  return (
    <>
<h1>{count}</h1>
    <button type='button' className='btn btn-primary' onClick={Increament}>Increament</button>
    <button type='button' className='btn btn-danger' onClick={Decreament}>Decreament</button>

    </>
  );
}

export default Counter1
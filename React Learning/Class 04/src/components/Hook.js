import React, { useRef, useState } from 'react';


function Hook() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);  // Creating a ref for storing mutable value

  const incrementCount = () => {
    countRef.current += 1;  // Updating the ref value without re-rendering
    console.log('Count in ref:', countRef.current);
  };

  return (
    <>
      <div>
        <h1>Count in state: {count}</h1>
        <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Increment State Count</button>
        <button className='btn btn-secondary' onClick={incrementCount}>Increment Ref Count</button>
      </div>

    </>
  );
}

export default Hook;

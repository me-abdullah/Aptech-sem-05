
import './App.css';

import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0); // Initializing state with 0

  useEffect(() => {
    console.log('useEffect is running with count:', count);
    document.title = `You clicked ${count} times`;
  }, []);


  return (
    <div>
      <h1> {count} </h1>
      <button type='button' className='btn btn-primary' onClick={() => setCount(count + 1)}>Increament</button>
      <button type='button' className='btn btn-secondary' onClick={() => setCount(count - 1)}>Dcreament</button>
    </div>
  );
}

export default App;

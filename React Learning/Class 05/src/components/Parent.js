import React, { useState } from 'react';
import Child1 from './Child1';

function Parent() {
  const [username, setUsername] = useState("JohnDoe");

  return (
    <div>
      <h1>Parent Component</h1>
      <Child1 username={username} />
    </div>
  );
}
export default Parent;
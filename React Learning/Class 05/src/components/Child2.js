import React from 'react'
import Child3 from './Child3';

function Child2({ username }) {
    return (
      <div>
        <h3>Child 2</h3>
        <Child3 username={username} />
      </div>
    );
  }

export default Child2
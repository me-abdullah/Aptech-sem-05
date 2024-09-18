import React, { useContext } from 'react';
import { UserContext } from './Context'; // Import the context

function GrandChild() {
  // Use the context in the child component
  const user = useContext(UserContext);

  return <h2>Grandchild Component: User is {user}</h2>;
}

export default GrandChild;

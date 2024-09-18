import React, { createContext, useState } from 'react';
import Child from './Child';

// Create a context
export const UserContext = createContext();

function Context() {
  const [user, setUser] = useState("JohnDoe");

  return (
    // Provide the context to child components
    <UserContext.Provider value={user}>
      <Child />
    </UserContext.Provider>
  );
}



export default Context;

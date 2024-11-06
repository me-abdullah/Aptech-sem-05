import {useState} from 'react';
function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    function Increament() {
      setCount(count + 1)
    }
    
    function Decreament() {
      setCount(count - 1)
      
    }
    
    return [count, Increament, Decreament]
}

export default useCounter;
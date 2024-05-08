import React, { createContext, useState } from 'react';

// Create the context
export const CounterContext = createContext();

const Counter = (props)=> {

  const [count, setCount] = useState(1);
  console.log(count);
  const addToCart = (item) => {
    setCount([...count, item]);
  }

    return (
    <div>
      <CounterContext.Provider value={{ count, setCount , addToCart}}>
        {props.children} {/* Use props.children instead of props.child */}
      </CounterContext.Provider>
    </div>
  );
};
export default Counter

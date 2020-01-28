import React from 'react';
import MyOtherComponent from './MyOtherComponent';
import MyContext from './MyContext';

function MyComponent() {
  return (
    <MyContext.Provider value={1000}>
      <MyOtherComponent />
    </MyContext.Provider>
  )
}

export default MyComponent;

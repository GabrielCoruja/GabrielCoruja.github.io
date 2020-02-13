import React from 'react';

import MyContext from './MyContext';

function MyOtherComponent() {
  return (
    <MyContext.Consumer value={123}>
      {(value) => (
        <p>{value}</p>
      )}
    </MyContext.Consumer>
  )
}

export default MyOtherComponent;

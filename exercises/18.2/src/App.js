import React, { useState } from 'react';
// import { Buttons } from './components/Buttons';
// import { EffectDemo } from './components2/EffectDemo';
import { Tutorial } from './components2/Tutorial';

const App = () => {
  const [visible, setVisible] = useState(true)

  setTimeout(() => {
    setVisible(false);
  }, 4000);
  
  return (
    visible && <Tutorial />
  )
}

export default App;

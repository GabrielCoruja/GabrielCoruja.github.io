import React, { Component } from 'react';
import MyProvider from './Provider'
import { Family } from './Family';
import Mycomponent from './components/Mycomponent';

class App extends Component {
  state = {
    name:'Wes',
    age: 100,
    cool: true,
  }
  render() {
    return(
      <MyProvider>
        <div>
          <Family />
        </div>
      </MyProvider>
    );
  };
  // render() {
  //   return(
  //     <MyProvider>
  //       <div>
  //         <p>I'm the app</p>
  //         <Mycomponent />
  //       </div>
  //     </MyProvider>
  //   );
  // };
}

export default App;

import React, { Component } from 'react';

//Primeiro crie um novo context
export const Mycontext = React.createContext();

//Então criaremos um componente Provider
class MyProvider extends Component {
  state = {
    name:'Wes',
    age: 100,
    cool: true,
  }
  render() {
    return(
      <Mycontext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({
          age: this.state.age + 1
        })
      }}>
        {this.props.children}
      </Mycontext.Provider>
    ); 
  };
}

export default MyProvider;

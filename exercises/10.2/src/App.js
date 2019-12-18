import React from 'react';
import './App.css';
import PokerList from './listPoker'
import pokemons from './data';


function App() {
  return (
    <div>
      <PokerList pokemons={pokemons} /> 
    </div>
  );
}

export default App;

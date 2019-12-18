import React from 'react';

import './App.css';

function App() {
  const tarefas = ['trabalhar', 'estudar', 'dormir', 'acordar', 'passear']
  return (
    <div className="App">
        <ul>{tarefas.map((lista) => <li>{lista}</li> )}</ul>
    </div >
    );
}

export default App;

import React from 'react';
import './App.css';
import Autocomplete from './components/autocomplete'

function App() {
  return (
    <div className="App">
      <h1>The Beatles Albums</h1>
      <h3>Autocomplete for Otter Labs</h3>
      <Autocomplete />
    </div>
  );
}

export default App;

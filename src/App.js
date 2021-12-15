import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import LogIn from './components/LogIn'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <LogIn />
      </header>
    </div>
  );
}

export default App;


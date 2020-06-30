import React from 'react';
import './App.scss';
import DogList from './containers/DogList';

function App() {
  return (
    <div className="App">
      <DogList/>
      <DogList isCart/>
    </div>
  );
}

export default App;

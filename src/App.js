import React from 'react';
import AddTask from './Components/AddTask.js/AddTask';
import ListTask from './Components/listTask/ListTask';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='title'>TODO APP</h1>
      <AddTask/>
      <ListTask />
    </div>
  );
}

export default App;

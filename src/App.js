
import './App.css';
import AddTask from './Components/AddTask.js/AddTask';
import ListTask from './Components/listTask/ListTask';

function App() {
  return (
    <div className="App">
      <h1>TODO APP</h1>
      <AddTask/>
      <ListTask />
    </div>
  );
}

export default App;

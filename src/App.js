import React from 'react';
import Clear from './components/Clear';
import InputUser from './components/InputUser';
import ListItem from './components/ListItem';
import TotalTask from './components/TotalTask';


function App() {
  return (
    <div className="App">
     <h1>Todo App</h1>
     <InputUser />
     <ListItem />
     <TotalTask />
     <Clear />
    </div>
  );
}

export default App;

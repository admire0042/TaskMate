import { useState } from 'react';
import './App.css';
import { Header } from './Components/Header';
import { TaskList } from './Components/TaskList';

function App() {
 
  return (
    <div className="App">
      <div className="box">
        <Header />
        <TaskList/>
      </div>
    </div>
  );
}

export default App;

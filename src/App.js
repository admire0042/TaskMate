import { useState } from 'react';
import './App.css';
import { Header } from './Components/Header';
import { TaskList } from './Components/TaskList';
import { Footer } from './Components/Footer'

function App() {
 
  return (
    <div className="App">
      <div className="box">
        <Header />
        <TaskList/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

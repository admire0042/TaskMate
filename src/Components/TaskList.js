import React from 'react'
import { TaskCard } from './TaskCard'
import { useState } from 'react';
import { BoxCard } from './BoxCard';


export const TaskList = () => {
    const [show, setShow] = useState(true);

    const [tasks, setTasks] = useState([
      {id: 1, name: "Task 1", completed: true},
      {id: 2, name: "Task 2", completed: false},
      {id: 3, name: "Task 3", completed: false}
     ]);
     const handleDelete = (id) => {
      console.log(id);
      setTasks(tasks.filter(task => task.id !== id));
     }

  return (
    <>
     <h1>Task List</h1>
       <button className="delete" onClick={() => setShow(!show)}>{show ? "Hide": "Show"}</button>
       <ul>
            { show && tasks.map(task => (
              <TaskCard task={task} handleDelete={handleDelete} key={task.id}/>
              )
            ) }
       </ul>
       <BoxCard result="success">
            <p className="title">Lorem ipsum dolor sit amet consectetur.</p>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, repudiandae.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, eligendi? Necessitatibus, qui magnam. Mollitia obcaecati eius similique voluptatibus excepturi! Soluta maiores a quisquam necessitatibus earum harum ipsa quia tempore praesentium.</p>
       </BoxCard>
         <BoxCard result="warning">
            <p className="title">Lorem ipsum dolor sit amet consectetur.</p>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, repudiandae.</p>
       </BoxCard>
       <BoxCard result="alert">
            <p className="title">Lorem ipsum dolor sit amet consectetur.</p>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, repudiandae.</p>
       </BoxCard>
    </>
  )
}

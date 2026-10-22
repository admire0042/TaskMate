import React from 'react'

export const TaskCard = ({ task, handleDelete }) => {
    const [show, setShow] = React.useState(true);

  return (
   <li className={task.completed ? "completed": "incomplete"}>{task.id} - { task.name}
           <span> <button className="delete" onClick={() => handleDelete(task.id)}>Delete </button> </span>
           </li>
  )
}

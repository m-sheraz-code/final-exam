import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function TaskManagement() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    
  }

  const handleDeleteTask = (id) => {
  }

    const handleReadTask = (id) => {
    
  }

  const handleUpdateTask = (id) => {

  }
     

  return (
    <>
      <Navbar />
      <div className="task-container">
        <h1>Task Management</h1>
        <div className='buttons'>
        <button onClick={handleAddTask}>
          Add Task
        </button>
        <button onClick={handleDeleteTask}>
          Delete Task
        </button>
        <button onClick={handleUpdateTask}>
          Update Task
        </button>
        <button onClick={handleReadTask}>
          Read Task
        </button>
        </div>
       </div>
    </>
  );
}

export default TaskManagement;

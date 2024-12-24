import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function TaskManagement() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    
  }


     

  return (
    <>
      <Navbar />
      <div className="task-container">
        <h1>Task Management</h1>
        <div className='buttons'>
        <button>
          Add Task
        </button>
        <button>
          Delete Task
        </button>
        <button>
          Update Task
        </button>
        <button>
          Read Task
        </button>
        </div>
       </div>
    </>
  );
}

export default TaskManagement;

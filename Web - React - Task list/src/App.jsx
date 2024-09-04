import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import './App.css';

import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get('http://localhost:5174/tasks');
      setTasks(data);
    }
    
    fetchTasks();
  }, []);

  const handleTaskAdd = (taskTitle) => {
    setTasks([...tasks, 
      { id: uuidv4(), 
        title: taskTitle, 
        completed: false }
      ]);
  }

  const handleTaskRemove = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  const handleTaskClick = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  }

  return (
    <div className="container">
      <Header/>
      <AddTask handleTaskAdd={handleTaskAdd}/>
      <Tasks tasks={tasks} setTasks={setTasks}
      handleTaskRemove={handleTaskRemove} 
      handleTaskClick={handleTaskClick}/>
    </div>
  )
}

export default App;
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import './App.css';

import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskTitle, setEditingTaskTitle] = useState("");

  //Get tasks from API
  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5174/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks: ', error);
    }
  };

  //Get tasks from API on component render
  useEffect(() => {
    fetchTasks();
  }, []);

  //Add a new task on API -> Get tasks from API
  const handleTaskAdd = async (taskTitle) => {
    const newTask = { 
      id: uuidv4(), 
      title: taskTitle, 
      completed: false 
    };

    try {
      const response = await axios.post('http://localhost:5174/tasks', newTask);
      console.log(response);
      fetchTasks();
    } catch (error) {
      console.error('Error adding task: ', error);
    }
  }

  //Edit task click
  const handleTaskEdit = (taskId, currentTitle) => {
    setEditingTaskId(taskId);
    setEditingTaskTitle(currentTitle);
  }

  //Update a task on API -> Get tasks from API
  const handleTaskEditConfirm = async (taskId) => {
    const taskToUpdate = tasks.find(task => task.id === taskId);
    const updatedTask = { ...taskToUpdate, title: editingTaskTitle };
  
    try {
      await axios.put(`http://localhost:5174/tasks/${taskId}`, updatedTask);
      fetchTasks();
  
      setEditingTaskId(null);
      setEditingTaskTitle("");
    } catch (error) {
      console.error('Error updating task: ', error);
    }
  };

  //Edit task cancel
  const handleTaskEditCancel = () => {
    setEditingTaskId(null);
    setEditingTaskTitle("");
  }

  //Remove a task from API -> Get tasks from API
  const handleTaskRemove = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5174/tasks/${taskId}`);
      fetchTasks();
    } catch (error) {
      console.error('Error removing task: ', error);
    }
  };

  //Update a task on API -> Get tasks from API
  const handleTaskClick = async (taskId) => {
    const taskToUpdate = tasks.find(task => task.id === taskId);
    const updatedTask = { ...taskToUpdate, completed: !taskToUpdate.completed };
  
    try {
      await axios.put(`http://localhost:5174/tasks/${taskId}`, updatedTask);
      fetchTasks();
    } catch (error) {
      console.error('Error updating task: ', error);
    }
  };
  
  return (
    <div className="container">
      <Header/>
      <AddTask handleTaskAdd={handleTaskAdd}/>
      <Tasks tasks={tasks} setTasks={setTasks}
      editingTaskId={editingTaskId} 
      editingTaskTitle={editingTaskTitle} setEditingTaskTitle={setEditingTaskTitle}
      fetchTasks={fetchTasks}
      handleTaskRemove={handleTaskRemove} 
      handleTaskEdit={handleTaskEdit}
      handleTaskEditConfirm={handleTaskEditConfirm}
      handleTaskEditCancel={handleTaskEditCancel}
      handleTaskClick={handleTaskClick}/>
    </div>
  )
}

export default App;
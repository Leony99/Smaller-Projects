import { Fragment, useState, useRef, useEffect } from "react";
import { Pencil, Trash2, CircleCheck, CircleX } from 'lucide-react';

import './tasks.css';

const Tasks = (props) => {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskTitle, setEditingTaskTitle] = useState("");
  const inputRef = useRef(null);

  const handleTaskEdit = (taskId, currentTitle) => {
    setEditingTaskId(taskId);
    setEditingTaskTitle(currentTitle);
  }

  const handleTaskEditConfirm = (taskId) => {
    props.setTasks(props.tasks.map(task => 
      task.id === taskId ? { ...task, title: editingTaskTitle } : task
    ));
    setEditingTaskId(null);
    setEditingTaskTitle("");
  }

  const handleTaskEditCancel = () => {
    setEditingTaskId(null);
    setEditingTaskTitle("");
  }

  //Input on focus
  useEffect(() => {
    if (editingTaskId !== null) {
      const input = document.getElementById(`${editingTaskId}`);
      input.focus();
    }
  }, [editingTaskId]);
  
  return (
    <Fragment>
        {props.tasks.map((task) => {
          return (
            <div key={task.id} className={`task-container ${task.completed}`} >

              <div className={`task-elements ${editingTaskId !== task.id ? "visible" : "invisible"}`}>
                <div className="task-title"
                onClick={() => props.handleTaskClick(task.id)}>
                  {task.title}
                </div>

                <div className="task-buttons">
                  <button className="edit-task" 
                  onClick={() => handleTaskEdit(task.id, task.title)}>
                    <Pencil color= "chartreuse" size={20}/>
                  </button>
                  <button className="remove-task" 
                  onClick={() => props.handleTaskRemove(task.id)}>
                    <Trash2 color= "chartreuse" size={20}/>
                  </button>
                </div>
              </div>

              <div className={`task-elements ${editingTaskId == task.id ? "visible" : "invisible"}`}>
                <input id={`${task.id}`} className="edit-task-input"
                type="text" spellCheck="false"
                ref={inputRef}
                value={editingTaskTitle}
                onChange={(e) => setEditingTaskTitle(e.target.value)}/>

                <div className="task-buttons">
                  <button className="edit-task" 
                  onClick={() => handleTaskEditConfirm(task.id)}>
                    <CircleCheck color= "chartreuse" size={20}/>
                  </button>
                  <button className="remove-task" 
                  onClick={() => handleTaskEditCancel(task.id)}>
                    <CircleX color= "chartreuse" size={20}/>
                  </button>
                </div>
              </div>
            
            </div>
          )
        })}
    </Fragment>
  )
}

export default Tasks;
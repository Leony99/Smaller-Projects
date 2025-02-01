import { Fragment, useRef, useEffect } from "react";
import { Pencil, Trash2, CircleCheck, CircleX } from 'lucide-react';

import './tasks.css';

const Tasks = (props) => {
  const inputRef = useRef(null);

  //Input on focus
  useEffect(() => {
    if (props.editingTaskId !== null) {
      const input = document.getElementById(`${props.editingTaskId}`);
      input.focus();
    }
  }, [props.editingTaskId]);
  
  return (
    <Fragment>
        {props.tasks.map((task) => {
          return (
            <div key={task.id} className={`task-container ${task.completed}`} >

              <div className={`task-elements ${props.editingTaskId !== task.id ? "visible" : "invisible"}`}>
                <div className="task-title"
                onClick={() => props.handleTaskClick(task.id)}>
                  {task.title}
                </div>

                <div className="task-buttons">
                  <button className="edit-task" 
                  onClick={() => props.handleTaskEdit(task.id, task.title)}>
                    <Pencil color= "chartreuse" size={20}/>
                  </button>
                  <button className="remove-task" 
                  onClick={() => props.handleTaskRemove(task.id)}>
                    <Trash2 color= "chartreuse" size={20}/>
                  </button>
                </div>
              </div>

              <div className={`task-elements ${props.editingTaskId == task.id ? "visible" : "invisible"}`}>
                <input id={`${task.id}`} className="edit-task-input"
                type="text" spellCheck="false"
                ref={inputRef}
                value={props.editingTaskTitle}
                onChange={(e) => props.setEditingTaskTitle(e.target.value)}/>

                <div className="task-buttons">
                  <button className="edit-task" 
                  onClick={() => props.handleTaskEditConfirm(task.id)}>
                    <CircleCheck color= "chartreuse" size={20}/>
                  </button>
                  <button className="remove-task" 
                  onClick={() => props.handleTaskEditCancel(task.id)}>
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
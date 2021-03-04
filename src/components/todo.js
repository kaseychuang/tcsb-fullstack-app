import React from "react";
import "./todo.css";
import "../services/todoservice.js";
import TodoService from "../services/todoservice.js";

const Todo = ({ id, task, completed }) => {

  // this won't work rn bc we have hard coded completed values in the other component 
  const onChecked = (e) => {
    if (e.target.checked === true){
        alert("you completed this task!");
    }
    else{
        alert('you made this task incomplete');
    }

    completed = !completed;
    TodoService.updateTodo(id,task,completed)
    .then(data =>{
        console.log("Task Updated!")
    })
    .catch(err=>{
        console.log(`Error: ${err}`);
    });
  };

  const deleteTask = () => {
    alert('deleted task');

    TodoService.deleteTodo(id)
    .then(data =>{
        console.log("Task deleted!")
    })
    .catch(err=>{
        console.log(`Error: ${err}`);
    });
  }

  return (
    <div className="todo">
        <input id="checkbox" type="checkbox" checked={completed} onChange={(e) => onChecked(e)} />
        <p id="task-name">{task}</p>
        <button id="delete-btn" onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default Todo;

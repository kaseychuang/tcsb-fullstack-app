import React from "react";
import "./todo.css";

const Todo = ({ id, task, completed }) => {

  // this won't work rn bc we have hard coded completed values in the other component 
  const onChecked = (e) => {
    if (e.target.checked === true){
        alert("you completed this task!");
    }
    else{
        alert('you made this task incomplete');
    }

    // TODO: Update request to backend using id prop


  };

  const deleteTask = () => {
      alert('deleted task');

    // TODO: Delete request to backend using id prop

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

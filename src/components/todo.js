import React from "react";
import "./todo.css";

const Todo = ({ id, task, completed }) => {
  // On checked off function
  const onCompleteTask = () => {
    console.log("you completed this task!");

    // update the task in the database which should update app
  };

  return (
    <div className="todo">
        <input id="checkbox" type="checkbox" checked={completed} onChange={onCompleteTask} />
        <p id="task-name">{task}</p>
        <button id="delete-btn">Delete</button>
    </div>
  );
};

export default Todo;

import React, { useEffect, useState } from 'react';
import Todo from './todo';
import './todoList.css';
import '../services/todoservice.js';
import TodoService from '../services/todoservice.js';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [showCompleted, setShowCompleted] = useState(false);

    // Possible Add-Ons
        // multiple categories
        // toggle between categories (multiple lists)
    // Popup for delete task confirmation

    useEffect(() => {
        TodoService.getAllTodos()
        .then(data =>{
            setTodos(data);
        })
        .catch(err=>{
            console.log(`Error: ${err}`);
        });
        

        // Dummy data for now
        const dummyTodos = [
            {
                id: 1,
                task: "Clean room", 
                completed: false
            },
            {
                id: 2, 
                task: "Work out", 
                completed: false
            },
            {
                id: 3,
                task: "Walk dog", 
                completed: true
            }
        ];

        // setTodos(dummyTodos);
    }, []);

    const renderTodos = () => {
        return todos.map((todo) => {
            if (showCompleted){
                return <Todo key={todo.id} id={todo.id} task={todo.task} completed={todo.completed}/>;
            } 
            else{
                return todo.completed ? null : <Todo key={todo.id} id={todo.id} task={todo.task} completed={todo.completed}/>;
            }
        })
    }

    const addTodo = (e) => {
        e.preventDefault();

        TodoService.addTodo(newTask)
        .then(data =>{
            // clear input field
            setNewTask("");
        })
        .catch(err=>{
            console.log(`Error: ${err}`);
        });

        setTodos(todos.concat([{
            task: newTask, 
            completed: false,
        }]));

    }

    return (
        <div id="todo-list">
            <h1 id="list-title">My Todo List</h1>
            <div id="sub-header">
                <p>Incompleted Tasks: {todos.length}</p>
                <label id="show-completed-label">
                    Show completed tasks
                    <input type="checkbox" onChange={(e) => setShowCompleted(e.target.checked)}/>
                </label>
            </div>
            <hr/>
            <div id="list">
                {renderTodos()}
            </div>
            <hr/>
            <div id="add-task-section">
                <form onSubmit={addTodo}>
                    <input id="new-task" type="text" required value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
                    <button type="submit" id="add-btn">Add Task</button>
                </form>
            </div>
        </div>
    );
}

export default TodoList;
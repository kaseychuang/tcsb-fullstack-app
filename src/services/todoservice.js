const API_URL = 'http://localhost:8080/api/todos/';

var TodoService = {
  getAllTodos: ()=>{
    return fetch(API_URL, {
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
  },

  getTodo: (id)=>{
    return fetch(API_URL + id,{
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
  },

  addTodo: (newTask)=>{
    return fetch(API_URL,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                task:newTask
            })
        })
        .then(response => response.json())
  },

  deleteAllTodos: ()=>{
    return fetch(API_URL,{
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
  },

  deleteTodo: (id)=>{
    return fetch(API_URL + id, {
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
  },

  updateTodo: (id,newTask, completed)=>{
    return fetch(API_URL + id,{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                task:newTask,
                completed
            })
        })
        .then(response => response.json())

  }

}

export default TodoService;
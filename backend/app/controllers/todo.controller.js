const db = require("../models");
const Todo = db.todos;
const Op = db.Sequelize.Op;

// create new todo
exports.create = (req,res) =>{
  // validate request
  if (!req.body.task){
    res.status(400).send({
      message: "Todo needs a task!"
    });
    return; 
  }

  const todo = {
    task: req.body.task,
    completed: req.body.completed ? req.body.completed : false
  };

  Todo.create(todo)
    .then(data=>{
      res.send(data);
    })
    .catch(err=>{
      res.status(500).send({
        message: err.message || "Error occured when creating todo."
      });
    });
};

// Find all todos
exports.findAll = (req,res) =>{
  const task = req.body.task;
  // TODO check latter
  var condition = task ? {task: {[Op.iLike]:`%${task}`}} : null;

  Todo.findAll({where: condition})
    .then(data=>{
      res.send(data);
    })
    .catch(err=>{
      res.status(500).send({
        message: err.message || "Some error occured when retrieving todos."
      });
    });
};

// Find todo with id
exports.findOne = (req,res) =>{
  const id = req.params.id;

  // find by primary key
  Todo.findByPk(id)
    .then(data=>{
      res.send(data);
    })
    .catch(err=>{
      res.status(500).send({
        message: `Error with retrieving todo with id: ${id}.`
      });
    });
};

// Update todo with given id
exports.update = (req,res) =>{
  const id = req.params.id;

  Todo.update(req.body,{
    where: {id: id}
  })
  .then(num=>{
    var message;
    if (num == 1){
      message = "Todo was updated."
    }else{
      message = `Cannot update todo with id: ${id}. Todo not found or req.body is empty.`
    }
    res.send({
      message: message
    });
  })
  .catch(err=>{
    res.status(500).send({
      message: `Error with updating todo with id: ${id}.`
    })
  })
}

// Delete a todo by id
exports.delete = (req,res) =>{
  const id = req.params.id;

  Todo.destroy({
    where: {id: id}
  })
  .then(num =>{
    var message;
    if (num == 1){
      message = `Todo was deleted!`
    }else{
      message = `Cannot delete todo with id: ${id}. Todo not found or rq.body is empty.`
    }
    res.send({
      message: message
    });
  })
  .catch(err=>{
    res.status(500).send({
      message: `Error with deleting todo with id: ${id}.`
    });
  });
};

// Delete all todos
exports.deleteAll = (req,res) =>{
  Todo.destory({
    where: {},
    truncate: false
  })
  .then(nums=>{
    res.send({
      message: `${nums} todos were deleted!`
    })
    .catch(err=>{
      res.status(500).send({
        message: err.message || `Error with deleting all todos.`
      })
    })
  })
}
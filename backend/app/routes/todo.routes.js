module.exports = app =>{
  const controller = require("../controllers/todo.controller.js");

  var router = require("express").Router();

  // New todo
  router.post("/", controller.create);

  // Find all todos
  router.get("/", controller.findAll);

  // Find todo by id
  router.get("/:id", controller.findOne);

  // Update todo by id
  router.put("/:id", controller.update);

  // Delete todo by id
  router.delete("/:id", controller.delete);

  // Delete all todos
  router.delete("/", controller.deleteAll);

  app.use("/api/todos", router);
}
// define what a todo is
module.exports = (sequelize, Sequelize) =>{
  const Todos = sequelize.define("todo",{
    task:{
      type: Sequelize.STRING
    },
    completed:{
      type: Sequelize.BOOLEAN
    }
  });
  return Todos;
};
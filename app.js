const TaskModel = require('./model');
const TaskView = require('./view');
const TaskController = require('./controllers');

const model = new TaskModel();
const view = new TaskView();
const controller = new TaskController(model,view); 
controller.run();

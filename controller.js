const TaskModel = require('./model');
const TaskView = require('./view');

class TaskController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async run() {
    // ciclo para que esto se ejecute siempre
    while (true) {
      this.view.showTasks(this.model.getTask());
      let newTask = await this.view.getUserInput();
      // si la tarea es diferente de quit o function,
      // se manda como nueva tarea
      if (newTask.toLowerCase() === 'quit') {
        break;
      } else if (newTask.toLowerCase() === 'function') {
        await this.handleAdditionalMenu();
      } else {
        this.model.addTask(newTask.trim());
      }
    }
  }

  async handleAdditionalMenu() {
    while (true) {
      this.view.showAdditionalMenu();
      const choice = await this.view.getUserInput('Digite el número de la funcion: ');

      // condicional switch para evaluar la opcion que el usuario eligio
      switch (choice) {
        // completar tarea
        case '1':
          this.view.showTasks(this.model.getTask());
          const taskToDoneStr = await this.view.getUserInput('Digite el numero de la tarea que quieres completar: ');
          const taskToDone = parseInt(taskToDoneStr) - 1;
          this.model.markTaskAsCompleted(taskToDone);
          break;

        // obtener tareas completadas
        case '2':
          this.view.showCompletedTasks(this.model.getCompletedTasks());
          break;

        // obtener tareas pendientes
        case '3':
          this.view.showPendingTasks(this.model.getPendingTasks());
          break;

        // borrar tarea
        case '4':
          this.view.showTasks(this.model.getTask());
          const indexToRemoveStr = await this.view.getUserInput('Digite el numero de la tarea que quiere borrar: ');
          const indexToRemove = parseInt(indexToRemoveStr) - 1;
          this.model.removeTaskByIndex(indexToRemove)
          break;

        // salir de las funciones
        case '5':
          return;

        default:
          console.log('opción invalida');
      }
    }
  }
}

module.exports = TaskController;

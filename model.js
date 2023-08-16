class TaskModel {
  //Aqui comienza el contructor
  constructor() {
    this.task = [];
  } //aqui termina el constructor

  //inicio del metodo agregar tarea
  addTask(task) {
    this.task.push({name: task, completed: false});
  } //fin de metodo agregar

  //metodo de devolucion
  getTask() {
    return this.task;
  }

  // marcar una tarea como completada por su indice
  markTaskAsCompleted(index) {
    while (index >= 0 && index < this.task.length) {
      this.task[index].completed = true;
      return console.log(`\nTarea completada: ${this.task[index].name}`);
    }
    return console.log('\nNúmero de tarea incorrecto.');
  }

  // obtener solo las tareas completadas
  getCompletedTasks() {
    const completedTasks = this.task.filter(task => task.completed);
    return completedTasks;
  }

  // obtener solo las tareas pendientes
  getPendingTasks() {
    const pendingTasks = this.task.filter(task => !task.completed);
    return pendingTasks;
  }

  // borrar tarea por el indice
  removeTaskByIndex(index) {
    while (index >= 0 && index < this.task.length) {
      const removedTask = this.task[index].name;
      this.task.splice(index, 1);
      return console.log(`\nTarea borrada: ${removedTask}`);
    }
    return console.log('\nNúmero de tarea incorrecto.');
  }
} // finaliza la clase modelo

//Acción para mandar la clase al controlador
module.exports = TaskModel;

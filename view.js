class TaskView {
  showTasks(tasks) {
    console.log('\nLista de Tareas:');
    tasks.forEach((task, index) => {
      console.log(
        `${index + 1}. ${task.name} (${
          !task.completed ? 'Pendiente' : 'Hecho'
        })`
      );
    });
  }

  getUserInput(text) {
    text = text || "Escribe tu tarea (o 'quit' para salir, 'function' para más opciones): ";
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return new Promise((resolve) => {
      rl.question(
        text, (answer) => {
          rl.close();
          resolve(answer);
        }
      );
    });
  }

  showAdditionalMenu() {
    console.log('\n_- Funciones Adicionales -_');
    console.log('  1. Marcar tarea completada');
    console.log('  2. Ver tareas completadas');
    console.log('  3. Ver tareas pendientes');
    console.log('  4. Eliminar tarea');
    console.log('  5. Volver al menú principal\n');
  }

  showCompletedTasks(completedTasks) {
    console.log('\n_- Tareas Completadas -_');
    completedTasks.forEach((task, index) => {
      console.log(`  ${index + 1}. ${task.name}`);
    });
  }

  showPendingTasks(pendingTasks) {
    console.log('\n_- Tareas Pendientes -_');
    pendingTasks.forEach((task, index) => {
      console.log(`  ${index + 1}. ${task.name}`);
    });
  }
}

module.exports = TaskView;

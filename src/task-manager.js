const createTaskManager = () => {
    const tasks = [];
    return{
        addTask: (task) => {
            const tasksCount = tasks.length;
            tasks.push({id: tasksCount, task: task, state: 'new'});

            return 'Tasks added successfully. Id: ' + tasksCount;
        },
        listTask: () => {
            let tasksString = 'Tasks: ';
            for (let i = 0; i < tasks.length; i++){
                const task = tasks[i];
                tasksString += `Id: ${task.id}. Task: ${task.task}. State: ${task.state}\n`
            }
            return tasksString;
        },
        completeTask: (idTask) => {
            const task = tasks[idTask];
            task.state = 'completed';

            return `Task "${task.task}" completed!`;
        },
        startTask: (idTask) => {
            const task = tasks[idTask];
            task.state = 'ongoing';

            return `Task "${task.task}" started!`;            
        },
        deleteTask: (idTask) => {
            tasks = tasks.filter(t => t.id !== idTask);

            return `Task "${task.task}" started!`;
        }
    }
}

const myTasks = createTaskManager();

alert(myTasks.addTask('Hacer un task manager'));
alert(myTasks.addTask('Generar sus métodos'));
alert(myTasks.addTask('Empezar a probarlo'));
alert(myTasks.addTask('Hacer un budín'));
alert(myTasks.listTask());
alert(myTasks.startTask(0));
alert(myTasks.startTask(1));
alert(myTasks.startTask(2));
alert(myTasks.listTask());
alert(myTasks.deleteTask(3));
alert(myTasks.completeTask(0));
alert(myTasks.completeTask(1));
alert(myTasks.completeTask(2));
alert(myTasks.listTask);

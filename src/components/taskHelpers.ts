import { Task } from "../types";

export const getTasks = () => {
	const serializedTasks = localStorage.getItem("tasks");
	if (!serializedTasks) {
		return [];
	}
	return JSON.parse(serializedTasks) as Task[];
};

export const removeTask = (task: Task, tasks: Task[]) =>
	tasks.filter(({ id }) => id !== task.id);

export const saveTasks = (tasks: Task[]) => {
	localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const replaceTask = (task: Task, tasks: Task[]) => {
	// const filteredTasks = removeTask(task, tasks);
	// filteredTasks.push(task);
	// return filteredTasks;
};

export const updateTask = (task: Task, tasks: Task[]) =>
	tasks.map((element) => {
		if (element.id === task.id) {
			return task;
		}
		return element;
	});

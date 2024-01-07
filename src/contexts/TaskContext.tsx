import { createContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { Task } from "../types";

export const TaskContext = createContext<{
	tasks: Task[];
	removeTask?: (task: Task) => void;
	updateTask?: (task: Task) => void;
	addTask?: (task: Omit<Task, "id">) => void;
}>({ tasks: [] });

export const TaskContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [tasks, setTasks] = useState<Task[]>([]);

	const getTasks = () => {
		console.log("musze pobrac taski z serwera kici puni");
		const serializedTasks = localStorage.getItem("tasks");
		if (!serializedTasks) {
			return setTasks([]);
		}
		setTasks(JSON.parse(serializedTasks) as Task[]);
	};

	const saveTasks = (tasks: Task[]) => {
		setTasks(tasks);
		localStorage.setItem("tasks", JSON.stringify(tasks));
	};

	const addTask = (task: Omit<Task, "id">) => {
		saveTasks([...tasks, { ...task, id: uuid() }]);
	};

	const removeTask = (task: Task) => {
		const filteredTasks = tasks.filter(({ id }) => id !== task.id);
		saveTasks(filteredTasks);
	};

	const updateTask = (task: Task) => {
		const mappedTasks = tasks.map((element) => {
			if (element.id === task.id) {
				return task;
			}
			return element;
		});
		saveTasks(mappedTasks);
	};

	useEffect(getTasks, []);

	return (
		<TaskContext.Provider value={{ tasks, addTask, removeTask, updateTask }}>
			{children}
		</TaskContext.Provider>
	);
};

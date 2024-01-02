import React, { useEffect, useState } from "react";
import { AddTaskForm } from "./components/AddTaskForm";
import { TaskList } from "./components/TaskList";
import { Task } from "./types";

function App() {
	const [tasks, setTasks] = useState<Task[]>([]);

	const refreshTasks = () => {
		const serializedTasks = localStorage.getItem("tasks");
		const tasks = serializedTasks
			? (JSON.parse(serializedTasks) as Task[])
			: [];
		setTasks(tasks);
	};

	useEffect(refreshTasks);

	return (
		<div className="App">
			<AddTaskForm onTaskAdded={refreshTasks} />
			<TaskList tasks={tasks} />
		</div>
	);
}

export default App;

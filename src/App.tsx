import React, { useEffect, useState } from "react";
import { AddTaskForm } from "./components/AddTaskForm";
import { TaskList } from "./components/TaskList";
import { Task } from "./types";
import { getTasks } from "./components/taskHelpers";

function App() {
	const [tasks, setTasks] = useState<Task[]>([]);

	const refreshTasks = () => {
		const tasks = getTasks();
		setTasks(tasks);
	};

	useEffect(refreshTasks, []);

	return (
		<div className="App">
			<AddTaskForm onTaskAdded={refreshTasks} />
			<TaskList tasks={tasks} onTaskChange={refreshTasks} />
		</div>
	);
}

export default App;

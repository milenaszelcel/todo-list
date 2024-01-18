import React from "react";
import { AddTaskForm } from "./components/AddTask/AddTaskForm";
import { TaskList } from "./components/TaskList";
import { TaskContextProvider } from "./contexts/TaskContext";
import styles from "./App.module.scss";

function App() {
	return (
		<div className="App">
			<div className={styles.title}>Today's tasks</div>
			<TaskContextProvider>
				<AddTaskForm />
				<TaskList />
			</TaskContextProvider>
		</div>
	);
}

export default App;

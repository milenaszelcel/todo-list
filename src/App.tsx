import React from "react";
import { AddTaskForm } from "./components/AddTask/AddTaskForm";
import { TaskList } from "./components/TaskList/TaskList";
import { TaskContextProvider } from "./contexts/TaskContext";
import styles from "./App.module.scss";
import { CompletetTasksList } from "./components/CompletedTasksList";

function App() {
	return (
		<TaskContextProvider>
			<div className={styles.container}>
				<div className={styles.column}>
					<div className={styles.title}>Today's tasks</div>
					<AddTaskForm />
					<TaskList />
				</div>
				<div className={styles.column}>
					<div className={styles.title}>Completed tasks</div>
					<CompletetTasksList />
				</div>
			</div>
		</TaskContextProvider>
	);
}

export default App;

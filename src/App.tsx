import React from "react";
import { AddTaskForm } from "./components/AddTaskForm";
import { TaskList } from "./components/TaskList";
import { TaskContextProvider } from "./contexts/TaskContext";

function App() {
	return (
		<div className="App">
			<TaskContextProvider>
				<AddTaskForm />
				<TaskList />
			</TaskContextProvider>
		</div>
	);
}

export default App;

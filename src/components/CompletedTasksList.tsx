import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { TaskListItem } from "./TaskListItem/TaskListItem";

export const CompletetTasksList = () => {
	const { tasks } = useContext(TaskContext);
	const completedTasks = tasks.filter((task) => task.completed);
	return (
		<div>
			{completedTasks.map((task) => (
				<TaskListItem task={task} />
			))}
		</div>
	);
};

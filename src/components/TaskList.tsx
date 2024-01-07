import { useContext } from "react";
import { TaskListItem } from "./TaskListItem";
import { TaskContext } from "../contexts/TaskContext";

export const TaskList = () => {
	const { tasks } = useContext(TaskContext);
	if (!tasks.length) {
		return <div>Nie ma zadań</div>;
	}

	return (
		<ul>
			{tasks.map((task) => (
				<li>
					<TaskListItem task={task} />
				</li>
			))}
		</ul>
	);
};

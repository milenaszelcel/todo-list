import { Task } from "../types";
import { getTasks, saveTasks, updateTask } from "./taskHelpers";

type Props = {
	task: Task;
	onTaskChange: () => void;
};

export const CompleteTaskButton = ({ task, onTaskChange }: Props) => {
	const onClick = () => {
		const tasks = getTasks();
		const completedTask = {
			...task,
			completed: true,
		};
		const filteredTasks = updateTask(completedTask, tasks);
		saveTasks(filteredTasks);
		onTaskChange();
	};

	return !task.completed ? <button onClick={onClick}>Gotowe</button> : null;
};

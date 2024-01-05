import { Task } from "../types";
import { getTasks, removeTask, saveTasks } from "./taskHelpers";

type Props = {
	task: Task;
	onTaskChange: () => void;
};

export const RemoveTaskButton = ({ task, onTaskChange }: Props) => {
	const onClick = () => {
		const tasks = getTasks();
		const filteredTasks = removeTask(task, tasks);
		saveTasks(filteredTasks);
		onTaskChange();
	};

	return <button onClick={onClick}>X</button>;
};

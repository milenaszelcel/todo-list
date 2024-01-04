import { Task } from "../types";
import { getTasks, removeTask, saveTasks } from "./taskHelpers";

type Props = {
	task: Task;
};

export const RemoveTaskButton = ({ task }: Props) => {
	const onClick = () => {
		const tasks = getTasks();
		const filteredTasks = removeTask(task, tasks);
		saveTasks(filteredTasks);
	};

	return <button onClick={onClick}>X</button>;
};

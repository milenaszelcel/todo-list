import { Task } from "../types";
import { getTasks, replaceTask, saveTasks } from "./taskHelpers";

type Props = {
	task: Task;
};

export const CompleteTaskButton = ({ task }: Props) => {
	const onClick = () => {
		const tasks = getTasks();
		const completedTask = {
			...task,
			completed: true,
		};
		const filteredTasks = replaceTask(completedTask, tasks);
		saveTasks(filteredTasks);
	};

	return !task.completed ? <button onClick={onClick}>Gotowe</button> : null;
};

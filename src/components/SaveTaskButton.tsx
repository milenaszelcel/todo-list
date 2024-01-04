import { Task } from "../types";
import { getTasks, replaceTask, saveTasks } from "./taskHelpers";

type Props = {
	task: Task;
	onClick: () => void;
};

export const SaveTaskButton = ({ task, onClick }: Props) => {
	const saveTasksButton = () => {
		const tasks = getTasks();
		const savedTask = {
			...task,
			content: task.content,
		};
		const filteredTasks = replaceTask(savedTask, tasks);
		saveTasks(filteredTasks);
	};
	return (
		<button
			onClick={() => {
				saveTasksButton();
				onClick();
			}}
		>
			Zapisz
		</button>
	);
};

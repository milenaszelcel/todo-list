import { Task } from "../types";

type Props = {
	task: Task;
};

export const RemoveTaskButton = ({ task }: Props) => {
	const onClick = () => {
		const serializedTasks = localStorage.getItem("tasks");
		const tasks = serializedTasks
			? (JSON.parse(serializedTasks) as Task[])
			: [];
		const filteredTasks = tasks.filter(
			({ content }) => content !== task.content
		);
		localStorage.setItem("tasks", JSON.stringify(filteredTasks));
	};

	return <button onClick={onClick}>X</button>;
};

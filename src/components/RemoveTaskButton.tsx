import { useContext } from "react";
import { Task } from "../types";
import { TaskContext } from "../contexts/TaskContext";

type Props = {
	task: Task;
};

export const RemoveTaskButton = ({ task }: Props) => {
	const { removeTask } = useContext(TaskContext);
	const onClick = () => {
		removeTask?.(task);
	};

	return <button onClick={onClick}>X</button>;
};

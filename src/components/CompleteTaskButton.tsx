import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { Task } from "../types";

type Props = {
	task: Task;
};

export const CompleteTaskButton = ({ task }: Props) => {
	const { updateTask } = useContext(TaskContext);
	const onClick = () => {
		updateTask?.({
			...task,
			completed: true,
		});
	};

	return !task.completed ? <button onClick={onClick}>Gotowe</button> : null;
};

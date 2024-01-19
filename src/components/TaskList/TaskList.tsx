import { useContext } from "react";
import { TaskListItem } from "../TaskListItem/TaskListItem";
import { TaskContext } from "../../contexts/TaskContext";
import styles from "./TaskList.module.scss";

export const TaskList = () => {
	const { tasks } = useContext(TaskContext);
	const notCompletedTasks = tasks.filter((task) => !task.completed);
	if (!notCompletedTasks.length) {
		return <div className={styles.noTasksText}>no tasks for today</div>;
	}

	return (
		<>
			{notCompletedTasks.map((task) => (
				<TaskListItem task={task} />
			))}
		</>
	);
};

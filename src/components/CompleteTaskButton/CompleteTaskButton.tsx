import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import { Task } from "../../types";
import Icon from "@mdi/react";
import { mdiCheckOutline } from "@mdi/js";
import styles from "./CompleteTaskButton.module.scss";

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

	return !task.completed ? (
		<button onClick={onClick} className={styles.completeButton}>
			<Icon path={mdiCheckOutline} size={1.5} color={"#b91ed3"} />
		</button>
	) : null;
};

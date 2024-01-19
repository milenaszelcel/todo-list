import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import { Task } from "../../types";
import Icon from "@mdi/react";
import { mdiCheckOutline } from "@mdi/js";
import styles from "./ChangeTaskStatusButton.module.scss";
import { mdiArrowLeftBoldOutline } from "@mdi/js";

type Props = {
	task: Task;
};

export const ChangeTaskStatusButton = ({ task }: Props) => {
	const { updateTask } = useContext(TaskContext);
	const onClick = () => {
		updateTask?.({
			...task,
			completed: !task.completed,
		});
	};

	return (
		<button onClick={onClick} className={styles.completeButton}>
			{!task.completed ? (
				<Icon path={mdiCheckOutline} size={1.5} color={"#b91ed3"} />
			) : (
				<Icon path={mdiArrowLeftBoldOutline} size={1.5} color={"#b91ed3"} />
			)}
		</button>
	);
};

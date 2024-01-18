import { useContext } from "react";
import { Task } from "../../types";
import { TaskContext } from "../../contexts/TaskContext";
import Icon from "@mdi/react";
import { mdiDeleteOutline } from "@mdi/js";
import styles from "./RemoveTaskButton.module.scss";

type Props = {
	task: Task;
};

export const RemoveTaskButton = ({ task }: Props) => {
	const { removeTask } = useContext(TaskContext);
	const onClick = () => {
		removeTask?.(task);
	};

	return (
		<button onClick={onClick} className={styles.removeButton}>
			<Icon path={mdiDeleteOutline} size={1.5} color={"#b91ed3"} />
		</button>
	);
};

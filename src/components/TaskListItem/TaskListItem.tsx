import { useContext, useState } from "react";
import { Task } from "../../types";
import { RemoveTaskButton } from "../RemoveTaskButton/RemoveTaskButton";
import { CompleteTaskButton } from "../CompleteTaskButton/CompleteTaskButton";
import { EditTaskButton } from "../EditTaskButton/EditTask";
import { SaveTaskButton } from "../SaveTaskButton/SaveTaskButton";
import { Field, Form, Formik } from "formik";
import { TaskContext } from "../../contexts/TaskContext";
import Icon from "@mdi/react";
import { mdiArrowLeftBoldOutline } from "@mdi/js";

import styles from "./TaskListItem.module.scss";

type Props = {
	task: Task;
};

export const TaskListItem = ({ task }: Props) => {
	const [isOpen, setOpen] = useState(false);
	const { updateTask } = useContext(TaskContext);

	const onSubmit = (values: Task) => {
		updateTask?.(values);
		setOpen(false);
	};
	return (
		<div>
			{isOpen ? (
				<div className={styles.task}>
					<Formik initialValues={task} onSubmit={onSubmit}>
						<Form className={styles.form}>
							<Field type="text" name="content" className={styles.taskInput} />
							<SaveTaskButton />
						</Form>
					</Formik>
				</div>
			) : (
				<div className={styles.task}>
					<EditTaskButton onClick={() => setOpen(true)} />
					{task.content}
					<div className={styles.removeAndEditContainer}>
						<RemoveTaskButton task={task} />
						<Icon path={mdiArrowLeftBoldOutline} size={1.5} color={"#b91ed3"} />
						<CompleteTaskButton task={task} />
					</div>
				</div>
			)}
		</div>
	);
};

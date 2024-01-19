import { useContext, useState } from "react";
import { Task } from "../../types";
import { RemoveTaskButton } from "../RemoveTaskButton/RemoveTaskButton";
import { ChangeTaskStatusButton } from "../CompleteTaskButton/ChangeTaskStatusButton";
import { EditTaskButton } from "../EditTaskButton/EditTask";
import { SaveTaskButton } from "../SaveTaskButton/SaveTaskButton";
import { Field, Form, Formik } from "formik";
import { TaskContext } from "../../contexts/TaskContext";
import styles from "./TaskListItem.module.scss";
import classNames from "classnames";

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
			) : task.completed ? (
				<div className={classNames(styles.task, styles.completedTask)}>
					<EditTaskButton onClick={() => setOpen(true)} />
					{task.content}
					<div className={styles.buttonsContainer}>
						<RemoveTaskButton task={task} />
						<ChangeTaskStatusButton task={task} />
					</div>
				</div>
			) : (
				<div className={styles.task}>
					<EditTaskButton onClick={() => setOpen(true)} />
					{task.content}
					<div className={styles.buttonsContainer}>
						<RemoveTaskButton task={task} />
						<ChangeTaskStatusButton task={task} />
					</div>
				</div>
			)}
		</div>
	);
};

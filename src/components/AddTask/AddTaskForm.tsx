import { ErrorMessage, Field, Form, Formik } from "formik";
import { Task } from "../../types";
import { createTaskSchema } from "../../schemas";
import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import styles from "./AddTask.module.scss";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

export const AddTaskForm = () => {
	const { addTask } = useContext(TaskContext);
	const onSubmit = (values: Omit<Task, "id">) => {
		addTask?.(values);
	};

	return (
		<Formik
			initialValues={{
				content: "Mizianie",
				completed: false,
			}}
			onSubmit={onSubmit}
			validationSchema={createTaskSchema}
		>
			{({ errors }) => (
				<Form>
					<div className={styles.form}>
						<Field
							type="text"
							name="content"
							as="textarea"
							className={styles.textarea}
						/>

						<button type="submit" className={styles.button}>
							<Icon path={mdiClose} size={1} />
						</button>
					</div>
					<ErrorMessage name="content" />
				</Form>
			)}
		</Formik>
	);
};

import { ErrorMessage, Field, Form, Formik } from "formik";
import { Task } from "../types";
import { createTaskSchema } from "../schemas";
import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

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
					<Field type="text" name="content" as="textarea" />
					<ErrorMessage name="content" />
					<button type="submit">Dodaj</button>
				</Form>
			)}
		</Formik>
	);
};

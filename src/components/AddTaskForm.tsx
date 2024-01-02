import { Field, Form, Formik } from "formik";
import { Task } from "../types";

export const AddTaskForm = ({ onTaskAdded }: { onTaskAdded: () => void }) => {
	const serializedTasks = localStorage.getItem("tasks");
	const tasks = serializedTasks ? (JSON.parse(serializedTasks) as Task[]) : [];

	const onSubmit = (values: Task) => {
		localStorage.setItem("tasks", JSON.stringify([...tasks, values]));
		onTaskAdded();
		console.log(values);
	};

	return (
		<Formik initialValues={{ content: "Mizianie" }} onSubmit={onSubmit}>
			<Form>
				<Field type="text" name="content" as="textarea" />
				<button type="submit">Dodaj</button>
			</Form>
		</Formik>
	);
};

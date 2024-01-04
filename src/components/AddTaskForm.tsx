import { Field, Form, Formik } from "formik";
import { Task } from "../types";
import { getTasks, saveTasks } from "./taskHelpers";

export const AddTaskForm = ({ onTaskAdded }: { onTaskAdded: () => void }) => {
	const onSubmit = (values: Task) => {
		const tasks = getTasks();
		saveTasks([...tasks, values]);
		onTaskAdded();
	};

	return (
		<Formik
			initialValues={{ content: "Mizianie", completed: false }}
			onSubmit={onSubmit}
		>
			<Form>
				<Field type="text" name="content" as="textarea" />
				<button type="submit">Dodaj</button>
			</Form>
		</Formik>
	);
};

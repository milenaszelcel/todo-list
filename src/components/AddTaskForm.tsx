import { Field, Form, Formik } from "formik";
import { Task } from "../types";
import { getTasks, saveTasks } from "./taskHelpers";
import { v4 as uuid } from "uuid";

export const AddTaskForm = ({ onTaskAdded }: { onTaskAdded: () => void }) => {
	const onSubmit = (values: Omit<Task, "id">) => {
		const tasks = getTasks();
		saveTasks([...tasks, { ...values, id: uuid() }]);
		onTaskAdded();
	};

	return (
		<Formik
			initialValues={{
				content: "Mizianie",
				completed: false,
			}}
			onSubmit={onSubmit}
		>
			<Form>
				<Field type="text" name="content" as="textarea" />
				<button type="submit">Dodaj</button>
			</Form>
		</Formik>
	);
};

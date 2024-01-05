import { useState } from "react";
import { Task } from "../types";
import { RemoveTaskButton } from "./RemoveTaskButton";
import { CompleteTaskButton } from "./CompleteTaskButton";
import { EditTaskButton } from "./EditTask";
import { SaveTaskButton } from "./SaveTaskButton";
import { getTasks, replaceTask, saveTasks, updateTask } from "./taskHelpers";
import { Field, Form, Formik } from "formik";

type Props = {
	task: Task;
	tasks: Task[];
	onTaskChange: () => void;
};

export const TaskListItem = ({ task, onTaskChange }: Props) => {
	const [isOpen, setOpen] = useState(false);

	const onSubmit = (values: Task) => {
		const tasks = getTasks();
		const filteredTasks = updateTask(values, tasks);
		saveTasks(filteredTasks);
		onTaskChange();
		setOpen(false);
	};
	return (
		<div>
			{isOpen ? (
				<Formik initialValues={task} onSubmit={onSubmit}>
					<Form>
						<Field type="text" name="content" />
						<SaveTaskButton />
					</Form>
				</Formik>
			) : (
				<div>
					{task.content}
					<RemoveTaskButton task={task} onTaskChange={onTaskChange} />
					<CompleteTaskButton task={task} onTaskChange={onTaskChange} />
					<EditTaskButton onClick={() => setOpen(true)} />
				</div>
			)}
		</div>
	);
};

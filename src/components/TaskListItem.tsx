import { useContext, useState } from "react";
import { Task } from "../types";
import { RemoveTaskButton } from "./RemoveTaskButton";
import { CompleteTaskButton } from "./CompleteTaskButton";
import { EditTaskButton } from "./EditTask";
import { SaveTaskButton } from "./SaveTaskButton";
import { Field, Form, Formik } from "formik";
import { TaskContext } from "../contexts/TaskContext";

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
				<Formik initialValues={task} onSubmit={onSubmit}>
					<Form>
						<Field type="text" name="content" />
						<SaveTaskButton />
					</Form>
				</Formik>
			) : (
				<div>
					{task.content}
					<RemoveTaskButton task={task} />
					<CompleteTaskButton task={task} />
					<EditTaskButton onClick={() => setOpen(true)} />
				</div>
			)}
		</div>
	);
};

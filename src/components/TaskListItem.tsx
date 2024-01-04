import { useState } from "react";
import { Task } from "../types";
import { RemoveTaskButton } from "./RemoveTaskButton";
import { CompleteTaskButton } from "./CompleteTaskButton";
import { EditTaskButton } from "./EditTask";
import { SaveTaskButton } from "./SaveTaskButton";

type Props = {
	task: Task;
};

export const TaskListItem = ({ task }: Props) => {
	const [isOpen, setOpen] = useState(false);
	return (
		<div>
			{isOpen ? (
				<div>
					<input type="text" value={task.content} />
					<SaveTaskButton onClick={() => setOpen(false)} task={task} />
				</div>
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

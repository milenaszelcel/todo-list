import { Task } from "../types";
import { TaskListItem } from "./TaskListItem";

type Props = {
	tasks: Task[];
	onTaskChange: () => void;
};

export const TaskList = ({ tasks, onTaskChange }: Props) => {
	if (!tasks.length) {
		return <div>Nie ma zadań</div>;
	}

	return (
		<ul>
			{tasks.map((task) => (
				<li>
					<TaskListItem task={task} tasks={tasks} onTaskChange={onTaskChange} />
				</li>
			))}
		</ul>
	);
};

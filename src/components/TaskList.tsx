import { Task } from "../types";
import { TaskListItem } from "./TaskListItem";

type Props = {
	tasks: Task[];
};

export const TaskList = ({ tasks }: Props) => {
	if (!tasks.length) {
		return <div>Nie ma zadań</div>;
	}

	return (
		<ul>
			{tasks.map((task) => (
				<li>
					<TaskListItem task={task} />
				</li>
			))}
		</ul>
	);
};

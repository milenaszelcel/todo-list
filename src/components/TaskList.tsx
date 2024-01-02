import { Task } from "../types";
import { RemoveTaskButton } from "./RemoveTaskButton";

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
					{task.content} <RemoveTaskButton task={task} />
				</li>
			))}
		</ul>
	);
};

import Icon from "@mdi/react";
import { mdiPencilOutline } from "@mdi/js";
import styles from "./EditTaskButton.module.scss";

export const EditTaskButton = ({ onClick }: { onClick: () => void }) => {
	return (
		<button onClick={onClick} className={styles.editButton}>
			<Icon path={mdiPencilOutline} size={1.5} color={"#b91ed3"} />
		</button>
	);
};

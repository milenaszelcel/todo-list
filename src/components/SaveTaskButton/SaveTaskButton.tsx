import Icon from "@mdi/react";
import { mdiContentSaveOutline } from "@mdi/js";
import styles from "./SaveTaskButton.module.scss";

export const SaveTaskButton = () => {
	return (
		<button type="submit" className={styles.saveButton}>
			<Icon path={mdiContentSaveOutline} size={1.5} color={"#b91ed3"} />
		</button>
	);
};

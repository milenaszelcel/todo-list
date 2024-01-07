import { ObjectSchema } from "yup";
import * as yup from "yup";
import { Task } from "./types";

export const createTaskSchema: ObjectSchema<Omit<Task, "id">> = yup.object({
	content: yup.string().required().min(2),
	completed: yup.bool().required(),
});

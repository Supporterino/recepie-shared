import { Ingredient } from "..";

export interface UpdateData {
	id: string;
	name?: string;
	description?: string;
	ingredients?: Ingredient[];
	steps?: string[];
	tags?: string[];
}

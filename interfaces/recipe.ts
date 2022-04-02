import { Ingredient } from "..";

export interface Recipe {
	id?: string;
	name: string;
	description: string;
	ingredients: Ingredient[];
	steps: string[];
	rating?: number | string;
	tags: string[];
	owner: string;
	creationTimestamp?: Date;
	updateTimestamp?: Date;
}

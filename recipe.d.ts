import { Ingredient } from "./ingredient";

export interface Recipe {
	_id?: string;
	name: string;
	description: string;
	ingredients: Ingredient[];
	steps: string[];
	rating?: number;
	tags: string[];
	owner: string;
	creationTimestamp?: Date;
	updateTimestamp?: Date;
}

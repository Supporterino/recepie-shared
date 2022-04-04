import { Ingredient } from "..";

export interface CreationData {
	name: string;
	description: string;
	ingredients: Ingredient[];
	steps: string[];
	tags: string[];
}

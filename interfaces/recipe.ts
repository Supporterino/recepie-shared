import { Ingredient } from "..";
import { RatingInfo } from "./ratingInfo";

export interface Recipe {
	id: string;
	name: string;
	description: string;
	ingredients: Ingredient[];
	steps: string[];
	rating: RatingInfo;
	tags: string[];
	owner: string;
	creationTimestamp: Date;
	updateTimestamp: Date;
	isFavorite: boolean;
	myRating: number;
}

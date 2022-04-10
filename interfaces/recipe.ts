import { Ingredient, User } from "..";
import { RatingInfo } from "./ratingInfo";

export interface Recipe {
	id: string;
	name: string;
	description: string;
	ingredients: Ingredient[];
	steps: string[];
	rating: RatingInfo;
	tags: string[];
	owner: User;
	picture: string;
	creationTimestamp: Date;
	updateTimestamp: Date;
	isFavorite: boolean;
	myRating: number;
	isCookList: boolean;
}

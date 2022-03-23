import { Response } from "./response";

export interface RatingResponse extends Response {
    success: boolean;
	method: RatingOperations;
	recipeID: string;
	userID: string;
}

export enum RatingOperations {
	ADD,
	UPDATE,
	REMOVE
}

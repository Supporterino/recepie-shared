import { RatingOperations, Response } from "..";

export interface RatingResponse extends Response {
  success: boolean;
  method: RatingOperations;
  recipeID: string;
  userID: string;
}

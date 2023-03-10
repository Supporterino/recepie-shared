import {
  type RatingOperations,
  type Response,
} from '..';

export type RatingResponse = Response & {
  method: RatingOperations,
  recipeID: string,
  success: boolean,
  userID: string,
};

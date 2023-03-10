import {
  type Response,
} from '..';

export type UpdateResponse = Response & {
  recipeID: string,
};

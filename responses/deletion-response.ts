import {
  type Response,
} from '..';

export type DeletionResponse = Response & {
  recipeID: string,
};

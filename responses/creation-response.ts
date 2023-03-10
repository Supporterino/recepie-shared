import {
  type Response,
} from '..';

export type CreationResponse = Response & {
  recipeID: string,
};

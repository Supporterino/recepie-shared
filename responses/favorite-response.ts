import {
  type Response,
} from '..';

export type FavoriteResponse = Response & {
  method: string,
  success: boolean,
};

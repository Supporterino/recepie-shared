import {
  type Response,
} from '..';

export type LoginResponse = Response & {
  jwtToken: string,
  refreshToken: string,
  userID: string,
};

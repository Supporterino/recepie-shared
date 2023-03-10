import {
  type Role,
} from '../enums';

export type User = {
  avatar: string,
  id: string,
  joinedAt: Date,
  role: Role,
  username: string,
  verified: boolean,
};

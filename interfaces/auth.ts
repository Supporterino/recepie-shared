import {
  type Role,
} from '../enums';

export type Auth = {
  email: string,
  id: string,
  role: Role,
  verification?: string,
};

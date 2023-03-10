import {
  type Ingredients,
} from './ingredients';

export type UpdateData = {
  description?: string,
  id: string,
  ingredients?: Ingredients,
  name?: string,
  steps?: string[],
  tags?: string[],
};

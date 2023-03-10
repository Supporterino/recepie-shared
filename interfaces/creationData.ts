import {
  type Ingredients,
} from './ingredients';

export type CreationData = {
  description: string,
  ingredients: Ingredients,
  name: string,
  steps: string[],
  tags: string[],
};

import {
  type Ingredient,
} from './ingredient';
import {
  type IngredientSection,
} from './ingredientSection';

export type Ingredients = {
  items?: Ingredient[],
  numServings: number,
  sections?: IngredientSection[],
};

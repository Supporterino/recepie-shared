import { Ingredient } from "./ingredient";
import { IngredientSection } from "./ingredientSection";

export interface Ingredients {
    numServings: number;
    items?: Ingredient[];
    sections?: IngredientSection[];
}

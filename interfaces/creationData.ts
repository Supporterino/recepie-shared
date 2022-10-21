import { Ingredients } from "./ingredients";

export interface CreationData {
  name: string;
  description: string;
  ingredients: Ingredients;
  steps: string[];
  tags: string[];
}

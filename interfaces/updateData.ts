import { Ingredients } from "./ingredients";

export interface UpdateData {
    id: string;
    name?: string;
    description?: string;
    ingredients?: Ingredients;
    steps?: string[];
    tags?: string[];
}

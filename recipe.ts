import { Ingredient } from "./ingredient";

export class Recipe {
	constructor(public _id: string, public name: string, public description: string, public ingredients: Ingredient[], public steps: string[], public tags: string[], public owner: string, public creationTimestamp: Date, public updateTimestamp: Date, public rating?: number) {}
}

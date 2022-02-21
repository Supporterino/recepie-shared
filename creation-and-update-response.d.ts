import { Response } from "./response";

export interface CreationAndUpdateResponse extends Response {
    recipeId: string;
}

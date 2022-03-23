import { Response } from "./response";

export interface FavoriteResponse extends Response {
    success: boolean;
	method: string;
}
